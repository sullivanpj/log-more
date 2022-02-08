<!-- @format -->

![Log-More Logo](http://sullivanpj.com/images/log-more-banner.png)

📓 Log-More is a light-weight (but expansive) javascript logging library with a focus on developer experience and simplifying the process of error handling, reporting, and troubleshooting. 📓

[![NPM Version](https://img.shields.io/npm/v/react-final-form.svg?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/log-more)
[![Build Status](https://img.shields.io/github/license/sullivanpj/log-more?style=for-the-badge&logo=appveyor)](https://github.com/sullivanpj/log-more)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge&logo=appveyor)](https://github.com/sullivanpj/log-more)
[![Build Status](https://img.shields.io/github/issues/sullivanpj/log-more?style=for-the-badge&logo=appveyor)](https://github.com/sullivanpj/log-more)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/sullivanpj/log-more?style=for-the-badge)](https://github.com/sullivanpj/log-more)
[![GitHub last commit](https://img.shields.io/github/last-commit/sullivanpj/log-more?style=for-the-badge&logo=appveyor)](https://github.com/sullivanpj/log-more)

<style>{`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }
`}</style>

# Features

- Provides a logger utility to extend build-in logging functionality
- Includes a Result class that can be used to manage errors (or any other type of result) that are returned from any kind of function or process
- Simplifies global application logging by allowing users to specify how and when logs should be written/handled
- Provides various utility methods to handle Results return from functions/process and log information and performance metrics
- Allow user to specify custom event types which will then drive how event handler logic and logging is executed
- Supports formatting of log event messages using custom string templates provided by the user

## Some Benefits of Using 📓 Log-More

- **Simple:** The APIs are extremely easy to use and include detailed [documentation](https://sullivanpj.github.io/log-more/) for all of the functionality
- **Very Modular:** Package modules are separated by functionality/utility. Works with webpack, Browserify, or Rollup and also supports tree-shaking.
- **TypeScript Support:** 📓 Log-More was created using TypeScript, so all the types associated with the package are fully supported and up to date
- [**And many more**](https://sullivanpj.github.io/log-more/)

## Visit our [documentation](https://sullivanpj.github.io/log-more/) for more info, guides, API and more!

# Installation

Installing and using Log-More is very simple. Start by installing the `log-more` dependency:

```bash
$ npm i log-more --save
# or
$ yarn add log-more
```

Once it is installed, you can import and use the `log-more` helper utilities and classes:

```js
import { ConfigurationManager, validate, Log, Result } from "log-more";
```

# Configuration

Once the package has been installed, you can use the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html) to specify how you want your application's logging to behave.

```ts
import { ConfigurationManager, LogEvent } from "log-more";

const writeLog = (logEvent: LogEvent) => {
  console.log("Event Type: " + logEvent.eventType);
  console.log("Event Message: " + logEvent.message);
};

ConfigurationManager.setConfig({
  writeLogEvent: writeLog,
  defaultEventSource: "User's Custom Source",
  defaultResultName: "User's Result Name",
  defaultErrorResultMessage:
    "This is a custom default error message specified by the user",
});
```

The full list of configuration parameters can be found in our [documentation](https://sullivanpj.github.io/log-more/modules.html#Configuration).

# Logging

Log-More provides the user with "write" logging utility methods that will use the [configuration](https://sullivanpj.github.io/log-more/modules.html#Configuration) parameters previously provided by the user to write logs.

```ts
import {
  writeDebug,
  writeInfo,
  writeWarning,
  writeError,
  write,
} from "log-more";

writeDebug("This is an debug message.");
writeInfo("This is an info message.");
writeWarning("This is an warn message.");
writeError("This is an error message.");

// The below function call specifies a user-defined event type
write("This is a custom event message.", "CUSTOM_EVENT_TYPE");
```

This event logged in the [write](https://sullivanpj.github.io/log-more/modules.html#write) method above will use custom event handler and logging logic specified by the user for that specific event type. Prior to the code snippet above, it is assumed the user [registered](https://sullivanpj.github.io/log-more/modules.html#CustomEventTypeDetails) the "CUSTOM_EVENT_TYPE" event type in the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html).

**NOTE:** All five of the "write" methods above will call the [writeLogEvent](https://sullivanpj.github.io/log-more/modules.html#WriteLogEventFunction) functions defined in the [Configuration](https://sullivanpj.github.io/log-more/modules.html#Configuration) that were passed to the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html)

More information on the "write" logging utility methods shown above can be found in our [documentation](https://sullivanpj.github.io/log-more/modules.html#write).

# Error (and Any Other Type of Result) Handling

The [Result](https://sullivanpj.github.io/log-more/classes/Result.html) class provided by Log-More can be used in any function or process to indicate success, failure, or something in between.

For quick usage, the Result class includes some static methods that can be used to generate a new Result object with the specified `validationType`.

```ts
import { Result, validate, write } from "log-more";

const someSuccessfulFunction = () => {
  const returnValues = {
    value1: "foo",
    value2: "bar",
  };

  return Result.success(returnValues);
```

```ts
import { Result, validate, write } from "log-more";

const someSuccessfulFunction = () => {
  const returnValues = {
    value1: "foo",
    value2: "bar",
  };

  return Result.success(returnValues);
};

const someFailureFunction = () => {
  return Result.error({ message: "The reason for the failure" });
};

const successResult: Result = someSuccessfulFunction();
if (successResult.isFailure) {
  // This code will not be hit
}

// The validate helper function uses the same underlying logic as the Result.isFailure property accessor
if (!validate(successResult)) {
  // This code will not be hit
}

// The values property will contain the values passed into Result.success function
console.log(success.values);
// > { value1: "foo", value2: "bar" }

const failure = someFailureFunction();
if (failure.isFailure) {
  // This code will be hit
}

// The "write" helper functions mentioned in the previous section can also
// accept a Result object as an input parameter to log
write(failure);
```

**NOTE:** In Log-More, event types and validation types are **NOT** the same. Event types are free-format strings that can be used to look up details on how the log event object should be handled/logged. There are a variable amount of possible event types, as the user is able to register as many or as few as they like. [Validation types](https://sullivanpj.github.io/log-more/modules.html#ResultValidationType) are defined through code (as a result, they have a fixed number of types) and are used to determine which path in code should be taken when an event occurs. The user-defined event types added in the [eventTypeRegistry](https://sullivanpj.github.io/log-more/modules.html#Configuration) will have a validation type associated with them. While there could be some overlap in the event and validation type values, they are not directly related to each other.

<div className="subheading">Custom User Defined Events</div>

📓 Log-More allows users to specify custom event types, handlers, and logging.

When providing a configuration object to the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html), user's can specify the [eventTypeRegistry](https://sullivanpj.github.io/log-more/modules.html#Configuration) parameter. This parameter allows users to [register](https://sullivanpj.github.io/log-more/modules.html#CustomEventTypeDetails) custom event types with Log-More that can be handled at a later time.

```ts
import {
  ConfigurationManager,
  LogEvent,
  ResultValidationTypes,
} from "log-more";

const writeCustomEventLog = (logEvent: LogEvent) => {
  console.log(logEvent.message);
};

ConfigurationManager.setConfig({
  eventTypeRegistry: {
    CUSTOM_EVENT_TYPE: {
      // Will be called to log this custom event type
      writeLogEvent: writeCustomEventLog,

      // Tell the validate function how to handle this event
      validationType: ResultValidationTypes.ERROR,

      // The specified object will be thrown if this event occurs (if nothing is specified
      // in the throwOnEvent field, nothing will be thrown)
      throwOnEvent: {
        message: "This object was thrown because we specified it",
      },

      // The template used to format this event type's logs
      formatTemplate: "CUSTOM_EVENT_TYPE: <!--MESSAGE--!>",
    },
  },
});
```

After registering the custom event type with the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html), you can use it by returning [Result](https://sullivanpj.github.io/log-more/classes/Result.html) objects with the type specified in the `eventType` field.

```ts
import { Result, validate } from "log-more";

const someCustomEventFunction = () => {
  return new Result({ eventType: "CUSTOM_EVENT_TYPE" });
};

const result = someCustomEventFunction();
if (!validate(result)) {
  // This code will be hit if the validationType on the eventTypeRegistry is set to "ERROR"
}
```

Please see the Result section in our [documentation](https://sullivanpj.github.io/log-more/classes/Result.html) for more details on this functionality.

# Log Message Format / Formatting Templates

Log-More allows users to define their own custom templates to be used in [formatting](https://sullivanpj.github.io/log-more/modules.html#formatLogMessage) the data associated with an event into something that is either more human-readable or can be processed by a service. These templates can be applied to all types of logs on a global-level, or specific to a certain event type that is [registered](https://sullivanpj.github.io/log-more/modules.html#Configuration) with the [ConfigurationManager](https://sullivanpj.github.io/log-more/classes/ConfigurationManager.html).

The format templates are made up of template fields that are passed into the [formatTemplateToken](https://sullivanpj.github.io/log-more/modules.html#formatTemplateToken) function to generate template field tokens. Creating the template field tokens in the [formatTemplateToken](https://sullivanpj.github.io/log-more/modules.html#formatTemplateToken) function is a very straight forward process - essentially just pre-pending the templateTokenStart and appending the templateTokenStop strings from the [Configuration](https://sullivanpj.github.io/log-more/modules.html#Configuration) data around the field name. The below list of fields are available to include in a formatting template:

|    **Field Name**     | **Template Field** |
| :-------------------: | :----------------: |
|      Event Type       |     EVENT_TYPE     |
|    Validation Type    |  VALIDATION_TYPE   |
|       Event ID        |         ID         |
|      Event Name       |        NAME        |
|     Event Source      |       SOURCE       |
|        Context        |      CONTEXT       |
|     Event Message     |      MESSAGE       |
| Event Message Details |      DETAILS       |
|      Stack Trace      |       STACK        |
|        User ID        |      USER_ID       |
| Timestamp (formatted) |     TIME_STAMP     |

```ts
import { Result, validate, formatLogMessage } from "log-more";

const someCustomEventFunction = () => {
  return new Result({ eventType: "CUSTOM_EVENT_TYPE" });
};

const result = someCustomEventFunction();
if (!validate(result)) {
  // This code will be hit if the validationType on the eventTypeRegistry is set to "ERROR"
}
```
