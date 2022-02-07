export type ResultType = "SUCCESS" | "WARNING" | "ERROR";

export type ResultParams = {
  /**
   * A unique string that can be used to identify the result
   */
  id?: string;

  /**
   * The string name of the result that is being returned
   */
  name?: string;

  /**
   * A message string that will be printed to the logs
   */
  message?: string;

  /**
   * The type of the result
   */
  type?: ResultType;

  /**
   * An additional details string that will be printed to the logs
   */
  details?: string;

  /**
   * The stack trace of the code where the result occurred
   */
  stack?: string;

  /**
   * A field containing any values returned from the function call
   */
  values?: any;
};
