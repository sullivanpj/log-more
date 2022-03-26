---
id: log-right.reportfunction
title: ReportFunction type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[log-right](./log-right.md) &gt; [ReportFunction](./log-right.reportfunction.md)

## ReportFunction type

The function definition for any implementations of `Report`. This function can be user-defined, and will be called when a specified result is called.

<b>Signature:</b>

```typescript
export declare type ReportFunction<TReturned = unknown, TResult extends Result<TReturned> = Result<TReturned>, TReturnedReport = unknown, TResultReport extends Result<TReturnedReport> = Result<TReturnedReport>> = (result: TResult) => TResultReport;
```
<b>References:</b> [Result](./log-right.result.md)