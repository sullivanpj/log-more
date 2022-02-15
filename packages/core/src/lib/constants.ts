import {
  captureToConsole,
  DefaultEventTypes,
  DefaultLogMoreConfigBase,
  SeverityTypes,
  TypedIndexable,
} from "@log-more/base";
import { format } from "./format";
import { report } from "./report";
import { LogEventConfig, LogMoreConfig } from "./types";

export const DefaultLogEventConfig: TypedIndexable<Partial<LogEventConfig>> = {
  [DefaultEventTypes.EXCEPTION]: {
    type: DefaultEventTypes.EXCEPTION,
    severity: SeverityTypes.CRITICAL,
  },
  [DefaultEventTypes.ERROR]: {
    type: DefaultEventTypes.ERROR,
    severity: SeverityTypes.TEN,
  },
  [DefaultEventTypes.WARNING]: {
    type: DefaultEventTypes.WARNING,
    severity: SeverityTypes.FIVE,
  },
  [DefaultEventTypes.INFO]: {
    type: DefaultEventTypes.INFO,
    severity: SeverityTypes.THREE,
  },
  [DefaultEventTypes.DEBUG]: {
    type: DefaultEventTypes.DEBUG,
    severity: SeverityTypes.ONE,
  },
  [DefaultEventTypes.SUCCESS]: {
    type: DefaultEventTypes.SUCCESS,
    severity: SeverityTypes.NONE,
  },
} as const;

export const DefaultLogMoreConfig: LogMoreConfig<LogEventConfig> = {
  ...DefaultLogMoreConfigBase,
  logEventRegistry: DefaultLogEventConfig as TypedIndexable<LogEventConfig>,
  format,
  capture: captureToConsole,
  report,
} as const;
