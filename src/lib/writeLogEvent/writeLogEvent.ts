import { LogEvent } from "../../types/log";
import { ConfigurationManager } from "../../configuration-manager";
import { Result } from "../../result";
import { formatLogMessage } from "../formatLogMessage";
import { isResult } from "../isResult";

/**
 * Private write method used internally by Log
 * @param logEvent - The event to write to the logs
 * @returns A result object indicating if the process was successful or not
 */
export const writeLogEvent = (logEvent: LogEvent): Result => {
  try {
    let result: Result<string> = formatLogMessage(logEvent);
    if (result.isFailure) {
      return result;
    }
    logEvent.formatted = result.values;

    result = ConfigurationManager.getEventTypeRegistry(
      logEvent.eventType
    ).writeLogEvent(logEvent);
    if (isResult(result) && result.isFailure) {
      return result;
    }

    return Result.success();
  } catch (e) {
    return Result.error(e as Error);
  }
};
