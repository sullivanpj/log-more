import { FormattedData, Report } from "@log-right/base";
import { Result } from "./Result";

/**
 * A helper function that will handle converting the `Result` objects returned from a failed process into a `Report`
 * @param exception - The `Result` objects returned from a failed process
 * @returns A `Result` object indicating the result of the formatting
 */
export const format = <TFormatted extends FormattedData = FormattedData>(
  result: Result
): Result<Report<TFormatted>> => {
  try {
    const {
      id,
      severity,
      message,
      details,
      name,
      type,
      context,
      source,
      userId,
      stack,
    } = result;

    return Result.success<Report<TFormatted>>({
      id,
      type,
      source,
      severity,
      message,
      name,
      context,
      details,
      userId,
      stack,
    });
  } catch (e) {
    return Result.error(e);
  }
};
