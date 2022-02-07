import { WriteLogEventFunction } from "./log";
import { ResultValidationType } from "./result";

export type CustomEventTypeDetails = {
  /**
   * The function to be called when logging the event
   */
  writeLogEventFunction: WriteLogEventFunction;

  /**
   * The result-type of the event (this will be used to determine if we should consider the result a success, warning, or error)
   */
  validationType: ResultValidationType;

  /**
   * An object that is thrown if this event occurs. If nothing is provided, nothing will be thrown.
   */
  throwOnEvent?: any;
};

export type Configuration = {
  /**
   * The default function that will be used to write the events to the logs. Can be overridden by the user to apply custom logging. The default functionality will try to write to the console.
   */
  writeLogEvent: WriteLogEventFunction;

  /**
   * A look-up dictionary that uses Custom user defined Log Event Type strings as keys and an object with details about that event as the value
   */
  eventTypeRegistry: Record<string, CustomEventTypeDetails>;

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
  defaultLogEventType: string;

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
