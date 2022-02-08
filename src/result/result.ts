/** @format */

import { nanoid } from "nanoid";
import { ResultParams } from "src/types/result";
import { ResultValidationTypes } from "src/constants/result-validation-types";
import { ResultValidationType } from "src/types/result";
import { isResult } from "src/lib/isResult";
import { ConfigurationManager } from "src/configuration-manager";
import { validate } from "src/lib/validate/validate";
import { ResultInstanceId } from "src/constants/result-instance-id";
import { LogEventBaseTypes } from "src/constants/log-event-base-types";

/**
 * A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.
 */
export class Result<TReturnValues = any> extends Error {
  /**
   * A helper function to create a result object
   * @param params The parameters used to create the result object
   * @returns The created result object
   */
  public static create(params: Omit<ResultParams, "userId"> | Error): Result {
    try {
      const { userId } = ConfigurationManager.getConfig();

      return new Result({ ...params, userId });
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * A helper function to return back a result with a message to log
   * @param message The message details to assign to the result object
   * @param values The return values to be added to the result object
   * @param eventType The event type to assign to the result object
   * @returns The result object specifying the message
   */
  public static notify(
    message?: any,
    values?: any,
    eventType: string = LogEventBaseTypes.WARNING
  ): Result {
    try {
      let result: Result;
      if (isResult(message)) {
        result = message;
      } else if (typeof message === "string") {
        result = Result.create({
          message: message,
          eventType,
        });
      } else {
        result = Result.create(message);
      }

      result.values = values;
      return result;
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * A helper function to return back an error result
   * @param error The error details to assign to the result object
   * @param eventType The event type to assign to the result object
   * @returns The result object specifying the error
   */
  public static error(error?: any, eventType?: string): Result {
    try {
      let result: Result = Result.notify(
        error,
        undefined,
        eventType ?? LogEventBaseTypes.ERROR
      );
      result.validationType = ResultValidationTypes.ERROR;

      return result;
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * A helper function to return back an warning result
   * @param warning The warning details to assign to the result object
   * @param values The return values to be added to the result object
   * @param eventType The event type to assign to the result object
   * @returns The result object specifying the warning
   */
  public static warning(
    warning?: any,
    values?: any,
    eventType?: string
  ): Result {
    try {
      let result: Result = Result.notify(
        warning,
        values,
        eventType ?? LogEventBaseTypes.WARNING
      );
      result.validationType = ResultValidationTypes.WARNING;

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
      return Result.create({
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
  public values?: TReturnValues;

  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  public userId: string;

  /**
   * A string ID used in identifying if the object is a result
   */
  public instanceId: string = ResultInstanceId;

  constructor(params: ResultParams<TReturnValues> | Error) {
    super(params.message);

    const { id, eventType, details, message, name, stack, values } =
      params as ResultParams<TReturnValues>;
    const {
      resultIdLength,
      defaultResultName,
      defaultErrorResultMessage,
      defaultEventType,
      userId,
    } = ConfigurationManager.getConfig();

    this.id = id ? id : nanoid(resultIdLength);
    this.instanceId = ResultInstanceId;
    this.eventType = eventType ? eventType : defaultEventType;
    this.message = message ? message : defaultErrorResultMessage;
    this.details = details;
    this.name = name ? name : this.name ? this.name : defaultResultName;
    this.stack = stack ? stack : this.stack;
    this.values = values;

    const resultParams = params as ResultParams<TReturnValues>;

    this.userId = resultParams?.userId ? resultParams.userId : userId;
    this.validationType =
      resultParams?.validationType ??
      ConfigurationManager.getEventTypeRegistry(this.eventType)
        .validationType ??
      ResultValidationTypes.SUCCESS;
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
