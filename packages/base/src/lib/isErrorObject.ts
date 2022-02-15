import { Indexable } from "./types";

/**
 * A type-check function to verify if the passed in field is an Error object
 * @param param - The field to type check to verify if it is an Error
 * @returns An indicator specifying if the passed in param field is an Error
 */
export const isErrorObject = (param: unknown): param is Error => {
  try {
    return (
      typeof param === "object" &&
      param !== null &&
      "message" in param &&
      typeof (param as Indexable)["message"] === "string" &&
      "stack" in param &&
      typeof (param as Indexable)["stack"] === "string"
    );
  } catch (e) {
    return false;
  }
};
