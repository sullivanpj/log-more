import { LogRightConfigBase, Indexable } from "./types";

/**
 * An internal function used by the ConfigurationManager to get the configuration object
 * @returns The result object with the saved configuration object grabbed from memory in its returned values
 */
export const getConfig = (): LogRightConfigBase | undefined => {
  try {
    return (LOG_RIGHT_GLOBAL_CONFIG_OBJECT as Indexable)?.[
      LOG_RIGHT_GLOBAL_CONFIG_INSTANCE_ID
    ] as LogRightConfigBase;
  } catch (e) {
    return;
  }
};
