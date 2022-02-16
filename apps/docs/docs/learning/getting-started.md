---
id: getting-started
title: Getting Started
hide_title: false
tags:
  - learning
  - getting started
---

# Getting Started

After installing `log-right` in your application, you're now ready to get started using all of the great features available in the package.

## Returning Results

Log-Right's [Result](./log-right.result.md) class provides a standard way to handle returning errors (or any other value) from a function or external process. By using the Result object as your go-to method of returning from a function, you are organizing all of your code's function types, keeping to a consistent and predicable error handling principle, and enabling your code to use the rest of the Log-Right event handling flow.

## Formatting Reports

Log-Right will first format [Result](./log-right.result.md) objects using a method provided by the user (or the default methods if not provided), so that the data is in a form that can be captured to the logs. Log-Right also has various build-in methods of formatting this data that the user can select from.

This formatted data will be stored in a [Report](./log-right.report.md) object.

## Capturing Events

Logging in JavaScript/TypeScript can unfortunately tend to be much more difficult than just writing a string to the console. Log-Right has plenty of built in functionality to support various methods of capturing this data to the source of your choice - but if you just want to write the methods to the console, Log-Right has you covered there too!