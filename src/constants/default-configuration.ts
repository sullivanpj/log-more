import { Configuration } from "../types/configuration";
import { writeToConsole } from "../utils/writeToConsole";
import { LogEventTypes } from "./log-event-types";

export const DefaultConfiguration: Configuration = {
  writeLogEvent: writeToConsole,
  appendStack: true,
  logEventIdLength: 32,
  resultIdLength: 32,
  defaultLogEventType: LogEventTypes.ERROR,
  defaultEventSource: "Application",
  defaultResultName: "APPLICATION_INITIATED_EVENT",
  defaultErrorResultMessage:
    "An error has occurred while processing the request.",
  failValidateOnWarning: false,
  failValidateOnEmpty: true,
  context: {},
} as const;
