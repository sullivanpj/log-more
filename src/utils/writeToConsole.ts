import { LogWriteParams, LogEvent } from "../types/log";
import { LogEventBaseTypes } from "../constants/log-event-base-types";

/**
 * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
 * @param logEvent The event to write to the logs
 * @param eventType  Override the event type set on the param object
 */
export const writeToConsole = (
  logEvent: LogWriteParams,
  eventType?: string
) => {
  try {
    const message = typeof logEvent === "string" ? logEvent : logEvent.message;

    switch (
      eventType
        ? eventType
        : typeof logEvent !== "string" && (logEvent as LogEvent)?.eventType
        ? (logEvent as LogEvent).eventType
        : LogEventBaseTypes.ERROR
    ) {
      case LogEventBaseTypes.DEBUG:
        console.debug(message);
        break;
      case LogEventBaseTypes.INFO:
        console.info(message);
        break;
      case LogEventBaseTypes.WARNING:
        console.warn(message);
        break;
      case LogEventBaseTypes.ERROR:
      default:
        console.error(message);
        break;
    }
  } catch (e) {
    console.error(e);
  }
};
