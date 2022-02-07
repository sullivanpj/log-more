import { LogEventTypes } from "./constants/log-event-types";
import { LogEvent, LogEventType, LogWriteParams, LogConfig } from "./types/log";
import { nanoid } from "nanoid";
import { writeToConsole } from "./utils/writeToConsole";
import { ConfigurationManager } from "./configuration-manager";

/**
 * A static class used to process logging
 */
export class Log {
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

  /**
   * Write the passed in params to the logs
   * @param param The event/result to write to the logs
   * @param type Override the type set on the param object
   */
  public static write(param: LogWriteParams, type?: LogEventType) {
    try {
      const {
        logEventIdLength,
        defaultLogEventType,
        defaultEventSource,
        appendStack,
        logMessagePrefix,
        logMessagePostfix,
        context,
      }: LogConfig = ConfigurationManager.getConfig();

      let logEvent: LogEvent;
      if (typeof param === "string") {
        logEvent = {
          id: nanoid(logEventIdLength),
          message: param,
          type: type ?? defaultLogEventType,
        };
      } else {
        logEvent = {
          id: nanoid(logEventIdLength),
          ...param,
          type: (param as LogEvent)?.type ?? type ?? defaultLogEventType,
        };
      }

      if (!logEvent.message || !logEvent.type) {
        // Return no message to log
        return;
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
      if (!logEvent.context) {
        logEvent.context = context;
      }

      Log.writeLogEvent(logEvent);
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(e as Error);
    }
  }

  /**
   * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
   * @param logEvent The event to write to the logs
   * @param type  Override the type set on the param object
   */
  public static writeToConsole(logEvent: LogWriteParams, type?: LogEventType) {
    writeToConsole(logEvent, type);
  }

  /**
   * Private write method used internally by Log
   * @param logEvent The event to write to the logs
   */
  private static writeLogEvent(logEvent: LogEvent) {
    try {
      const { writeLogEvent }: LogConfig = ConfigurationManager.getConfig();

      if (!!writeLogEvent) {
        writeLogEvent(logEvent);
      } else {
        Log.writeToConsole(logEvent);
      }
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(e as Error);
    }
  }
}
