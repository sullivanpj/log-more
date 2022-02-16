import { ResultBase } from "./ResultBase";

/**
 * A type-check function to verify if the passed in field is a Result object
 * @param param - The field to type check to verify if it is an Result
 * @returns An indicator specifying if the passed in param field is an Error
 */
export const isResultBase = (param: unknown): param is ResultBase => {
  try {
    const result: ResultBase | undefined = param as ResultBase;
    if (
      !!result?.instanceId &&
      result.instanceId === LOG_RIGHT_GLOBAL_RESULT_INSTANCE_ID
    ) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};
