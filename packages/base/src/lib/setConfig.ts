import { LogRightConfigBase, Indexable } from "./types";

/**
 * An internal function used by the ConfigurationManager to get the configuration object
 * @returns The result object with the saved configuration object grabbed from memory in its returned values
 */
export const setConfig = (config: LogRightConfigBase): boolean => {
  try {
    (LOG_RIGHT_GLOBAL_CONFIG_OBJECT as Indexable)[
      LOG_RIGHT_GLOBAL_CONFIG_INSTANCE_ID
    ] = config;

    return true;
  } catch (e) {
    return false;
  }
};
