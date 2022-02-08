import { Configuration, CustomEventTypeDetails } from "./types/configuration";
import { nanoid } from "nanoid";
import { DefaultConfiguration } from "./constants/default-configuration";
import { getDefaultFormatTemplate } from "./utils/getDefaultFormatTemplate";
import { Result } from "./result";
import { DefaultEventTypeRegistry } from "./constants/default-event-type-registry";
import { ResultValidationType } from "./types/result";
import { writeError } from "./utils/writeError";
import { IIndexable } from "./types/utils";

const instanceId = nanoid(32);

/**
 * A static class used to manage the log-more configuration data
 */
export class ConfigurationManager {
  /**
   * Set the configuration for how logging should be handled
   * @param params The configuration to use for logging going forward
   */
  public static setConfig(params?: Partial<Configuration>): Result {
    try {
      let config: Configuration = { ...DefaultConfiguration };
      if (params) {
        // Merge the params with the config object (contains default config)
        config = Object.keys(params).reduce(
          (ret: Configuration, key: string) => {
            if ((params as any)?.[key]) {
              (ret as any)[key] = (params as any)?.[key];
            }

            return ret;
          },
          config
        );
      }

      config.eventTypeRegistry = Object.keys(DefaultEventTypeRegistry).reduce(
        (ret: Record<string, CustomEventTypeDetails>, key: string) => {
          if (!ret[key].formatTemplate) {
            ret[key].formatTemplate = config.defaultFormatTemplate;
          }
          if (!ret[key].writeLogEvent) {
            ret[key].writeLogEvent = config.writeLogEvent;
          }
          if (!ret[key].validationType) {
            ret[key].validationType = DefaultEventTypeRegistry[key]
              ?.validationType
              ? (DefaultEventTypeRegistry[key]
                  .validationType as ResultValidationType)
              : config.defaultValidationType;
          }

          return ret;
        },
        config.eventTypeRegistry
      );

      return ConfigurationManager.storeConfig(config);
    } catch (e) {
      return Result.error(
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
  public static setConfigItem(name: string, value: any): Result {
    try {
      let config = ConfigurationManager.getConfig();
      (config as any)[name] = value;

      return ConfigurationManager.storeConfig(config as Configuration);
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getConfig(): Configuration | IIndexable {
    try {
      let result = ConfigurationManager.retrieveConfig();
      if (!result?.values || result.isFailure) {
        return {};
      }

      return { ...result.values };
    } catch (e) {
      writeError(
        `An error occurred retrieving the log-more configuration: ${
          (e as Error)?.message
        }`
      );

      return DefaultConfiguration;
    }
  }

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getConfigItem(name: string): any {
    try {
      const result = ConfigurationManager.retrieveConfig();
      if (result.isSuccessful) {
        return (result.values as any)?.[name];
      }
    } catch (e) {
      writeError(
        `An error occurred retrieving the log-more configuration: ${
          (e as Error)?.message
        }`
      );
    }
  }

  /**
   * Get the current log configuration object
   * @returns The logging configuration object
   */
  public static getEventTypeRegistry(
    eventType: string
  ): CustomEventTypeDetails {
    const {
      eventTypeRegistry,
      writeLogEvent,
      defaultFormatTemplate,
      defaultValidationType,
    } = ConfigurationManager.getConfig();
    try {
      const customEventTypeDetails = eventTypeRegistry?.[eventType];
      if (customEventTypeDetails) {
        if (!customEventTypeDetails?.writeLogEvent) {
          customEventTypeDetails.writeLogEvent = writeLogEvent;
        }
        if (!customEventTypeDetails?.validationType) {
          customEventTypeDetails.validationType = defaultValidationType;
        }
        if (!customEventTypeDetails?.formatTemplate) {
          customEventTypeDetails.formatTemplate = defaultFormatTemplate;
        }

        return { ...customEventTypeDetails };
      }
    } catch (e) {
      writeError(
        `An error occurred retrieving event type registry: ${Result.error(e)}`
      );
    }

    return {
      writeLogEvent,
      validationType: defaultValidationType,
      formatTemplate: defaultFormatTemplate,
    };
  }

  /**
   * An internal function used by the ConfigurationManager to save configuration changes
   * @param config The configuration object to save
   * @returns A result object that specified if the process was successful or not
   */
  private static storeConfig(config: Configuration): Result {
    try {
      (global as any)[instanceId] = config;

      return Result.success();
    } catch (e) {
      return Result.error(e as Error);
    }
  }

  /**
   * An internal function used by the ConfigurationManager to get the configuration object
   * @returns The result object with the saved configuration object grabbed from memory in its returned values
   */
  private static retrieveConfig(): Result<Configuration> {
    try {
      let config = (global as any)?.[instanceId];
      if (!config) {
        const result = ConfigurationManager.setConfig();
        if (result.isFailure) {
          return result;
        }

        config = (global as any)?.[instanceId];
        if (!config) {
          return Result.error(
            "The log-more configuration object could not be retrieved. Some functionality may not behave as expected. Please report this issue to the repo owners at https://github.com/sullivanpj/log-more/issues."
          );
        }
      }

      return Result.success(config);
    } catch (e) {
      return Result.error(e as Error);
    }
  }
}
