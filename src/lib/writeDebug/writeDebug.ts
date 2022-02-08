/** @format */

import { Result } from "src/result";
import { LogEventBaseTypes } from "src/constants/log-event-base-types";
import { LogWriteParams } from "src/types/log";
import { write } from "src/lib/write";

/**
 * Log an debug message using the configured logging methods
 * @param debug An object or string containing the info message to log
 * @returns A result object indicating if the process was successful or not
 */
export const writeDebug = (debug: LogWriteParams): Result => {
    return write(debug, LogEventBaseTypes.DEBUG);
};
