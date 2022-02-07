import { nanoid } from "nanoid";
import { ResultParams } from "./types/result";
import { ResultValidationTypes } from "./constants/result-validation-types";
import { ResultValidationType } from "./types/result";
import { isResult } from "./utils/isResult";
import { ConfigurationManager } from "./configuration-manager";
import { validate } from "./utils/validate";
import { resultInstanceId } from "./constants/result-instance-id";
import { LogEventBaseTypes } from "./constants/log-event-base-types";

/**
 * A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.
 */
export class Result extends Error {
  /**
   * A helper function to return back an error result
   * @param error The error details to assign to the result object
   * @param eventType The event type to assign to the result object
   * @returns The result object specifying the error
   */
  public static error(error?: any, eventType?: string): Result {
    try {
      let result: Result;
      if (isResult(error)) {
        result = error;
      } else if (typeof error === "string") {
        result = new Result({
          message: error,
          eventType: eventType ? eventType : LogEventBaseTypes.ERROR,
        });
      } else {
        result = new Result(error);
      }

      result.validationType = ResultValidationTypes.ERROR;

      return result;
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * A helper function to return back a success result
   * @param values The return values to be added to the result object
   * @param eventType The event type to assign to the result object
   * @returns The result object specifying the function execution was successful
   */
  public static success(values?: any, eventType?: string): Result {
    try {
      return new Result({
        eventType: eventType ? eventType : LogEventBaseTypes.INFO,
        validationType: ResultValidationTypes.SUCCESS,
        values,
      });
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * The string ID used to identify the specific result object
   */
  public id: string;

  /**
   * The event type of the result
   */
  public eventType: string;

  /**
   * The validation type of the result
   */
  public validationType: ResultValidationType;

  /**
   * A field specifying additional information to be added to the log
   */
  public details?: string;

  /**
   * A field containing the values returned from the function call
   */
  public values?: any;

  /**
   * A string ID used in identifying if the object is a result
   */
  public instanceId: string = resultInstanceId;

  constructor(params: ResultParams | Error) {
    super(params.message);

    const { id, eventType, details, message, name, stack, values } =
      params as ResultParams;
    const {
      resultIdLength,
      defaultResultName,
      defaultErrorResultMessage,
      defaultLogEventType,
      eventTypeRegistry,
    } = ConfigurationManager.getConfig();

    this.id = id ? id : nanoid(resultIdLength);
    this.instanceId = resultInstanceId;
    this.eventType = eventType ? eventType : defaultLogEventType;
    this.message = message ? message : defaultErrorResultMessage;
    this.details = details;
    this.name = name ? name : this.name ? this.name : defaultResultName;
    this.stack = stack ? stack : this.stack;
    this.values = values;

    let validationType = (params as ResultParams)?.validationType;
    if (
      !validationType &&
      eventTypeRegistry?.[this.eventType]?.validationType
    ) {
      validationType = eventTypeRegistry[this.eventType].validationType;
    }

    this.validationType = validationType
      ? validationType
      : ResultValidationTypes.SUCCESS;
  }

  /**
   *
   * @returns Returns the result message string
   */
  public toString(): string {
    try {
      return this.message;
    } catch (e) {
      return "An error occurred while processing the request. Please try again.";
    }
  }

  /**
   * Is the result successful
   */
  public get isSuccessful(): boolean {
    return validate(this, ResultValidationTypes.SUCCESS, false);
  }

  /**
   * Is the result a failure
   */
  public get isFailure(): boolean {
    return !this.isSuccessful;
  }
}
