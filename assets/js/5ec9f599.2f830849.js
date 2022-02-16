"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[5474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,s=f["".concat(l,".").concat(m)]||f[m]||g[m]||a;return r?n.createElement(s,i(i({ref:t},u),{},{components:r})):n.createElement(s,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2499:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>p,toc:()=>l,default:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"log-more.reportconfig",title:"ReportConfig interface",hide_title:!0},i=void 0,p={unversionedId:"log-more.reportconfig",id:"log-more.reportconfig",title:"ReportConfig interface",description:"log-more &gt; ReportConfig",source:"@site/docs/log-more.reportconfig.md",sourceDirName:".",slug:"/log-more.reportconfig",permalink:"/log-right/docs/log-more.reportconfig",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-more.reportconfig.md",tags:[],version:"current",frontMatter:{id:"log-more.reportconfig",title:"ReportConfig interface",hide_title:!0}},l=[{value:"ReportConfig interface",id:"reportconfig-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-more"},"log-more")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/log-more.reportconfig"},"ReportConfig")),(0,o.kt)("h2",{id:"reportconfig-interface"},"ReportConfig interface"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Report")," configuration parameters to be applied to a specific event type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ReportConfig<TFormat extends FormatFunction = FormatFunction, TCapture extends CaptureFunction = CaptureFunction, TReport extends ReportFunction = ReportFunction> extends ReportConfigBase<TFormat, TCapture> \n")),(0,o.kt)("b",null,"Extends:")," ReportConfigBase<TFormat, TCapture>",(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.reportconfig.report"},"report")),(0,o.kt)("td",{parentName:"tr",align:null},"TReport"),(0,o.kt)("td",{parentName:"tr",align:null},"The default function that will be used to ",(0,o.kt)("code",null,"Report")," an event. Can be overridden by the user to apply custom logic.")))))}u.isMDXComponent=!0}}]);