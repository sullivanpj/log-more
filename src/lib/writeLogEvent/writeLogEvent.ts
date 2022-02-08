/** @format */

import { LogEvent } from "src/types/log";
import { ConfigurationManager } from "src/configuration-manager";
import { Result } from "src/result";
import { formatLogMessage } from "src/lib/formatLogMessage";
import { isResult } from "src/lib/isResult";

/**
 * Private write method used internally by Log
 * @param logEvent The event to write to the logs
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
