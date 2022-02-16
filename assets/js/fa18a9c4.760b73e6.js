"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[4867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7663:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"base.formatfunctionbase",title:"FormatFunctionBase type",hide_title:!0},i=void 0,s={unversionedId:"base.formatfunctionbase",id:"base.formatfunctionbase",title:"FormatFunctionBase type",description:"@log-right/base &gt; FormatFunctionBase",source:"@site/docs/base.formatfunctionbase.md",sourceDirName:".",slug:"/base.formatfunctionbase",permalink:"/log-right/docs/base.formatfunctionbase",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.formatfunctionbase.md",tags:[],version:"current",frontMatter:{id:"base.formatfunctionbase",title:"FormatFunctionBase type",hide_title:!0}},c=[{value:"FormatFunctionBase type",id:"formatfunctionbase-type",children:[],level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/base"},"@log-right/base")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/base.formatfunctionbase"},"FormatFunctionBase")),(0,o.kt)("h2",{id:"formatfunctionbase-type"},"FormatFunctionBase type"),(0,o.kt)("p",null,"The function definition for any implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),". Custom user-defined methods should be sure to align with this."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type FormatFunctionBase<TReturned = unknown, TResult extends IResult<TReturned> = IResult<TReturned>, TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TResultFormat extends IResult<TReport> = IResult<TReport>> = (result: TResult) => TResultFormat | TReport;\n")),(0,o.kt)("b",null,"References:")," [IResult](/log-right/docs/base.iresult), [FormattedData](/log-right/docs/base.formatteddata), [Report](/log-right/docs/base.report)")}u.isMDXComponent=!0}}]);