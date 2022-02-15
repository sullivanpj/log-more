import { captureStringToConsole } from "./captureStringToConsole";
import { Report } from "./types";

/**
 * A method to capture `Report` events directly to the console
 * @param report - The `Report` to write to the console
 */
export const captureToConsole = (report: Report): boolean => {
  try {
    return captureStringToConsole(
      typeof report?.data === "string" ? report.data : report?.message,
      report?.type
    );
  } catch (e) {
    return false;
  }
};
