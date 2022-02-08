import { CustomEventTypeDetails } from "../types/configuration";
import { LogEventBaseTypes } from "./log-event-base-types";
import { ResultValidationTypes } from "./result-validation-types";

export const DefaultEventTypeRegistry: Record<
  string,
  Partial<CustomEventTypeDetails>
> = {
  [LogEventBaseTypes.DEBUG]: {
    validationType: ResultValidationTypes.SUCCESS,
  },
  [LogEventBaseTypes.INFO]: {
    validationType: ResultValidationTypes.SUCCESS,
  },
  [LogEventBaseTypes.WARNING]: {
    validationType: ResultValidationTypes.WARNING,
  },
  [LogEventBaseTypes.ERROR]: {
    validationType: ResultValidationTypes.ERROR,
  },
} as const;
