import { Result } from "../result";
import { LogEventBaseTypes } from "../constants/log-event-base-types";
import { LogWriteParams } from "../types/log";
import { write } from "./write";

/**
 * Log an error using the configured logging methods
 * @param error An object or string containing the error to log
 * @returns A result object indicating if the process was successful or not
 */
export const writeError = (error: LogWriteParams): Result => {
  return write(error, LogEventBaseTypes.ERROR);
};
