"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[9878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3670:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>p,default:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"base.report",title:"Report interface",hide_title:!0},i=void 0,l={unversionedId:"base.report",id:"base.report",title:"Report interface",description:"@log-right/base &gt; Report",source:"@site/docs/base.report.md",sourceDirName:".",slug:"/base.report",permalink:"/log-right/fr/docs/base.report",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.report.md",tags:[],version:"current",frontMatter:{id:"base.report",title:"Report interface",hide_title:!0}},p=[{value:"Report interface",id:"report-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base"},"@log-right/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base.report"},"Report")),(0,a.kt)("h2",{id:"report-interface"},"Report interface"),(0,a.kt)("p",null,"The base interface definition for ",(0,a.kt)("inlineCode",{parentName:"p"},"Report")),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Report<TFormatted extends FormattedData = FormattedData> extends Event \n")),(0,a.kt)("b",null,"Extends:")," Event",(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/fr/docs/base.report.data"},"data?")),(0,a.kt)("td",{parentName:"tr",align:null},"TFormatted"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A field containing any report specific values added during formatting that should be sent with the report")))))}s.isMDXComponent=!0}}]);