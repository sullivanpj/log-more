import { LogEventTypes } from "src/constants/log-event-types";

export type LogEventType =
  | LogEventTypes.DEBUG
  | LogEventTypes.INFO
  | LogEventTypes.WARNING
  | LogEventTypes.ERROR;

export type LogEvent = {
  id: string;
  name?: string;
  source?: string;
  message: string;
  type: LogEventType;
  detail?: string;
  stack?: string;
};

export type WriteLogParam = Error | LogEvent | string;

export type LoggerConfig = {
  writeLogEvent: (logEvent: LogEvent) => any;
  logPrefix?: string;
  logPostfix?: string;
  appendStack: boolean;
  defaultLogEventType: LogEventType;
  logEventIdLength: number;
  context?: any;
};
