import { ResultParams } from "../types/result";

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
  eventType: string;

  /**
   * The formatted log event message
   */
  formatted?: string;

  /**
   * A free-format object that will be added to all LogEvent objects to be used in custom logic added by the user in writeLogEvent.
   */
  context?: any;
};

export type LogWriteParams = Error | LogEvent | string;

export type WriteLogEventFunction = (logEvent: LogEvent) => any;
