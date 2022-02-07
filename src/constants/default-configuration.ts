import { Configuration } from "../types/configuration";
import { writeToConsole } from "../utils/writeToConsole";
import { LogEventBaseTypes } from "./log-event-base-types";

export const DefaultConfiguration: Configuration = {
  writeLogEvent: writeToConsole,
  eventTypeRegistry: {},
  appendStack: true,
  logEventIdLength: 32,
  resultIdLength: 32,
  defaultLogEventType: LogEventBaseTypes.ERROR,
  defaultEventSource: "Application",
  defaultResultName: "APPLICATION_INITIATED_EVENT",
  defaultErrorResultMessage:
    "An error has occurred while processing the request.",
  failValidateOnWarning: false,
  failValidateOnEmpty: true,
  context: {},
} as const;
