import { Result } from "../result";
import { Log } from "../log";
import { isResult } from "./isResult";
import { ConfigurationManager } from "../configuration-manager";
import { ResultValidationTypes } from "../constants/result-validation-types";
import { ResultValidationType } from "src/types/result";

/**
 * Validate the result object to determine if the previously called process was successful
 * @param result The result object to validate
 * @param type The type of result we are validating the result parameter's type value is set to (defaults to "SUCCESS")
 * @param isLogging Should a log be written (if message is provided)
 * @returns An indicator specifying if the result was successful or not
 */
export const validate = (
  result: Result,
  validationType: ResultValidationType = ResultValidationTypes.SUCCESS,
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

    if (
      validationType !== ResultValidationTypes.WARNING &&
      result.validationType === ResultValidationTypes.WARNING
    ) {
      return !failValidateOnWarning;
    }

    return result.validationType === validationType;
  } catch (e) {
    Log.error(e as Error);
  }

  return false;
};
