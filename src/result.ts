import { nanoid } from "nanoid";
import { ResultParams } from "./types/result";
import { ResultTypes } from "./constants/result-types";
import { ResultType } from "./types/result";
import { isResult } from "./utils/isResult";
import { ConfigurationManager } from "./configuration-manager";
import { validate } from "./utils/validate";
import { resultInstanceId } from "./constants/result-instance-id";

/**
 * A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.
 */
export class Result extends Error {
  /**
   * A helper function to return back an error result
   * @param error The error details to assign to the result object
   * @returns The result object specifying the error
   */
  public static error(error?: any): Result {
    try {
      let result: Result;
      if (isResult(error)) {
        result = error;
      } else if (typeof error === "string") {
        result = new Result({ message: error, type: ResultTypes.ERROR });
      } else {
        result = new Result(error);
      }

      result.type = ResultTypes.ERROR;

      return result;
    } catch (e) {
      return new Result(e as Error);
    }
  }

  /**
   * A helper function to return back a success result
   * @param values The return values to be added to the result object
   * @returns The result object specifying the function execution was successful
   */
  public static success(values?: any): Result {
    try {
      return new Result({ type: ResultTypes.SUCCESS, values });
    } catch (e) {
      return new Result(e as Error);
    }
  }

  /**
   * The string ID used to identify the specific result object
   */
  public id: string;

  /**
   * The type of the result
   */
  public type: ResultType;

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

    const { id, type, details, message, name, stack, values } =
      params as ResultParams;
    const { resultIdLength, defaultResultName, defaultErrorResultMessage } =
      ConfigurationManager.getConfig();

    this.id = id ? id : nanoid(resultIdLength);
    this.instanceId = resultInstanceId;
    this.type = type ? type : ResultTypes.SUCCESS;
    this.message = message ? message : defaultErrorResultMessage;
    this.details = details;
    this.name = name ? name : this.name ? this.name : defaultResultName;
    this.stack = stack ? stack : this.stack;
    this.values = values;
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
    return validate(this);
  }

  /**
   * Is the result a failure
   */
  public get isFailure(): boolean {
    return !this.isSuccessful;
  }
}
