import { captureStringToConsole } from "./captureStringToConsole";
import { DefaultLogMoreConfigBase, DefaultEventTypes } from "./constants";
import { getConfig } from "./getConfig";
import { setConfig } from "./setConfig";
import {
  LogMoreConfigBase,
  Indexable,
  TypedIndexable,
  LogEventConfigBase,
} from "./types";

/**
 * A static class used to manage the log-more configuration data
 */
export class ConfigurationManagerBase {
  /**
   * A function used to initialize the configuration in memory
   * @param defaultConfig - The default configuration to apply
   * @returns A boolean indicating if the result of the function was successful or not
   */
  public static init = <
    TLogMoreConfig extends LogMoreConfigBase = LogMoreConfigBase
  >(
    defaultConfig: TLogMoreConfig = DefaultLogMoreConfigBase as TLogMoreConfig
  ): boolean => {
    return setConfig({ ...defaultConfig });
  };

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getConfig = (): LogMoreConfigBase => {
    let config = getConfig();
    if (!config) {
      ConfigurationManagerBase.init();

      config = getConfig();
      if (!config) {
        captureStringToConsole(
          "Log-More could not retrieve configuration from memory.",
          DefaultEventTypes.ERROR
        );

        return { ...DefaultLogMoreConfigBase };
      }
    }

    return config;
  };

  /**
   * Get an item from the current log configuration object
   * @param name - The name of the current configuration object to get
   * @returns The configuration item value
   */
  public static getConfigItem = <T = unknown>(name: string): T => {
    return (ConfigurationManagerBase.getConfig() as unknown as Indexable)?.[
      name
    ] as T;
  };

  /**
   * Get all of the current configurations for the defined for log event types
   * @returns The log event configuration
   */
  public static getLogEventRegistry =
    (): TypedIndexable<LogEventConfigBase> => {
      return ConfigurationManagerBase.getConfig()?.logEventRegistry ?? {};
    };

  /**
   * Get the current configuration for a specified log event type
   * @param type - The type of the log event to return configuration for
   * @returns The log event configuration
   */
  public static tryGetLogEventConfig = (
    type: string
  ): LogEventConfigBase | undefined => {
    return ConfigurationManagerBase.getLogEventRegistry()?.[type];
  };

  /**
   * Get the current configuration for a specified log event type
   * @param type - The type of the log event to return configuration for
   * @returns The log event configuration
   */
  public static getLogEventConfig = (type: string): LogEventConfigBase => {
    return (
      ConfigurationManagerBase.getLogEventRegistry()?.[type] ??
      ConfigurationManagerBase.getConfig()
    );
  };

  /**
   * Set the configuration for how logging should be handled
   * @param params - The configuration to use for logging going forward
   */
  public static setConfig = (params?: Partial<LogMoreConfigBase>): boolean => {
    const config: LogMoreConfigBase = {
      ...ConfigurationManagerBase.getConfig(),
      ...params,
      logEventRegistry: ConfigurationManagerBase.getLogEventRegistry(),
    };
    if (params?.logEventRegistry) {
      for (const type of Object.keys(params.logEventRegistry)) {
        if (config.logEventRegistry[type]) {
          config.logEventRegistry[type] = {
            ...config.logEventRegistry[type],
            ...params.logEventRegistry[type],
          };
        }
      }
    }

    return setConfig(config);
  };

  /**
   * Set a specific item value on the configuration object
   * @param name - The name of the configuration object item to set
   * @param value - The value to set on the configuration object
   * @returns
   */
  public static setConfigItem = (name: string, value: unknown): boolean => {
    return ConfigurationManagerBase.setConfig({
      ...ConfigurationManagerBase.getConfig(),
      [name]: value,
    });
  };
}
