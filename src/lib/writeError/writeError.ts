/** @format */

import { Result } from "src/result";
import { LogEventBaseTypes } from "src/constants/log-event-base-types";
import { LogWriteParams } from "src/types/log";
import { write } from "src/lib/write";

/**
 * Log an error using the configured logging methods
 * @param error An object or string containing the error to log
 * @returns A result object indicating if the process was successful or not
 */
export const writeError = (error: LogWriteParams): Result => {
    return write(error, LogEventBaseTypes.ERROR);
};
