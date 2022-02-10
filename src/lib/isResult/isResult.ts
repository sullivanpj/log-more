import { Result } from "../../result";
import { ResultInstanceId } from "../../constants/result-instance-id";

/**
 * A type-check function to verify if the passed in object is a Result object
 * @param param - The object that will have it's typed verified
 * @returns A boolean indicator specifying if the passed in object's type is Result
 */
export const isResult = (param: any): param is Result => {
  try {
    const result: Result | undefined = param as Result;
    if (!!result?.instanceId && result.instanceId === ResultInstanceId) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};
