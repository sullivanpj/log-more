import {
  CallbackFunction,
  CaptureFunctionBase,
  FormatFunctionBase,
  FormattedData,
  LogEventConfigBase,
  LogRightConfigBase,
  Report,
  ReportConfigBase,
  ResultConfigBase,
  UserConfig,
} from "@log-right/base";
import { Result } from "./Result";

/**
 * Result object configuration parameters to be applied to a specific event type
 */
export type ResultConfig<
  TCallback extends CallbackFunction = CallbackFunction
> = ResultConfigBase<TCallback>;

/**
 * The function definition for any implementations of `Report`. This function can be user-defined, and will be called when a specified result is called.
 */
export type ReportFunction<
  TReturned = unknown,
  TResult extends Result<TReturned> = Result<TReturned>,
  TReturnedReport = unknown,
  TResultReport extends Result<TReturnedReport> = Result<TReturnedReport>
> = (result: TResult) => TResultReport;

/**
 * The function definition for any implementations of `format`. Custom user-defined methods should be sure to align with this.
 */
export type FormatFunction<
  TReturned = unknown,
  TResult extends Result<TReturned> = Result<TReturned>,
  TFormatted extends FormattedData = FormattedData,
  TReport extends Report<TFormatted> = Report<TFormatted>,
  TResultFormat extends Result<TReport> = Result<TReport>
> = FormatFunctionBase<TReturned, TResult, TFormatted, TReport, TResultFormat>;

/**
 * The function definition for any implementations of `capture`. Custom user-defined methods should be sure to align with this.
 */
export type CaptureFunction<
  TFormatted extends FormattedData = FormattedData,
  TReport extends Report<TFormatted> = Report<TFormatted>,
  TReturnedCapture = unknown,
  TResultCapture extends Result<TReturnedCapture> = Result<TReturnedCapture>
> = CaptureFunctionBase<TFormatted, TReport, TReturnedCapture, TResultCapture>;

/**
 * `Report` configuration parameters to be applied to a specific event type
 */
export interface ReportConfig<
  TFormat extends FormatFunction = FormatFunction,
  TCapture extends CaptureFunction = CaptureFunction,
  TReport extends ReportFunction = ReportFunction
> extends ReportConfigBase<TFormat, TCapture> {
  /**
   * The default function that will be used to `Report` an event. Can be overridden by the user to apply custom logic.
   */
  report: TReport;
}

/**
 * A type to represent a full log event sequence:
 * - 1. A Result is returned from a function or process
 * - 2. The Result is used to create (or format) a Report
 * - 3. The Report is captured to help identify an issue or a more general event
 */
export type LogEventConfig<
  TResultConfig extends ResultConfig = ResultConfig,
  TReportConfig extends ReportConfig = ReportConfig
> = LogEventConfigBase<TResultConfig, TReportConfig>;

/**
 * Specifications for the base level of configuration parameters log-right accepts
 */
export type LogRightConfig<
  TLogEventConfig extends LogEventConfig = LogEventConfig,
  TUserConfig extends UserConfig = UserConfig
> = LogRightConfigBase<TLogEventConfig, TUserConfig>;
