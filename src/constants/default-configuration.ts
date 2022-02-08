import { writeLogEventToConsole } from "src/utils/writeLogEventToConsole";
import { Configuration } from "../types/configuration";
import { LogEventBaseTypes } from "./log-event-base-types";
import { ResultValidationTypes } from "./result-validation-types";

export const DefaultConfiguration: Configuration = {
  writeLogEvent: writeLogEventToConsole,
  eventTypeRegistry: {},
  appendStack: true,
  logEventIdLength: 32,
  resultIdLength: 32,
  defaultEventType: LogEventBaseTypes.ERROR,
  defaultValidationType: ResultValidationTypes.ERROR,
  defaultEventSource: "Application",
  defaultResultName: "APPLICATION_INITIATED_EVENT",
  defaultErrorResultMessage:
    "A system generated error has occurred while processing the request.",
  failValidateOnWarning: false,
  failValidateOnEmpty: true,
  context: {},
  templateTokenStart: "<!--",
  templateTokenStop: "--!>",
  timestampFormat: "MM/dd/YYYY hh:ss:mm A",
  userId: "Application User",
} as const;
