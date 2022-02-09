/** @format */

import { LogEvent } from "src/types/log";
import { writeStringToConsole } from "src/utils/writeStringToConsole";

/**
 * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
 * @param logEvent The event to write to the logs
 * @param eventType  Override the event type set on the param object
 */
export const writeLogEventToConsole = (
  logEvent: LogEvent,
  eventType?: string
) => {
  try {
    writeStringToConsole(
      logEvent.formatted ? logEvent.formatted : logEvent.message,
      eventType ? eventType : (logEvent as LogEvent)?.eventType
    );
  } catch (e) {
    console.error(e as Error);
  }
};
