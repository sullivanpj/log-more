import { FormattedData, Report } from "@log-more/base";
import { ConfigurationManager } from "./ConfigurationManager";
import { isReportable } from "./isReportable";
import { isResult } from "./isResult";
import { Result } from "./Result";
import { LogEventConfig } from "./types";

/**
 * Handle the reporting of a `Result` object
 * @param result - The `Result` object containing the data added during the previous function / process
 * @returns A second `Result` object specifying if the report call was successful or not
 */
export const report = (result: Result): Result => {
  try {
    if (!isReportable(result)) {
      return Result.success();
    }

    const config: LogEventConfig = ConfigurationManager.getLogEventConfig(
      result.type
    );
    if (!config) {
      return Result.error("An error occurred trying to report a result. ");
    }
    const { format, capture } = config;

    if (!!format && !!capture) {
      let formatted = format(result);
      if (isResult(formatted)) {
        if (!formatted.validate()) {
          return formatted;
        }

        formatted = formatted.data as Report<FormattedData>;
      }

      const captured = capture(formatted as Report);
      if (isResult(captured) && !captured.validate()) {
        return captured;
      }
    }

    return Result.success();
  } catch (e) {
    return Result.error(e);
  }
};
