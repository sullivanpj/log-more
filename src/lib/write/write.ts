import { LogEvent, LogWriteParams } from "../../types/log";
import { nanoid } from "nanoid";
import { ConfigurationManager } from "../../configuration-manager";
import { Result } from "../../result";
import { formatLogMessage } from "../formatLogMessage";
import { isResult } from "../isResult";

/**
 * Write the passed in params to the logs
 * @param param - The event/result to write to the logs
 * @param eventType - Override the event type set on the param object
 * @returns A result object indicating if the process was successful or not
 */
export const write = (param: LogWriteParams, eventType?: string): Result => {
  let exception = undefined;
  let result;

  try {
    const {
      logEventIdLength,
      defaultEventType,
      defaultEventSource,
      appendStack,
      logMessagePrefix,
      logMessagePostfix,
      context,
      userId,
    } = ConfigurationManager.getConfig();

    let logEvent: LogEvent;
    if (typeof param === "string") {
      logEvent = {
        id: nanoid(logEventIdLength),
        message: param,
        eventType: eventType ?? defaultEventType,
        userId,
      };
    } else {
      logEvent = {
        id: nanoid(logEventIdLength),
        userId,
        ...param,
        eventType:
          eventType ?? (param as LogEvent)?.eventType ?? defaultEventType,
      };
    }

    if (!logEvent.message || !logEvent.eventType) {
      // Return no message to log
      return Result.warning("No message passed to write method", undefined);
    }

    if (!logEvent.source) {
      logEvent.source = defaultEventSource;
    }
    if (!appendStack) {
      delete logEvent.stack;
    }
    if (logMessagePrefix) {
      logEvent.message = logMessagePrefix + logEvent.message;
    }
    if (logMessagePostfix) {
      logEvent.message += logMessagePostfix;
    }
    if (!logEvent.context) {
      logEvent.context = context;
    }

    const { throwOnEvent, writeLogEvent } =
      ConfigurationManager.getEventTypeRegistry(logEvent.eventType);
    exception = throwOnEvent;

    result = formatLogMessage(logEvent);
    if (result.isFailure) {
      return result;
    }
    logEvent.formatted = result.values;

    result = writeLogEvent(logEvent);
    if (isResult(result) && result.isFailure) {
      return result;
    }

    result = Result.success();
  } catch (e) {
    result = Result.error(e as Error);
  }

  if (exception) {
    throw exception;
  }

  return result;
};
