import { ConfigurationManager } from "./ConfigurationManager";
import { isError } from "./isError";
import { isReportable } from "./isReportable";
import { Result } from "./Result";

/**
 * A function called after a function/process is executed to determine if it was successful or not and report information using the user's previously defined configuration.
 * @param result - The `Result` data returned from a function or process
 * @returns A boolean indicator indicating if the passed in `Result` object was a success or failure
 */
export const validate = (result: Result): boolean => {
  try {
    const config = ConfigurationManager.getLogEventConfig(result.type);

    if (isReportable(result)) {
      if (!config.report(result).validate()) {
        return false;
      }
    }

    if (isError(result)) {
      // Call the validate function so that it is logged if validate fails
      config.callback?.(result)?.validate();

      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};
