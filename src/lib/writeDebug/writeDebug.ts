import { Result } from "../../result";
import { LogEventBaseTypes } from "../../constants/log-event-base-types";
import { LogWriteParams } from "../../types/log";
import { write } from "../write";

/**
 * Log an debug message using the configured logging methods
 * @param debug - An object or string containing the info message to log
 * @returns A result object indicating if the process was successful or not
 */
export const writeDebug = (debug: LogWriteParams): Result => {
  return write(debug, LogEventBaseTypes.DEBUG);
};
