import { LogConfig } from "src/types/log";
import { writeToConsole } from "src/utils/writeToConsole";
import { LogEventTypes } from "./log-event-types";

export const LogDefaultConfig: LogConfig = {
  writeLogEvent: writeToConsole,
  appendStack: true,
  logEventIdLength: 32,
  resultIdLength: 32,
  defaultLogEventType: LogEventTypes.ERROR,
  defaultEventSource: "Application",
  defaultResultName: "APPLICATION_INITIATED_EVENT",
  context: {},
} as const;
