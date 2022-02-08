import { Result } from "../result";
import { ConfigurationManager } from "../configuration-manager";

/**
 * Formats a template field into a token string that can be identified by the log formatter
 * @param templateTokenField The template field name to be used in formatting the token
 * @param templateTokenStart Optional parameter for the template token start string
 * @param templateTokenStop  Optional parameter for the template token end string
 * @returns The formatted template token
 */
export const formatTemplateToken = (
  templateTokenField: string,
  templateTokenStart?: string,
  templateTokenStop?: string
): Result<string> => {
  try {
    if (!templateTokenStart || !templateTokenStop) {
      const { templateTokenStart: tokenStart, templateTokenStop: tokenStop } =
        ConfigurationManager.getConfig();

      if (!templateTokenStart) {
        templateTokenStart = tokenStart;
      }
      if (!templateTokenStop) {
        templateTokenStop = tokenStop;
      }
    }

    return Result.success(
      templateTokenStart + templateTokenField + templateTokenStop
    );
  } catch (e) {
    return Result.error(e as Error);
  }
};
