import { LoggerConfig } from "src/types/logger";
import { Logger } from "src/logger";

export const LoggerDefaultConfig: LoggerConfig = {
  writeLogEvent: Logger.writeToConsole,
  appendStack: true,
  logEventIdLength: 32,
  context: {}
} as const;
