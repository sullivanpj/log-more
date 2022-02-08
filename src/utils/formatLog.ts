import { Result } from "src/result";
import { format } from "date-fns";
import { LogEvent } from "src/types/log";
import { ConfigurationManager } from "src/configuration-manager";
import { formatTemplateToken } from "src/utils/formatTemplateToken";
import { FormatTemplateFields } from "src/constants/format-template-fields";
import { getDefaultFormatTemplate } from "src/utils/getDefaultFormatTemplate";

/**
 * Replace the field's token string with the field's value
 * @param formatTemplate The template string used to format the log message
 * @param formatTemplateField The template field name
 * @param value The log field value
 * @param templateTokenStart The string used to mark the start of a field token in a format template string
 * @param templateTokenStop The string used to mark the end of a field token in a format template string
 * @returns The template string with the field token replace with the field value
 */
const replaceToken = (
  formatTemplate: string,
  formatTemplateField: string,
  value: string = "",
  templateTokenStart?: string,
  templateTokenStop?: string
): Result<string> => {
  try {
    if (formatTemplate.includes(formatTemplateField)) {
      let result = formatTemplateToken(
        formatTemplateField,
        templateTokenStart,
        templateTokenStop
      );
      if (result.isFailure) {
        return result;
      }
      const token = result.values;

      if (token && formatTemplate.includes(token)) {
        formatTemplate.replaceAll(token, value);
      }
    }

    return Result.success(formatTemplate);
  } catch (e) {
    return Result.error(e as Error);
  }
};

/**
 * A type-check function to verify if the passed in object is a Result object
 * @param param The object that will have it's typed verified
 * @returns A boolean indicator specifying if the passed in object's type is Result
 */
export const formatLog = (logEvent: LogEvent): Result<string> => {
  try {
    const { templateTokenStart, templateTokenStop, timestampFormat, locale } =
      ConfigurationManager.getConfig();

    let formatted = ConfigurationManager.getEventTypeRegistry(
      logEvent.eventType
    ).formatTemplate;
    if (!formatted) {
      formatted = ConfigurationManager.getConfig().defaultFormatTemplate;

      if (!formatted) {
        const result: Result<string> = getDefaultFormatTemplate(
          templateTokenStart,
          templateTokenStop
        );
        if (result.isFailure) {
          return result;
        }
        formatted = result.values;

        if (formatted) {
        } else {
          return Result.warning(
            "No format template could be found",
            logEvent.message
          );
        }
      }
    }

    let result: Result<string> = replaceToken(
      formatted,
      FormatTemplateFields.EVENT_TYPE,
      logEvent.eventType,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.VALIDATION_TYPE,
      logEvent.validationType,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.ID,
      logEvent.id,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.MESSAGE,
      logEvent.message,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.DETAILS,
      logEvent.details,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.STACK,
      logEvent.stack,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.SOURCE,
      logEvent.source,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.CONTEXT,
      logEvent.context,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    let timestamp = "";
    if (timestampFormat) {
      timestamp = format(new Date(), timestampFormat, { locale });
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.TIME_STAMP,
      timestamp,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    result = replaceToken(
      formatted,
      FormatTemplateFields.USER_ID,
      logEvent.userId,
      templateTokenStart,
      templateTokenStop
    );
    if (result.isFailure) {
      return result;
    } else if (result.values) {
      formatted = result.values;
    }

    return Result.success(format);
  } catch (e) {
    return Result.error(e as Error);
  }
};
