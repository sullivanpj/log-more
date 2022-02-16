import { captureToConsole } from "./captureToConsole";
import { formatBase } from "./formatBase";
import {
  LogEventConfigBase,
  LogRightConfigBase,
  TypedIndexable,
  UserConfig,
} from "./types";

/**
 * The potential values of the severity field. Higher values indicate a more damaging event. If the severity is NONE (or 0), the condition will never be be met. If the severity is CRITICAL (or 99), the condition will always be be met.
 */
export const SeverityTypes = {
  NONE: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  CRITICAL: 99,
} as const;

/**
 * Configuration data that is specific to the current, active user
 */
export const DefaultUserConfigBase: UserConfig = {
  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  userId: "Log.Right",

  /**
   * The user's first name
   */
  firstName: "Log-Right",

  /**
   * The user's last name
   */
  lastName: "User",

  /**
   * The severity level considered to be an error. NOTE: This will also include all severity levels above the selected number as well (event is an error when severityError <= event.severity).
   */
  severityError: SeverityTypes.TEN,

  /**
   * The severity level considered to be an report-able event. NOTE: This will also include all severity levels above the selected number as well (event is a report-able when severityAlert <= event.severity).
   */
  severityReport: SeverityTypes.FIVE,

  /**
   * Should the validate function consider null, undefined, or non-Result type objects a failure
   */
  failValidateOnEmpty: true,
} as const;

export const DefaultEventTypes = {
  EXCEPTION: "EXCEPTION",
  ERROR: "ERROR",
  WARNING: "WARNING",
  INFO: "INFO",
  DEBUG: "DEBUG",
  SUCCESS: "SUCCESS",
} as const;

export const DefaultLogEventConfigBase: TypedIndexable<
  Partial<LogEventConfigBase>
> = {
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

export const DefaultLogRightConfigBase: LogRightConfigBase = {
  format: formatBase,
  capture: captureToConsole,
  logEventRegistry: {
    ...DefaultLogEventConfigBase,
  } as TypedIndexable<LogEventConfigBase>,
  isIncludingStack: true,
  eventIdLength: 32,
  type: DefaultEventTypes.DEBUG,
  severity: SeverityTypes.FIVE,
  source: "Application",
  name: "APPLICATION_INITIATED_EVENT",
  message:
    "A system generated error has occurred while processing the request.",
  context: {},
  templateFieldStart: "<!--",
  templateFieldStop: "--!>",
  timestampFormat: "MM/dd/YYYY hh:ss:mm A",
  ...DefaultUserConfigBase,
} as const;
