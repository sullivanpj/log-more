import { LogWriteParams, LogEventType, LogEvent } from "../types/log";
import { LogEventTypes } from "../constants/log-event-types";

/**
 * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
 * @param logEvent The event to write to the logs
 * @param type  Override the type set on the param object
 */
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
      console.debug(message);
    } else if (eventType === LogEventTypes.INFO) {
      console.info(message);
    } else if (eventType === LogEventTypes.WARNING) {
      console.warn(message);
    } else {
      console.error(message);
    }
  } catch (e) {
    console.error(e);
  }
};
