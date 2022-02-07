import { Configuration } from "./types/configuration";
import { nanoid } from "nanoid";
import { DefaultConfiguration } from "./constants/default-configuration";
import { writeToConsole } from "./utils/writeToConsole";

const instanceId = nanoid(32);

/**
 * A static class used to manage the log-more configuration data
 */
export class ConfigurationManager {
  /**
   * Set the configuration for how logging should be handled
   * @param params The configuration to use for logging going forward
   */
  public static setConfig(params?: Partial<Configuration>) {
    try {
      let config = { ...DefaultConfiguration, ...params };
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

      if (!config.writeLogEvent) {
        config.writeLogEvent = writeToConsole;
      }

      (global as any)[instanceId] = config;
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      writeToConsole(
        `An error occurred saving the log-more configuration: ${
          (e as Error)?.message
        }`
      );
    }
  }

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getConfig(): Configuration {
    try {
      let config = (global as any)?.[instanceId];
      if (!config) {
        config = DefaultConfiguration;
      }

      return { ...config };
    } catch (e) {
      // Use console here to prevent infinite recursion loop
      writeToConsole(
        `An error occurred retrieving the log-more configuration: ${
          (e as Error)?.message
        }`
      );

      return DefaultConfiguration;
    }
  }
}
