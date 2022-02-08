![Log-More Logo](http://sullivanpj.com/images/log-more-banner.png)

📓 Log-More is a light-weight (but expansive) javascript logging library with a focus on developer experience and simplifying the process of error handling, reporting, and troubleshooting. 📓 


# Features

- Provides a logger utility to extend build-in logging functionality
- Includes a Result class that can be used to manage errors (or any other type of result) that are returned from any kind of function or process
- Simplifies global application logging by allowing users to specify how and when logs should be written/handled
- Provides various utility methods to handle Results return from functions/process and log information and performance metrics
- Allow user to specify custom event types which will then drive how event handler logic and logging is executed
- Supports formatting of log event messages using custom string templates provided by the user

## Some Benefits of using Log-More

- **Simple:** The APIs are extremely easy to use and include detailed [documentation](https://sullivanpj.github.io/log-more/) for all of the functionality
- **Very Modular:** Package modules are separated by functionality/utility. Works with webpack, Browserify, or Rollup and also supports tree-shaking.
- **TypeScript Support:** :notebook: Log-More was created using TypeScript, so all the types associated with the package are fully supported and up to date
- [**And many more**](https://sullivanpj.github.io/log-more/)

## Visit our [documentation](https://sullivanpj.github.io/log-more/) for more info, guides, API and more!

# Installation

Installing and using :notebook: Log-More is very simple. Start by installing the `log-more` dependency:

```bash
$ npm i log-more --save
```

Once it is installed, you can import and use the `log-more` helper utilities and classes:

```js
import { ConfigurationManager, validate, Log, Result } from "log-more";
```

# Configuration

Once the package has been installed, you can use the `ConfigurationManager` to specify how you want your application's logging to behave.

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

:notebook: Log-More provides the user with a Log object that will use the configuration parameters previously provided by the user to write logs.

```ts
import { Log } from "log-more";

Log.debug("This is an debug message.");
Log.info("This is an info message.");
Log.warn("This is an warn message.");
Log.error("This is an error message.");

// The below function call will use a user defined method to determine how
// this event is logged and which event handler logic is called
Log.write("This is a custom event message.", "CUSTOM_EVENT_TYPE");
```

More information on the Log utility can be found in our [documentation](https://sullivanpj.github.io/log-more/classes/Log.html).

# Error (and Any Other Type of Result) Handling

The `Result` class provided by :notebook: Log-More can be used in any function or process to indicate success, failure, or something in between.

```ts
import { Result, validate } from "log-more";

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

const success = someSuccessfulFunction();
if (!validate(success)) {
  // This code will not be hit
}

// The values property will contain the values passed into Result.success function
console.log(success.values);
// > { value1: "foo", value2: "bar" }

const failure = someFailureFunction();
if (!validate(failure)) {
  // This code will be hit
}
```

## Custom User Defined Events

:notebook: Log-More allows users to specify custom event types, handlers, and logging.

When providing a configuration object to the `ConfigurationManager`, user's can specify the `eventTypeRegistry` parameter. This parameter allows user's to register custom event types with :notebook: Log-More that can be handled at a later time.

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
      writeLogEventFunction: writeCustomEventLog,
      // Tell the validate function how to handle this event
      validationType: ResultValidationTypes.ERROR,
      // The specified object will be thrown if this event occurs (if nothing is specified in the throwOnEvent field, nothing will be thrown)
      throwOnEvent: {
        message: "This object was thrown because we specified it",
      },
    },
  },
});
```

After registering the custom event type with the `ConfigurationManager`, you can use it by returning `Result` objects with the type specified in the `eventType` field.

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

