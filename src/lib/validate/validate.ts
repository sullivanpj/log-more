/** @format */

import { Result } from "src/result";
import { isResult } from "src/lib/isResult";
import { ConfigurationManager } from "src/configuration-manager";
import { ResultValidationTypes } from "src/constants/result-validation-types";
import { ResultValidationType } from "src/types/result";
import { write } from "src/lib/write";
import { writeError } from "src/lib/writeError";

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
            write(result);
        }

        if (
            validationType !== ResultValidationTypes.WARNING &&
            result.validationType === ResultValidationTypes.WARNING
        ) {
            return !failValidateOnWarning;
        }

        return result.validationType === validationType;
    } catch (e) {
        writeError(e as Error);
    }

    return false;
};
