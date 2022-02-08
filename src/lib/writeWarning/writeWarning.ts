/** @format */

import { Result } from "src/result";
import { LogEventBaseTypes } from "src/constants/log-event-base-types";
import { LogWriteParams } from "src/types/log";
import { write } from "src/lib/write";

/**
 * Log a warning using the configured logging methods
 * @param warning  An object or string containing the warning to log
 * @returns A result object indicating if the process was successful or not
 */
export const writeWarning = (warning: LogWriteParams): Result => {
    return write(warning, LogEventBaseTypes.WARNING);
};
