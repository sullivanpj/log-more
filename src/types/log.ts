import { ResultParams } from "../types/result";

export type LogEventType = "DEBUG" | "INFO" | "WARNING" | "ERROR";

export type LogEvent = Omit<ResultParams, "type"> & {
  /**
   * A unique string that can be used to identify the event
   */
  id: string;

  /**
   * A string representing the source that initiated the event
   */
  source?: string;

  /**
   * The type of the event
   */
  type: LogEventType;

  /**
   * A free-format object that will be added to all LogEvent objects to be used in custom logic added by the user in writeLogEvent.
   */
  context?: any;
};

export type LogWriteParams = Error | LogEvent | string;

export type LogConfig = {
  /**
   * The function that will be used to write the events to the logs. Can be overridden by the user to apply custom logging. The default functionality will try to write to the console.
   */
  writeLogEvent: (logEvent: LogEvent) => any;

  /**
   * A prefix string to prepend to the start of all log messages
   */
  logMessagePrefix?: string;

  /**
   * A postfix string to append to the end of all log messages
   */
  logMessagePostfix?: string;

  /**
   * An indicator specifying if a stack trace should be included in the logs
   */
  appendStack: boolean;

  /**
   * The default LogEventType to be used when none is provided
   */
  defaultLogEventType: LogEventType;

  /**
   * The default event source string to be used when none is provided
   */
  defaultEventSource: string;

  /**
   * The default result name to be used when none is provided
   */
  defaultResultName: string;

  /**
   * The default error message to use for results when none is provided
   */
  defaultErrorResultMessage: string;

  /**
   * The length of the LogEvent's id field
   */
  logEventIdLength: number;

  /**
   * The length of the Result's id field
   */
  resultIdLength: number;

  /**
   * Should results with a type of "WARNING" be considered a failure
   */
  failValidateOnWarning: boolean;

  /**
   * Should the validate function consider null, undefined, or non-result type objects a failure
   */
  failValidateOnEmpty: boolean;

  /**
   * A free-format object that will be added to all LogEvent objects to be used in custom logic added by the user in writeLogEvent.
   */
  context?: any;
};
