import { DefaultEventTypes } from "./constants";

/**
 * A method to write message directly to the console
 * @param message - The message to write to the console
 * @param type - Override the event type set on the param object
 */
export const captureStringToConsole = (
  message: string,
  type?: string
): boolean => {
  try {
    if (!message) {
      return captureStringToConsole(
        "No message passed to captureStringToConsole method",
        DefaultEventTypes.WARNING
      );
    }

    switch (type) {
      case DefaultEventTypes.DEBUG:
        console.debug(message);
        break;
      case DefaultEventTypes.INFO:
        console.info(message);
        break;
      case DefaultEventTypes.WARNING:
        console.warn(message);
        break;
      case DefaultEventTypes.ERROR:
      default:
        console.error(message);
        break;
    }

    return true;
  } catch (e) {
    return false;
  }
};
