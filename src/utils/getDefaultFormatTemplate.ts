/** @format */

import { FormatTemplateFields } from "src/constants/format-template-fields";
import { Result } from "src/result";
import { formatTemplateToken } from "src/lib/formatTemplateToken";

/**
 * Get the default format log template string
 * @returns A result object with the format log template as its return values
 */
export const getDefaultFormatTemplate = (
    templateTokenStart: string,
    templateTokenStop: string
): Result<string> => {
    try {
        let result = formatTemplateToken(
            FormatTemplateFields.EVENT_TYPE,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const eventType = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.NAME,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const name = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.ID,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const id = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.TIME_STAMP,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const timestamp = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.SOURCE,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const source = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.MESSAGE,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const message = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.DETAILS,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const details = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.STACK,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const stack = result.values;

        result = formatTemplateToken(
            FormatTemplateFields.USER_ID,
            templateTokenStart,
            templateTokenStop
        );
        if (result.isFailure) {
            return result;
        }
        const userId = result.values;

        return Result.success(`${eventType} - ${name} (${id}):
Event Timestamp: ${timestamp}
Event Source: ${source}
User ID: ${userId}

${message}
${details}
${stack}

`);
    } catch (e) {
        return Result.error(e as Error);
    }
};
