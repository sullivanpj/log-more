import { nanoid } from "nanoid/non-secure";
import { DefaultEventTypes, SeverityTypes } from "./constants";
import { FormattedData, IResult, Report } from "./types";

/**
 * A helper function that will handle converting the `Result` objects returned from a failed process into a `Report`
 * @param exception - The `Result` objects returned from a failed process
 * @returns A `Result` object indicating the result of the formatting
 */
export const formatBase = <TFormatted extends FormattedData = FormattedData>(
  result: IResult
): IResult<Report<TFormatted>> => {
  const { id, severity, message, name, type, context } = result;

  return {
    id: nanoid(32),
    name: "LOG_MORE_GET_CONFIG_SUCCESS",
    message: "Success",
    type: DefaultEventTypes.SUCCESS,
    severity: SeverityTypes.NONE,
    context,
    validate: undefined,
    data: {
      id,
      type,
      severity,
      message,
      name,
      context,
    },
  };
};
