import {LogEventTypes} from "src/constants/log-event-types";
import {LogEvent, LogEventType, WriteLogParam, LoggerConfig} from "src/types/logger";
import { nanoid } from 'nanoid';
import { LoggerDefaultConfig } from "src/constants/logger-default-config";

const instanceId = nanoid(32);

export class Logger {
  public static setConfig(params?: Partial<LoggerConfig>) {
    try {
    let config = { ...LoggerDefaultConfig };
    if (params?.writeLogEvent) {
      config.writeLogEvent = params.writeLogEvent;
    }
    if (params?.logPrefix !== undefined) {
      config.logPrefix = params.logPrefix;
    }
    if (params?.logPostfix !== undefined) {
      config.logPostfix = params.logPostfix;
    }
    if (params?.appendStack !== undefined) {
      config.appendStack = params.appendStack;
    }
    if (params?.context !== undefined) {
      config.context = params.context;
    }

    global[instanceId] = config;
    } catch (e) {
      console.error(`An error occurred saving the log-more configuration: ${e}`);
    }
  }

  public static getConfig(): LoggerConfig {
    try {
    let config = global[instanceId];
    if (!config) {
      config = LoggerDefaultConfig;
    }
    
    return {...config};
    } catch (e) {
      console.error(`An error occurred retrieving the log-more configuration: ${e}`);

      return LoggerDefaultConfig;
    }
  }

  /**
   * Log an error using the configured logging methods
   * @param error An object or string containing the error to log
   */
  public static error(error: WriteLogParam) {
    try {
        this.write(error, LogEventTypes.ERROR);
    } catch (e) {}
  }

  /**
   * Log a warning using the configured logging methods
   * @param warning  An object or string containing the warning to log
   */
  public static warn(warning: WriteLogParam) {
    try {
      this.write(warning, LogEventTypes.WARNING);
    } catch (e) {}
  }

  /**
   * Log an info message using the configured logging methods
   * @param info An object or string containing the info message to log
   */
  public static info(info: WriteLogParam) {
    try {
      this.write(info, LogEventTypes.INFO);
    } catch (e) {}
  }

  /**
   * Log an debug message using the configured logging methods
   * @param debug An object or string containing the info message to log
   */
  public static debug(debug: WriteLogParam) {
    try {
      this.write(debug, LogEventTypes.DEBUG);
    } catch (e) {}
  }

  public static write(
    param: WriteLogParam,
    type?: LogEventType
  ) {
    try {
      const config: LoggerConfig = Logger.getConfig();

      let logEvent: LogEvent; 
      if (typeof param === "string") {
        logEvent = {
          id: nanoid(config.logEventIdLength),
          message: param,
          type: type ? type : config.defaultLogEventType,
        }
      } else if (!param?.) {
        
      }

      if (!logEvent.type) {

      }



      if (ErrorResult.checkForFailure(message)) {
        this.writeToConsole(message.toString(), type);
      } else if ((message as Error)?.message) {
        let error = `FXL Error: ${(message as Error)?.message}`;
        if ((message as Error)?.stack) {
          error += `\r\nStack Trace: ${(message as Error)?.stack}`;
        }

        Log.writeToConsole(error, type);
      } else {
        this.writeToConsole(message, type);
      }
    } catch (e) {
      return e;
    }
  }

  public static writeToConsole(logEvent: LogEvent) {
    try {
      if (type === messageTypes.error) {
        return console.error(message);
      } else if (type === messageTypes.warning) {
        return console.warn(message);
      } else if (type === messageTypes.info) {
        return console.info(message);
      }
    } catch (e) {
      return e;
    }
  }
}

export default Log;
