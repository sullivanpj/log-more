"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[9944],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(r),u=a,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4095:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>p,default:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"base.reportconfigbase",title:"ReportConfigBase interface",hide_title:!0},l=void 0,i={unversionedId:"base.reportconfigbase",id:"base.reportconfigbase",title:"ReportConfigBase interface",description:"@log-right/base &gt; ReportConfigBase",source:"@site/docs/base.reportconfigbase.md",sourceDirName:".",slug:"/base.reportconfigbase",permalink:"/log-right/docs/base.reportconfigbase",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.reportconfigbase.md",tags:[],version:"current",frontMatter:{id:"base.reportconfigbase",title:"ReportConfigBase interface",hide_title:!0}},p=[{value:"ReportConfigBase interface",id:"reportconfigbase-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],s={toc:p};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/base"},"@log-right/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/base.reportconfigbase"},"ReportConfigBase")),(0,a.kt)("h2",{id:"reportconfigbase-interface"},"ReportConfigBase interface"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Report")," configuration parameters to be applied to a specific event type"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ReportConfigBase<TFormat extends FormatFunctionBase = FormatFunctionBase, TCapture extends CaptureFunctionBase = CaptureFunctionBase> extends EventConfig \n")),(0,a.kt)("b",null,"Extends:")," [EventConfig](/log-right/docs/base.eventconfig)",(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.capture"},"capture")),(0,a.kt)("td",{parentName:"tr",align:null},"TCapture"),(0,a.kt)("td",{parentName:"tr",align:null},"The default function that will be used to capture the ",(0,a.kt)("code",null,"Report"),". Can be overridden by the user to apply custom logging. The default functionality will try to write the ",(0,a.kt)("code",null,"Report")," to the console.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.format"},"format")),(0,a.kt)("td",{parentName:"tr",align:null},"TFormat"),(0,a.kt)("td",{parentName:"tr",align:null},"The default function that will be used to format the ",(0,a.kt)("code",null,"Report"),". Can be overridden by the user to apply custom formatting. The default functionality will try to use the template and Result object and into a Report string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.isincludingstack"},"isIncludingStack")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"An indicator specifying if a stack trace should be included in the ",(0,a.kt)("code",null,"Report"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.locale"},"locale?")),(0,a.kt)("td",{parentName:"tr",align:null},"Locale ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," The locale object to use when formatting the timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.messagepostfix"},"messagePostfix?")),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A postfix string to append to the end of all ",(0,a.kt)("code",null,"Report")," messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.messageprefix"},"messagePrefix?")),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A prefix string to prepend to the start of all ",(0,a.kt)("code",null,"Report")," messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.template"},"template?")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string specifying the report template to use when formatting the ",(0,a.kt)("code",null,"Report")," for this event type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.templatefieldstart"},"templateFieldStart")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The string used to mark the beginning of a field token in a ",(0,a.kt)("code",null,"Report")," template string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.templatefieldstop"},"templateFieldStop")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The string used to mark the end of a field token in a ",(0,a.kt)("code",null,"Report")," template string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/base.reportconfigbase.timestampformat"},"timestampFormat")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A string used to format the timestamp value appended to the ",(0,a.kt)("code",null,"Report")," event")))))}c.isMDXComponent=!0}}]);