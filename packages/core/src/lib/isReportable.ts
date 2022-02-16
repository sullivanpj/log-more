import { DefaultEventTypes, Severity, SeverityTypes } from "@log-right/base";
import { ConfigurationManager } from "./ConfigurationManager";
import { Result } from "./Result";

/**
 * Check a `Result` object's severity to determine if it should be reported
 * @param result - The `Result` object containing the severity to validate
 * @returns A boolean indicating if the `Result` will be reported or not
 */
export const isReportable = (result: Result): boolean => {
  try {
    const config =
      ConfigurationManager.getConfigItem<Severity>("severityReport");
    if (!config.validate()) {
      return false;
    }

    let severity: Severity = config.data as Severity;
    if (severity === undefined) {
      severity =
        ConfigurationManager.getLogEventConfig(DefaultEventTypes.WARNING)
          ?.severity ?? SeverityTypes.FIVE;
    }

    if (severity === undefined || result.severity >= severity) {
      return true;
    }

    return false;
  } catch (e) {
    return true;
  }
};
