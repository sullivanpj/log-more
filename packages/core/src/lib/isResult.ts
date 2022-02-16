import { isResultBase } from "@log-right/base";
import { Result } from "./Result";

/**
 * A type-check function to verify if the passed in field is a `Result` object
 * @param param - The field to type check to verify if it is an `Result`
 * @returns An indicator specifying if the passed in param field is an `Result`
 */
export const isResult = (param: unknown): param is Result => {
  try {
    const result: Result | undefined = param as Result;
    if (isResultBase(result)) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};
