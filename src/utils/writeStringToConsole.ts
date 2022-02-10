import { LogEventBaseTypes } from "../constants/log-event-base-types";

/**
 * A method to write a string directly to the console (ignoring the writeLogEvent method specified in the configuration)
 * @param message - The string to write to the logs
 * @param eventType - Override the event type set on the param object
 */
export const writeStringToConsole = (
  message?: string,
  eventType: string = LogEventBaseTypes.ERROR
) => {
  try {
    if (!message) {
      console.warn("No message passed to writeStringToConsole method");
      return;
    }

    switch (eventType) {
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
    console.error(e as Error);
  }
};
