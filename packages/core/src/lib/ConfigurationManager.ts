import {
  ConfigurationManagerBase,
  Indexable,
  TypedIndexable,
} from "@log-more/base";
import { DefaultLogMoreConfig } from "./constants";
import { Result } from "./Result";
import { LogEventConfig, LogMoreConfig } from "./types";

/**
 * A static class used to manage the log-more configuration data
 */
export class ConfigurationManager {
  /**
   * A function used to initialize the configuration in memory
   * @param defaultConfig - The default configuration to apply
   * @returns A boolean indicating if the result of the function was successful or not
   */
  public static init(
    defaultConfig: LogMoreConfig = DefaultLogMoreConfig
  ): Result {
    try {
      if (!ConfigurationManagerBase.init<LogMoreConfig>(defaultConfig)) {
        return Result.error(
          "An error occurred initializing Log-More configuration data."
        );
      }

      return Result.success();
    } catch (e) {
      return Result.error(e);
    }
  }

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getConfig = (): Result<LogMoreConfig> => {
    try {
      let config: LogMoreConfig | undefined =
        ConfigurationManagerBase.getConfig() as LogMoreConfig;
      if (!config) {
        const result = ConfigurationManager.init();
        if (!result.validate()) {
          return result;
        }

        config = ConfigurationManagerBase.getConfig() as LogMoreConfig;
      }

      if (!config) {
        return Result.error(
          "Log-More could not retrieve configuration from memory."
        );
      }

      return Result.success(config);
    } catch (e) {
      return Result.error(e);
    }
  };

  /**
   * Get an item from the current log configuration object
   * @param name - The name of the current configuration object to get
   * @returns The configuration item value
   */
  public static getConfigItem = <T>(name: string): Result<T> => {
    try {
      const result = ConfigurationManager.getConfigItem<T>(name);
      if (!result.validate()) {
        return result;
      }

      const data = (result.data as unknown as Indexable)?.[name];
      if (!data) {
        return Result.error(
          "Log-More could not retrieve configuration from memory."
        );
      }

      return Result.success(data as T);
    } catch (e) {
      return Result.error(e);
    }
  };

  /**
   * Get all of the current configurations for the defined for log event types
   * @returns The log event configuration
   */
  public static getLogEventRegistry = (): Result<
    TypedIndexable<LogEventConfig>
  > => {
    try {
      const result =
        ConfigurationManager.getConfigItem<TypedIndexable<LogEventConfig>>(
          "logEventRegistry"
        );
      if (!result.validate()) {
        return result;
      }

      return result;
    } catch (e) {
      return Result.error(e);
    }
  };

  /**
   * Get the current configuration for a specified log event type
   * @param type - The type of the log event to return configuration for
   * @returns The log event configuration
   */
  public static tryGetLogEventConfig = (
    type: string
  ): Result<LogEventConfig> => {
    try {
      const result = ConfigurationManager.getLogEventRegistry();
      if (!result.validate()) {
        return Result.error(result);
      }

      return Result.success(result.data?.[type]);
    } catch (e) {
      return Result.error(e);
    }
  };

  /**
   * Get the current configuration for a specified log event type
   * @param type - The type of the log event to return configuration for
   * @returns The log event configuration
   */
  public static getLogEventConfig = (type: string): LogEventConfig => {
    try {
      const result = ConfigurationManager.tryGetLogEventConfig(type);
      if (result.validate()) {
        return result.data as LogEventConfig;
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}

    return ConfigurationManager.getConfig().data as LogEventConfig;
  };

  /**
   * Set the configuration for how logging should be handled
   * @param params - The configuration to use for logging going forward
   */
  public static setConfig = (params?: Partial<LogMoreConfig>): Result => {
    try {
      if (!ConfigurationManagerBase.setConfig(params)) {
        return Result.error(
          "Log-More was unable to update configuration object. "
        );
      }

      return Result.success();
    } catch (e) {
      return Result.error(e);
    }
  };

  /**
   * Set a specific item value on the configuration object
   * @param name - The name of the configuration object item to set
   * @param value - The value to set on the configuration object
   * @returns
   */
  public static setConfigItem = <T = unknown>(
    name: string,
    value: T
  ): Result => {
    try {
      if (!ConfigurationManagerBase.setConfigItem(name, value)) {
        return Result.error({
          message: "Log-More was unable to update configuration object. ",
          details: `Item Name: "${name}" / Item Value: "${value}"`,
        });
      }

      return Result.success();
    } catch (e) {
      return Result.error(e);
    }
  };
}
