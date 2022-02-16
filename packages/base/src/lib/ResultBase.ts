import { DefaultLogRightConfigBase } from "./constants";

/**
 * A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success.
 */
export class ResultBase extends Error {
  /**
   * A string ID used in identifying if the object is a result
   */
  public readonly instanceId?: string = LOG_RIGHT_GLOBAL_RESULT_INSTANCE_ID;

  constructor(message?: string) {
    super(message ?? DefaultLogRightConfigBase.message);

    if (!this.stack) {
      this.stack = new Error().stack;
    }
  }
}
