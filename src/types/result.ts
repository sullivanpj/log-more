import { ResultTypes } from "src/constants/result-types";

export type ResultType =
  | ResultTypes.SUCCESS
  | ResultTypes.WARNING
  | ResultTypes.ERROR;

export type ResultParams = {
  id?: string;
  name?: string;
  message: string;
  type?: ResultType;
  details?: string;
  stack?: string;
};
