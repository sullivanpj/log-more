![Log-More Logo](http://sullivanpj.com/images/log-more-banner.png)

:notebook: Log-More is a lightweight javascript library to enhance logging and provide error checking in function return types

# Features
- Provides a logger utility to extend build-in logging functionality
- Includes a Result class that can be used to manage errors (or any other type of result) that are returned from any kind of function or process
- Simplifies global application logging by allowing users to specify how and when logs should be written/handled
- Provides various utility methods to handle Results return from functions/process and log information and performance metrics

## Visit our [documentation](https://sullivanpj.github.io/log-more/) for more info, guides, API and more!

# Installation

Installing and using :notebook: Log-More is very simple. Start by installing the `log-more` dependency:

```bash
$ npm i log-more --save
```

Once it is installed, you can import and use the `log-more` helper utilities and classes:

```js
import { ConfigurationManager, validate, Log, Result } from 'log-more';
```

# Configuration

Once the package has been installed, you can use the `ConfigurationManager` to specify how you want your application's logging to behave. 

```ts
import { ConfigurationManager } from 'log-more';

const writeLog = (logEvent: LogWriteParams, type?: LogEventType | undefined) => {
  console.log(logEvent.message);
}

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
import { Log } from 'log-more';

Log.debug("This is an debug message.");
Log.info("This is an info message.");
Log.warn("This is an warn message.");
Log.error("This is an error message.");
```

More information on the Log utility can be found in our [documentation](https://sullivanpj.github.io/log-more/classes/Log.html).

# Error (and Any Other Type of Result) Handling

The `Result` class provided by :notebook: Log-More can be used in any function or process to indicate success, failure, or something inbetween. 

```ts
import { Result, validate } from 'log-more';

const someSuccessfulFunction = () => {
  const returnValues = {
    value1: "foo",
    value2: "bar",
  };

  return Result.success(returnValues);
};

const someFailureFunction = () => {
  return Result.error({ message: "The reason for the failure" });
}

const success = someSuccessfulFunction();
if (!validate(success)) {
  // This code will not be hit
}

const failure = someFailureFunction();
if (!validate(failure)) {
  // This code will be hit
}
```

Please see the [Result section](https://sullivanpj.github.io/log-more/classes/Result.html) in our documentation for more info on this functionality.

