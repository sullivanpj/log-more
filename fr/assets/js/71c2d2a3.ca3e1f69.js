"use strict";(globalThis.webpackChunklog_more=globalThis.webpackChunklog_more||[]).push([[9944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4095:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>p,default:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"base.reportconfigbase",title:"ReportConfigBase interface",hide_title:!0},l=void 0,i={unversionedId:"base.reportconfigbase",id:"base.reportconfigbase",title:"ReportConfigBase interface",description:"@log-more/base &gt; ReportConfigBase",source:"@site/docs/base.reportconfigbase.md",sourceDirName:".",slug:"/base.reportconfigbase",permalink:"/log-more/fr/docs/base.reportconfigbase",editUrl:"https://github.com/sullivanpj/log-more/tree/main/apps/docs/docs/base.reportconfigbase.md",tags:[],version:"current",frontMatter:{id:"base.reportconfigbase",title:"ReportConfigBase interface",hide_title:!0}},p=[{value:"ReportConfigBase interface",id:"reportconfigbase-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base"},"@log-more/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base.reportconfigbase"},"ReportConfigBase")),(0,a.kt)("h2",{id:"reportconfigbase-interface"},"ReportConfigBase interface"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Report")," configuration parameters to be applied to a specific event type"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ReportConfigBase<TFormat extends FormatFunctionBase = FormatFunctionBase, TCapture extends CaptureFunctionBase = CaptureFunctionBase> extends EventConfig \n")),(0,a.kt)("b",null,"Extends:")," [EventConfig](/log-more/fr/docs/base.eventconfig)",(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.capture"},"capture")),(0,a.kt)("td",{parentName:"tr",align:null},"TCapture"),(0,a.kt)("td",{parentName:"tr",align:null},"The default function that will be used to capture the ",(0,a.kt)("code",null,"Report"),". Can be overridden by the user to apply custom logging. The default functionality will try to write the ",(0,a.kt)("code",null,"Report")," to the console.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.format"},"format")),(0,a.kt)("td",{parentName:"tr",align:null},"TFormat"),(0,a.kt)("td",{parentName:"tr",align:null},"The default function that will be used to format the ",(0,a.kt)("code",null,"Report"),". Can be overridden by the user to apply custom formatting. The default functionality will try to use the template and Result object and into a Report string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.isincludingstack"},"isIncludingStack")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"An indicator specifying if a stack trace should be included in the ",(0,a.kt)("code",null,"Report"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.locale"},"locale?")),(0,a.kt)("td",{parentName:"tr",align:null},"Locale ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," The locale object to use when formatting the timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.messagepostfix"},"messagePostfix?")),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A postfix string to append to the end of all ",(0,a.kt)("code",null,"Report")," messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.messageprefix"},"messagePrefix?")),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A prefix string to prepend to the start of all ",(0,a.kt)("code",null,"Report")," messages")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.template"},"template?")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string specifying the report template to use when formatting the ",(0,a.kt)("code",null,"Report")," for this event type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.templatefieldstart"},"templateFieldStart")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The string used to mark the beginning of a field token in a ",(0,a.kt)("code",null,"Report")," template string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.templatefieldstop"},"templateFieldStop")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The string used to mark the end of a field token in a ",(0,a.kt)("code",null,"Report")," template string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.reportconfigbase.timestampformat"},"timestampFormat")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A string used to format the timestamp value appended to the ",(0,a.kt)("code",null,"Report")," event")))))}c.isMDXComponent=!0}}]);