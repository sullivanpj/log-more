import { LogEventTypes } from "src/constants/log-event-types";
import {
  LogEvent,
  LogEventType,
  LogWriteParams,
  LogConfig,
} from "src/types/log";
import { nanoid } from "nanoid";
import { LogDefaultConfig } from "src/constants/log-default-config";
import { writeToConsole } from "src/utils/writeToConsole";

const instanceId = nanoid(32);

export class Log {
  public static setConfig(params?: Partial<LogConfig>) {
    try {
      let config = { ...LogDefaultConfig };
      if (params?.writeLogEvent) {
        config.writeLogEvent = params.writeLogEvent;
      }
      if (params?.logMessagePrefix !== undefined) {
        config.logMessagePrefix = params.logMessagePrefix;
      }
      if (params?.logMessagePostfix !== undefined) {
        config.logMessagePostfix = params.logMessagePostfix;
      }
      if (params?.appendStack !== undefined) {
        config.appendStack = params.appendStack;
      }
      if (params?.context !== undefined) {
        config.context = params.context;
      }

      (global as any)[instanceId] = config;
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(
        `An error occurred saving the log-more configuration: ${
          (e as Error)?.message
        }`
      );
    }
  }

  public static getConfig(): LogConfig {
    try {
      let config = (global as any)?.[instanceId];
      if (!config) {
        config = LogDefaultConfig;
      }

      return { ...config };
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(
        `An error occurred retrieving the log-more configuration: ${
          (e as Error)?.message
        }`
      );

      return LogDefaultConfig;
    }
  }

  /**
   * Log an error using the configured logging methods
   * @param error An object or string containing the error to log
   */
  public static error(error: LogWriteParams) {
    try {
      this.write(error, LogEventTypes.ERROR);
    } catch (e) {}
  }

  /**
   * Log a warning using the configured logging methods
   * @param warning  An object or string containing the warning to log
   */
  public static warn(warning: LogWriteParams) {
    try {
      this.write(warning, LogEventTypes.WARNING);
    } catch (e) {}
  }

  /**
   * Log an info message using the configured logging methods
   * @param info An object or string containing the info message to log
   */
  public static info(info: LogWriteParams) {
    try {
      this.write(info, LogEventTypes.INFO);
    } catch (e) {}
  }

  /**
   * Log an debug message using the configured logging methods
   * @param debug An object or string containing the info message to log
   */
  public static debug(debug: LogWriteParams) {
    try {
      this.write(debug, LogEventTypes.DEBUG);
    } catch (e) {}
  }

  public static write(param: LogWriteParams, type?: LogEventType) {
    try {
      const {
        logEventIdLength,
        defaultLogEventType,
        defaultEventSource,
        appendStack,
        logMessagePrefix,
        logMessagePostfix,
      }: LogConfig = Log.getConfig();

      let logEvent: LogEvent;
      if (typeof param === "string") {
        logEvent = {
          id: nanoid(logEventIdLength),
          message: param,
          type,
        };
      } else {
        logEvent = {
          id: nanoid(logEventIdLength),
          ...param,
          type,
        };
      }

      if (!logEvent.message) {
        // Return no message to log
        return;
      }

      if (!logEvent.type) {
        logEvent.type = defaultLogEventType;
      }
      if (!logEvent.source) {
        logEvent.source = defaultEventSource;
      }
      if (!appendStack) {
        delete logEvent.stack;
      }
      if (logMessagePrefix) {
        logEvent.message = logMessagePrefix + logEvent.message;
      }
      if (logMessagePostfix) {
        logEvent.message += logMessagePostfix;
      }

      Log.writeLogEvent(logEvent);
    } catch (e) {
      return e;
    }
  }

  private static writeLogEvent(logEvent: LogEvent) {
    try {
      const { writeLogEvent }: LogConfig = Log.getConfig();

      if (!!writeLogEvent) {
        writeLogEvent(logEvent);
      } else {
        Log.writeToConsole(logEvent);
      }
    } catch (e) {
      return Log.writeToConsole(e as Error);
    }
  }

  public static writeToConsole(logEvent: LogWriteParams, type?: LogEventType) {
    writeToConsole(logEvent, type);
  }
}

export default Log;
