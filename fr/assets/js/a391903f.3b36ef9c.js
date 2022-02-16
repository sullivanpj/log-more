"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[3868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),g=a,b=f["".concat(s,".").concat(g)]||f[g]||p[g]||l;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2352:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>s,default:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"base.resultconfigbase",title:"ResultConfigBase interface",hide_title:!0},i=void 0,o={unversionedId:"base.resultconfigbase",id:"base.resultconfigbase",title:"ResultConfigBase interface",description:"@log-right/base &gt; ResultConfigBase",source:"@site/docs/base.resultconfigbase.md",sourceDirName:".",slug:"/base.resultconfigbase",permalink:"/log-right/fr/docs/base.resultconfigbase",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.resultconfigbase.md",tags:[],version:"current",frontMatter:{id:"base.resultconfigbase",title:"ResultConfigBase interface",hide_title:!0}},s=[{value:"ResultConfigBase interface",id:"resultconfigbase-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base"},"@log-right/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base.resultconfigbase"},"ResultConfigBase")),(0,a.kt)("h2",{id:"resultconfigbase-interface"},"ResultConfigBase interface"),(0,a.kt)("p",null,"Result object configuration parameters to be applied to a specific event type"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ResultConfigBase<TCallback extends CallbackFunction = CallbackFunction> extends EventConfig \n")),(0,a.kt)("b",null,"Extends:")," [EventConfig](/log-right/fr/docs/base.eventconfig)",(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/fr/docs/base.resultconfigbase.callback"},"callback?")),(0,a.kt)("td",{parentName:"tr",align:null},"TCallback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," This function is user-defined, and will be called when a specified result is called")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/fr/docs/base.resultconfigbase.throwonevent"},"throwOnEvent?")),(0,a.kt)("td",{parentName:"tr",align:null},"unknown ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An object that is thrown if the ",(0,a.kt)("code",null,"Result")," occurs. If nothing is provided, nothing will be thrown.")))))}u.isMDXComponent=!0}}]);