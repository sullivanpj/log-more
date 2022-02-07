import { LogEventTypes } from "src/constants/log-event-types";
import { ResultParams } from "src/types/result";

export type LogEventType =
  | LogEventTypes.DEBUG
  | LogEventTypes.INFO
  | LogEventTypes.WARNING
  | LogEventTypes.ERROR;

export type LogEvent = Omit<ResultParams, "type"> & {
  id: string;
  source?: string;
  type: LogEventType;
};

export type LogWriteParams = Error | LogEvent | string;

export type LogConfig = {
  writeLogEvent: (logEvent: LogEvent) => any;
  logMessagePrefix?: string;
  logMessagePostfix?: string;
  appendStack: boolean;
  defaultLogEventType: LogEventType;
  defaultEventSource: string;
  defaultResultName: string;
  logEventIdLength: number;
  resultIdLength: number;
  context?: any;
};
