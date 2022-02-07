import { LogEventBaseTypes } from "./constants/log-event-base-types";
import { LogEvent, LogWriteParams } from "./types/log";
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
    this.write(error, LogEventBaseTypes.ERROR);
  }

  /**
   * Log a warning using the configured logging methods
   * @param warning  An object or string containing the warning to log
   */
  public static warn(warning: LogWriteParams) {
    this.write(warning, LogEventBaseTypes.WARNING);
  }

  /**
   * Log an info message using the configured logging methods
   * @param info An object or string containing the info message to log
   */
  public static info(info: LogWriteParams) {
    this.write(info, LogEventBaseTypes.INFO);
  }

  /**
   * Log an debug message using the configured logging methods
   * @param debug An object or string containing the info message to log
   */
  public static debug(debug: LogWriteParams) {
    this.write(debug, LogEventBaseTypes.DEBUG);
  }

  /**
   * Write the passed in params to the logs
   * @param param The event/result to write to the logs
   * @param eventType Override the event type set on the param object
   */
  public static write(param: LogWriteParams, eventType?: string) {
    let exception = undefined;

    try {
      const {
        logEventIdLength,
        defaultLogEventType,
        defaultEventSource,
        appendStack,
        logMessagePrefix,
        logMessagePostfix,
        context,
        eventTypeRegistry,
      } = ConfigurationManager.getConfig();

      let logEvent: LogEvent;
      if (typeof param === "string") {
        logEvent = {
          id: nanoid(logEventIdLength),
          message: param,
          eventType: eventType ?? defaultLogEventType,
        };
      } else {
        logEvent = {
          id: nanoid(logEventIdLength),
          ...param,
          eventType:
            eventType ?? (param as LogEvent)?.eventType ?? defaultLogEventType,
        };
      }

      if (!logEvent.message || !logEvent.eventType) {
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

      if (!!eventTypeRegistry?.[logEvent.eventType]?.throwOnEvent) {
        exception = eventTypeRegistry[logEvent.eventType].throwOnEvent;
      }

      Log.writeLogEvent(logEvent);
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(e as Error);
    }

    if (exception) {
      throw exception;
    }
  }

  /**
   * A method to write events directly to the console (ignoring the writeLogEvent method specified in the configuration)
   * @param logEvent The event to write to the logs
   * @param eventType  Override the type set on the param object
   */
  public static writeToConsole(logEvent: LogWriteParams, eventType?: string) {
    writeToConsole(logEvent, eventType);
  }

  /**
   * Private write method used internally by Log
   * @param logEvent The event to write to the logs
   */
  private static writeLogEvent(logEvent: LogEvent) {
    try {
      const { writeLogEvent, eventTypeRegistry } =
        ConfigurationManager.getConfig();

      if (!!eventTypeRegistry?.[logEvent.eventType]?.writeLogEventFunction) {
        eventTypeRegistry[logEvent.eventType].writeLogEventFunction(logEvent);
      } else {
        if (!!writeLogEvent) {
          writeLogEvent(logEvent);
        } else {
          Log.writeToConsole(logEvent);
        }
      }
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      Log.writeToConsole(e as Error);
    }
  }
}
