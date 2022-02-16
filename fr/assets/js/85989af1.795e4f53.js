"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[6777],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),s=o,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8226:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"log-more.formatfunction",title:"FormatFunction type",hide_title:!0},i=void 0,l={unversionedId:"log-more.formatfunction",id:"log-more.formatfunction",title:"FormatFunction type",description:"log-more &gt; FormatFunction",source:"@site/docs/log-more.formatfunction.md",sourceDirName:".",slug:"/log-more.formatfunction",permalink:"/log-right/fr/docs/log-more.formatfunction",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-more.formatfunction.md",tags:[],version:"current",frontMatter:{id:"log-more.formatfunction",title:"FormatFunction type",hide_title:!0}},c=[{value:"FormatFunction type",id:"formatfunction-type",children:[],level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-more"},"log-more")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-more.formatfunction"},"FormatFunction")),(0,o.kt)("h2",{id:"formatfunction-type"},"FormatFunction type"),(0,o.kt)("p",null,"The function definition for any implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),". Custom user-defined methods should be sure to align with this."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type FormatFunction<TReturned = unknown, TResult extends Result<TReturned> = Result<TReturned>, TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TResultFormat extends Result<TReport> = Result<TReport>> = FormatFunctionBase<TReturned, TResult, TFormatted, TReport, TResultFormat>;\n")),(0,o.kt)("b",null,"References:")," [Result](/log-right/fr/docs/log-more.result)")}p.isMDXComponent=!0}}]);