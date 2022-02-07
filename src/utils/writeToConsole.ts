import { LogWriteParams, LogEventType, LogEvent } from "src/types/log";
import { LogEventTypes } from "src/constants/log-event-types";

export const writeToConsole = (
  logEvent: LogWriteParams,
  type?: LogEventType
) => {
  try {
    const eventType = type
      ? type
      : typeof logEvent !== "string" && (logEvent as LogEvent)?.type
      ? (logEvent as LogEvent).type
      : LogEventTypes.ERROR;
    const message = typeof logEvent === "string" ? logEvent : logEvent.message;

    if (eventType === LogEventTypes.DEBUG) {
      return console.debug(message);
    } else if (eventType === LogEventTypes.INFO) {
      return console.info(message);
    } else if (eventType === LogEventTypes.WARNING) {
      return console.warn(message);
    } else {
      return console.error(message);
    }
  } catch (e) {
    return console.error(e);
  }
};
