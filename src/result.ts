import { nanoid } from "nanoid";
import { ResultParams } from "src/types/result";
import { ResultTypes } from "src/constants/result-types";
import { Log } from "src/log";
import { ResultType } from "src/types/result";

const instanceId = nanoid(32);

export class Result extends Error {
  public static isResult(param: any): param is Result {
    try {
      const result: Result | undefined = param as Result;
      if (!!result?.instanceId && result.instanceId === instanceId) {
        return true;
      }

      return false;
    } catch (e) {
      Log.error(e as Error);
    }

    return false;
  }

  public id: string;
  public type: ResultType;
  public details?: string;
  public instanceId: string = instanceId;

  constructor(params: ResultParams | Error) {
    super(params.message);

    const { id, type, details, message, name, stack } = params as ResultParams;
    const { resultIdLength, defaultResultName } = Log.getConfig();

    this.id = id ? id : nanoid(resultIdLength);
    this.instanceId = instanceId;
    this.type = type ? type : ResultTypes.SUCCESS;
    this.message = message;
    this.details = details;
    this.name = name ? name : this.name ? this.name : defaultResultName;
    this.stack = stack ? stack : this.stack;
  }

  public toString(): string {
    try {
      return this.message;
    } catch (e) {
      return "An error occurred while processing the request. Please try again.";
    }
  }

  public get isFailure(): boolean {
    return this.type > 0;
  }
}
