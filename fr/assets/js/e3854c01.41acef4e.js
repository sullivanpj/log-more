"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[9609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,d=f["".concat(p,".").concat(g)]||f[g]||s[g]||i;return r?n.createElement(d,l(l({ref:t},a),{},{components:r})):n.createElement(d,l({ref:t},a))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1996:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>a});var n=r(7462),o=(r(7294),r(3905));const i={id:"log-right.reportfunction",title:"ReportFunction type",hide_title:!0},l=void 0,c={unversionedId:"log-right.reportfunction",id:"log-right.reportfunction",title:"ReportFunction type",description:"log-right &gt; ReportFunction",source:"@site/docs/log-right.reportfunction.md",sourceDirName:".",slug:"/log-right.reportfunction",permalink:"/log-right/fr/docs/log-right.reportfunction",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.reportfunction.md",tags:[],version:"current",frontMatter:{id:"log-right.reportfunction",title:"ReportFunction type",hide_title:!0}},p=[{value:"ReportFunction type",id:"reportfunction-type",children:[],level:2}],u={toc:p};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right"},"log-right")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right.reportfunction"},"ReportFunction")),(0,o.kt)("h2",{id:"reportfunction-type"},"ReportFunction type"),(0,o.kt)("p",null,"The function definition for any implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"Report"),". This function can be user-defined, and will be called when a specified result is called."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ReportFunction<TReturned = unknown, TResult extends Result<TReturned> = Result<TReturned>, TReturnedReport = unknown, TResultReport extends Result<TReturnedReport> = Result<TReturnedReport>> = (result: TResult) => TResultReport;\n")),(0,o.kt)("b",null,"References:")," [Result](/log-right/fr/docs/log-right.result)")}a.isMDXComponent=!0}}]);