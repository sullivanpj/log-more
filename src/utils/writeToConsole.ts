import { LogEvent, LogWriteParams } from "../types/log";
import { nanoid } from "nanoid";
import { ConfigurationManager } from "../configuration-manager";
import { LogEventBaseTypes } from "../constants/log-event-base-types";
import { writeStringToConsole } from "./writeStringToConsole";
import { writeLogEventToConsole } from "./writeLogEventToConsole";
import { writeError } from "./writeError";

/**
 * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
 * @param params The event to write to the logs
 * @param eventType  Override the type set on the param object
 */
export const writeToConsole = (params: LogWriteParams, eventType?: string) => {
  try {
    if (typeof params === "string") {
      writeStringToConsole(params, eventType);
    } else {
      const { logEventIdLength, defaultEventType, userId } =
        ConfigurationManager.getConfig();

      let logEvent = params as LogEvent;
      if (!logEvent?.id || !logEvent?.eventType) {
        logEvent = {
          id: logEvent?.id ? logEvent.id : nanoid(logEventIdLength),
          eventType: logEvent?.eventType
            ? logEvent.eventType
            : defaultEventType,
          ...params,
          userId,
        };
      }

      writeLogEventToConsole(logEvent, eventType);
    }
  } catch (e) {
    const error = e as Error;
    if (error?.message === error?.message) {
      // Just write to console to avoid stack overflow error
      console.error(error);
    } else {
      writeError(error);
    }
  }
};
