/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CallbackFunction,
  DefaultEventTypes,
  EventType,
  IResult,
  isErrorObject,
  LogEventConfigBase,
  ResultBase,
  ResultBaseParams,
  Severity,
  SeverityTypes,
  ConfigurationManagerBase,
} from "@log-more/base";
import { nanoid } from "nanoid/non-secure";
import { isResult } from "./isResult";
import { validate } from "./validate";

/**
 * A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.
 */
export class Result<TReturned = any | undefined>
  extends ResultBase
  implements IResult<TReturned>
{
  /**
   * A helper function to create a result object
   * @param params - The parameters used to create the result object
   * @returns The created result object
   */
  public static create = <TReturned = any>(
    params: Partial<ResultBaseParams<TReturned>> | Error | string
  ): Result<TReturned> => {
    try {
      const config = ConfigurationManagerBase.getConfig();

      if (isResult(params)) {
        return new Result(params as Result);
      } else if (isErrorObject(params)) {
        return new Result({ ...params, type: "EXCEPTION" });
      } else if (typeof params === "string") {
        return new Result({
          ...config,
          message: params,
        });
      } else {
        return new Result({ ...config, ...params });
      }
    } catch (e) {
      return Result.error(e as Error);
    }
  };

  /**
   * A helper function to return back an error result
   * @param error - The error details to assign to the result object
   * @param type - The event type to assign to the result object
   * @returns The result object specifying the error
   */
  public static error<TReturned = any>(
    error?: any,
    type?: EventType
  ): Result<TReturned> {
    try {
      let result: Result<TReturned>;
      if (typeof error === "string") {
        result = Result.create<TReturned>({
          message: error,
          type: type ?? DefaultEventTypes.ERROR,
          severity: SeverityTypes.CRITICAL,
        });
      } else {
        result = Result.create<TReturned>({
          type: type ?? DefaultEventTypes.ERROR,
          severity: SeverityTypes.CRITICAL,
          ...error,
        });
      }
      result.severity = SeverityTypes.CRITICAL;

      return result;
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * A helper function to return back an warning result
   * @param message - The warning message to assign to the result object
   * @param data - The return values to be added to the result object
   * @param type - The event type to assign to the result object
   * @returns The result object specifying the warning
   */
  public static warning = <TReturned = any>(
    message?: any,
    data?: TReturned,
    type?: EventType
  ): Result<TReturned> => {
    try {
      const severity =
        (ConfigurationManagerBase.getConfigItem("severityReport") as
          | Severity
          | undefined) ?? SeverityTypes.FIVE;

      const result: Result<TReturned> = Result.create<TReturned>({
        message,
        data,
        type: type ?? DefaultEventTypes.WARNING,
      });
      result.severity = severity;

      return result;
    } catch (e) {
      return Result.error(e as Error);
    }
  };

  /**
   * A helper function to return back a success result
   * @param values - The return values to be added to the result object
   * @param eventType - The event type to assign to the result object
   * @returns The result object specifying the function execution was successful
   */
  public static success = <TReturned = any>(
    data?: TReturned,
    type?: EventType
  ): Result<TReturned> => {
    try {
      return Result.create<TReturned>({
        type: type ? type : DefaultEventTypes.SUCCESS,
        severity: SeverityTypes.NONE,
        data,
      });
    } catch (e) {
      return Result.error(e as Error);
    }
  };

  /**
   * A unique string that can be used to identify the event
   */
  public id: string;

  /**
   * The type of the event (values can be defined by the user)
   */
  public type: EventType;

  /**
   * A string representing the source that initiated the event
   */
  public source?: string | null;

  /**
   * Determines the severity level of the event (a number 0 through 10). This field is used to determine how the system should respond to an event
   */
  public severity: Severity;

  /**
   * A string that includes additional information about the event
   */
  public details?: string | null;

  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  public userId?: string;

  /**
   * A free-format field that will be added to all IEvent objects (to be used in custom logic added by the user).
   */
  public context?: unknown;

  /**
   * A field containing any values returned from the function call
   */
  public callback?: CallbackFunction;

  /**
   * A field containing any values returned from the function call
   */
  public data?: TReturned;

  /**
   * An indicator specifying the last results of isValidated. If it has not been validated yet, return null
   */
  public isValidated?: boolean | null = null;

  constructor(params: ResultBaseParams<TReturned> & { userId?: string }) {
    super(params.message);

    const { id, severity, details, message, name, stack, data, source } =
      params as IResult;
    let type = (params as IResult)?.type;

    const config = ConfigurationManagerBase.getConfig();
    const logEventRegistry = config.logEventRegistry;

    // Search for the log event defaults in config
    let logEventConfig: LogEventConfigBase | undefined;
    if (type) {
      logEventConfig = logEventRegistry?.[type];
    }

    if (!logEventConfig) {
      type = Object.keys(logEventRegistry).find(
        (key: string) =>
          logEventRegistry[key].severity === severity ||
          logEventRegistry[key].name === name ||
          logEventRegistry[key].message === message
      ) as EventType;

      logEventConfig = logEventRegistry[type];
      if (!logEventConfig) {
        if (severity === SeverityTypes.NONE) {
          type = DefaultEventTypes.SUCCESS;
        } else if (severity >= config.severityError) {
          type = DefaultEventTypes.ERROR;
        } else if (severity >= config.severityReport) {
          type = DefaultEventTypes.WARNING;
        }

        logEventConfig = logEventRegistry[type];
        if (!logEventConfig) {
          logEventConfig = ConfigurationManagerBase.getLogEventConfig(
            DefaultEventTypes.ERROR
          );
        }
      }
    }

    this.id = id ? id : nanoid(config.eventIdLength);
    this.type = type ? type : logEventConfig.type;
    this.severity = severity ? severity : logEventConfig.severity;
    this.source = source ? source : logEventConfig.source;

    this.details = details;
    this.data = data;

    this.userId = config.userId;
    this.context = config.context;
    this.callback = config.callback;

    this.message = message ? message : logEventConfig.message;
    this.name = name ? name : this.name ? this.name : logEventConfig.name;
    this.stack = stack ? stack : this.stack;
  }

  /**
   * A function call to validate if the result is a success or failure
   */
  public validate = (): boolean => {
    try {
      if (this.isValidated === null) {
        this.isValidated = validate(this);
      }
    } catch (e) {
      this.isValidated = false;
    }

    return !!this.isValidated;
  };
}
