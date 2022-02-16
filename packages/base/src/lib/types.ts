/* eslint-disable @typescript-eslint/no-explicit-any */
import { Locale } from "date-fns";

/**
 * The potential values of the `severity` field. Higher values indicate a more damaging event. If the severity is `NONE` (or 0), the condition will never be be met. If the severity is `CRITICAL` (or 99), the condition will always be be met.
 */
export type Severity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 99;

/**
 * The event types provided by default by `log-right`
 */
export type DefaultEventType =
  | "SUCCESS"
  | "DEBUG"
  | "INFO"
  | "WARNING"
  | "ERROR"
  | "EXCEPTION";

export type EventType = DefaultEventType & string;

/**
 * A default dictionary type that can be indexed via a string
 */
export interface Indexable {
  [index: string]: unknown;
}

/**
 * A default dictionary type that can be indexed via a string and containing specific values
 */
export interface TypedIndexable<T> {
  [index: string]: T;
}

/**
 * Data used to identify a specific system event
 */
export interface Event extends Error {
  /**
   * A unique string that can be used to identify the event
   */
  id: string;

  /**
   * The type of the event (values can be defined by the user)
   */
  type: EventType;

  /**
   * A string representing the source that initiated the event
   */
  source?: string | null;

  /**
   * Determines the severity level of the event (a number 0 through 10). This field is used to determine how the system should respond to an event
   */
  severity: Severity;

  /**
   * A message string to be used in logging and display components associated the event
   */
  message: string;

  /**
   * A string that includes additional information about the event
   */
  details?: string | null;

  /**
   * A free-format field that will be added to all IEvent objects (to be used in custom logic added by the user).
   */
  context?: unknown;

  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  userId?: string;
}

/**
 * The base interface definition for `FormattedData`, the data generated on the `Report` instance when the `format` method is ran
 */
export interface FormattedData {
  /**
   * The string message formatted in the `FormatFunction` function
   */
  formattedMessage: string;
}

/**
 * The base interface definition for `Report`
 */
export interface Report<TFormatted extends FormattedData = FormattedData>
  extends Event {
  /**
   * A field containing any report specific values added during formatting that should be sent with the report
   */
  data?: TFormatted;
}

/**
 * The base interface definition for the `Result` class
 */
export interface IResult<
  TReturned = any,
  TResultCallback = any,
  TValidate = any
> extends Event {
  /**
   * A field containing any values returned from the function call
   */
  data?: TReturned;

  /**
   * A string ID used in identifying if the object is a result
   */
  instanceId?: string;

  /**
   * This function is user-defined, and will be called when a specified result is called
   */
  callback?: CallbackFunction<
    TReturned,
    IResult<TReturned>,
    TResultCallback,
    IResult<TResultCallback>
  >;

  /**
   * A function call to validate if the result is a success or failure
   */
  validate: TValidate;

  /**
   * An indicator specifying the last results of isValidated. If it has not been validated yet, return null
   */
  isValidated?: boolean | null;
}

/**
 * Configuration parameters to be applied to a specific event type
 */
export interface EventConfig {
  /**
   * The type of the `IEvent` (values can be defined by the user)
   */
  type: EventType;

  /**
   * The severity of the `IEvent` - this value will be used to determine if we should considered the event occurrence a:
   * - Success (event will be considered valid, no error handler action should be taken, and DO NOT report event)
   * - Alert (event will be considered valid, and no error handler action should be taken, but report event)
   * - Error (event will be considered invalid, error handler action will be taken, and report event)
   */
  severity: Severity;

  /**
   * The `IEvent` source string to be used when none is provided
   */
  source: string;

  /**
   * The default `IEvent` name to be used when none is provided
   */
  name: string;

  /**
   * The default `IEvent` message to use fo when none is provided
   */
  message: string;

  /**
   * A free-format field that will be added to all IEvent objects (to be used in custom logic added by the user).
   */
  context: unknown;
}

/**
 * The function definition for any implementations of `callback`. This function is user-defined, and will be called when a specified result is called.
 */
export type CallbackFunction<
  TReturned = unknown,
  TResult extends IResult<TReturned> = IResult<TReturned>,
  TReturnedCallback = unknown,
  TResultCallback extends IResult<TReturnedCallback> = IResult<TReturnedCallback>
> = (result: TResult) => TResultCallback;

/**
 * Result object configuration parameters to be applied to a specific event type
 */
export interface ResultConfigBase<
  TCallback extends CallbackFunction = CallbackFunction
> extends EventConfig {
  /**
   * An object that is thrown if the `Result` occurs. If nothing is provided, nothing will be thrown.
   */
  throwOnEvent?: unknown | null;

  /**
   * This function is user-defined, and will be called when a specified result is called
   */
  callback?: TCallback;
}

/**
 * The function definition for any implementations of `format`. Custom user-defined methods should be sure to align with this.
 */
