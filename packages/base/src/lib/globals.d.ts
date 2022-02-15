/* eslint-disable no-var */
import { nanoid } from "nanoid/non-secure";

declare global {
  /**
   * Used to store the current configuration object being used
   */
  var LOG_MORE_GLOBAL_CONFIG_OBJECT: IGlobalConfig;

  /**
   * The instance ID representing the configuration
   */
  var LOG_MORE_GLOBAL_CONFIG_INSTANCE_ID: string = nanoid(10);

  /**
   * The instance ID representing the Result class
   */
  var LOG_MORE_GLOBAL_RESULT_INSTANCE_ID: string = nanoid(10);
}
