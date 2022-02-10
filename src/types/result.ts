/**
 * The potential values of the Validation Type field
 */
export type ResultValidationType = "SUCCESS" | "WARNING" | "ERROR";

/**
 * Parameters that can be passed into the Result class's constructor to initialize an object
 */
export type ResultParams<TReturnValues = any> = {
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
   * The event type of the result
   */
  eventType?: string;

  /**
   * The validation result (SUCCESS, WARNING, ERROR)
   */
  validationType?: ResultValidationType;

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
  values?: TReturnValues;

  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  userId: string;
};
