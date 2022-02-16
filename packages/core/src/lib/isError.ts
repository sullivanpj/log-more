import { DefaultEventTypes, Severity, SeverityTypes } from "@log-right/base";
import { ConfigurationManager } from "./ConfigurationManager";
import { Result } from "./Result";

/**
 * Check a `Result` object's severity to determine if it should be treated as an error
 * @param result - The `Result` object containing the severity to validate
 * @returns A boolean indicating if the `Result` will be treated as an error or not
 */
export const isError = (result: Result): boolean => {
  try {
    const config =
      ConfigurationManager.getConfigItem<Severity>("severityError");
    if (!config.validate()) {
      return false;
    }

    let severity: Severity = config.data as Severity;
    if (severity === undefined) {
      severity =
        ConfigurationManager.getLogEventConfig(DefaultEventTypes.ERROR)
          ?.severity ?? SeverityTypes.TEN;
    }

    if (severity === undefined || result.severity >= severity) {
      return true;
    }

    return false;
  } catch (e) {
    return true;
  }
};
