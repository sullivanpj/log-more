"use strict";(globalThis.webpackChunklog_more=globalThis.webpackChunklog_more||[]).push([[6214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2697:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>c,toc:()=>p,default:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"base.capturefunctionbase",title:"CaptureFunctionBase type",hide_title:!0},u=void 0,c={unversionedId:"base.capturefunctionbase",id:"base.capturefunctionbase",title:"CaptureFunctionBase type",description:"@log-more/base &gt; CaptureFunctionBase",source:"@site/docs/base.capturefunctionbase.md",sourceDirName:".",slug:"/base.capturefunctionbase",permalink:"/log-more/docs/base.capturefunctionbase",editUrl:"https://github.com/sullivanpj/log-more/tree/main/apps/docs/docs/base.capturefunctionbase.md",tags:[],version:"current",frontMatter:{id:"base.capturefunctionbase",title:"CaptureFunctionBase type",hide_title:!0}},p=[{value:"CaptureFunctionBase type",id:"capturefunctionbase-type",children:[],level:2}],i={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-more/docs/base"},"@log-more/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-more/docs/base.capturefunctionbase"},"CaptureFunctionBase")),(0,a.kt)("h2",{id:"capturefunctionbase-type"},"CaptureFunctionBase type"),(0,a.kt)("p",null,"The function definition for any implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"capture"),". Custom user-defined methods should be sure to align with this."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type CaptureFunctionBase<TFormatted extends FormattedData = FormattedData, TReport extends Report<TFormatted> = Report<TFormatted>, TReturnedCapture = unknown, TResultCapture extends IResult<TReturnedCapture> = IResult<TReturnedCapture>> = (report: TReport) => TResultCapture | unknown;\n")),(0,a.kt)("b",null,"References:")," [FormattedData](/log-more/docs/base.formatteddata), [Report](/log-more/docs/base.report), [IResult](/log-more/docs/base.iresult)")}s.isMDXComponent=!0}}]);