export type FormatFunctionBase<
  TReturned = unknown,
  TResult extends IResult<TReturned> = IResult<TReturned>,
  TFormatted extends FormattedData = FormattedData,
  TReport extends Report<TFormatted> = Report<TFormatted>,
  TResultFormat extends IResult<TReport> = IResult<TReport>
> = (result: TResult) => TResultFormat | TReport;

/**
 * The function definition for any implementations of `capture`. Custom user-defined methods should be sure to align with this.
 */
export type CaptureFunctionBase<
  TFormatted extends FormattedData = FormattedData,
  TReport extends Report<TFormatted> = Report<TFormatted>,
  TReturnedCapture = unknown,
  TResultCapture extends IResult<TReturnedCapture> = IResult<TReturnedCapture>
> = (report: TReport) => TResultCapture | unknown;

/**
 * `Report` configuration parameters to be applied to a specific event type
 */
export interface ReportConfigBase<
  TFormat extends FormatFunctionBase = FormatFunctionBase,
  TCapture extends CaptureFunctionBase = CaptureFunctionBase
> extends EventConfig {
  /**
   * The default function that will be used to format the `Report`. Can be overridden by the user to apply custom formatting. The default functionality will try to use the template and Result object and  into a Report string.
   */
  format: TFormat;

  /**
   * The default function that will be used to capture the `Report`. Can be overridden by the user to apply custom logging. The default functionality will try to write the `Report` to the console.
   */
  capture: TCapture;

  /**
   * A string specifying the report template to use when formatting the `Report` for this event type
   */
  template?: string;

  /**
   * An indicator specifying if a stack trace should be included in the `Report`
   */
  isIncludingStack: boolean;

  /**
   * A prefix string to prepend to the start of all `Report` messages
   */
  messagePrefix?: string | null;

  /**
   * A postfix string to append to the end of all `Report` messages
   */
  messagePostfix?: string | null;

  /**
   * The string used to mark the beginning of a field token in a `Report` template string
   */
  templateFieldStart: string;

  /**
   * The string used to mark the end of a field token in a `Report` template string
   */
  templateFieldStop: string;

  /**
   * A string used to format the timestamp value appended to the `Report` event
   */
  timestampFormat: string;

  /**
   * The locale object to use when formatting the timestamp
   */
  locale?: Locale | null;
}

/**
 * A type to represent a full log event sequence:
 * - 1. A Result is returned from a function or process
 * - 2. The Result is used to create (or format) a Report
 * - 3. The Report is captured to help identify an issue or a more general event
 */
export type LogEventConfigBase<
  TResultConfig extends ResultConfigBase = ResultConfigBase,
  TReportConfig extends ReportConfigBase = ReportConfigBase
> = TResultConfig & TReportConfig;

/**
 * Configuration data that is specific to the current, active user
 */
export interface UserConfig {
  /**
   * A string that can be used to represent the current user performing actions in the application/triggering processes
   */
  userId: string;

  /**
   * The user's first name
   */
  firstName?: string | null;

  /**
   * The user's last name
   */
  lastName?: string | null;

  /**
   * The severity level considered to be an report-able event. NOTE: This will also include all severity levels above the selected number as well (event is a report-able when severityAlert <= event.severity).
   */
  severityReport: Severity;

  /**
   * The severity level considered to be an error. NOTE: This will also include all severity levels above the selected number as well (event is an error when severityError <= event.severity).
   */
  severityError: Severity;

  /**
   * Should the validate function consider null, undefined, or non-Result type objects a failure
   */
  failValidateOnEmpty: boolean;
}

/**
 * Specifications for the base level of configuration parameters log-right accepts
 */
export type LogRightConfigBase<
  TLogEventConfig extends LogEventConfigBase = LogEventConfigBase,
  TUserConfig extends UserConfig = UserConfig
> = TLogEventConfig &
  TUserConfig & {
    /**
     * A look-up dictionary that uses Custom user defined `IEvent` type strings as keys and an object with details about that event as the value
     */
    logEventRegistry: TypedIndexable<TLogEventConfig>;

    /**
     * The length of the `IEvent`'s id field
     */
    eventIdLength: number;

    /**
     * The string used to mark the beginning of a field token in a format template string
     */
    templateFieldStart: string;

    /**
     * The string used to mark the end of a field token in a format template string
     */
    templateFieldStop: string;

    /**
     * A string used to format the timestamp value appended to the `Report` event
     */
    timestampFormat: string;

    /**
     * The locale object to use when formatting the timestamp
     */
    locale?: Locale;
  };

/**
 * Parameters that can be passed into the `ResultBase` class's constructor to initialize an object
 */
export type ResultBaseParams<TReturned = any> = (
  | Event
  | { message: string; type: string }
  | { message?: string; type: "SUCCESS" }
  | { message: string; severity: string }
  | { message?: string; severity: 0 }
) & {
  data?: TReturned;
};
