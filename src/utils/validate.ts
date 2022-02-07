import { Result } from "../result";
import { Log } from "../log";
import { isResult } from "./isResult";
import { ConfigurationManager } from "../configuration-manager";
import { ResultTypes } from "../constants/result-types";

/**
 * Validate the result object to determine if the previously called process was successful
 * @param result The result object to validate
 * @param isLogging Should a log be written (if message is provided)
 * @returns An indicator specifying if the result was successful or not
 */
export const validate = (
  result: Result,
  isLogging: boolean = true
): boolean => {
  try {
    const { failValidateOnEmpty, failValidateOnWarning } =
      ConfigurationManager.getConfig();

    if (!result || !isResult(result)) {
      return !failValidateOnEmpty;
    }

    // Write result message to logs
    if (isLogging) {
      Log.write(result);
    }

    if (result.type === ResultTypes.WARNING) {
      return !failValidateOnWarning;
    }

    return result.type === ResultTypes.SUCCESS;
  } catch (e) {
    Log.error(e as Error);
  }

  return false;
};
