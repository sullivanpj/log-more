"use strict";(globalThis.webpackChunklog_more=globalThis.webpackChunklog_more||[]).push([[3868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),b=a,d=f["".concat(s,".").concat(b)]||f[b]||p[b]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2352:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>i,toc:()=>s,default:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"base.resultconfigbase",title:"ResultConfigBase interface",hide_title:!0},o=void 0,i={unversionedId:"base.resultconfigbase",id:"base.resultconfigbase",title:"ResultConfigBase interface",description:"@log-more/base &gt; ResultConfigBase",source:"@site/docs/base.resultconfigbase.md",sourceDirName:".",slug:"/base.resultconfigbase",permalink:"/log-more/fr/docs/base.resultconfigbase",editUrl:"https://github.com/sullivanpj/log-more/tree/main/apps/docs/docs/base.resultconfigbase.md",tags:[],version:"current",frontMatter:{id:"base.resultconfigbase",title:"ResultConfigBase interface",hide_title:!0}},s=[{value:"ResultConfigBase interface",id:"resultconfigbase-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base"},"@log-more/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base.resultconfigbase"},"ResultConfigBase")),(0,a.kt)("h2",{id:"resultconfigbase-interface"},"ResultConfigBase interface"),(0,a.kt)("p",null,"Result object configuration parameters to be applied to a specific event type"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ResultConfigBase<TCallback extends CallbackFunction = CallbackFunction> extends EventConfig \n")),(0,a.kt)("b",null,"Extends:")," [EventConfig](/log-more/fr/docs/base.eventconfig)",(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.resultconfigbase.callback"},"callback?")),(0,a.kt)("td",{parentName:"tr",align:null},"TCallback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," This function is user-defined, and will be called when a specified result is called")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-more/fr/docs/base.resultconfigbase.throwonevent"},"throwOnEvent?")),(0,a.kt)("td",{parentName:"tr",align:null},"unknown ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An object that is thrown if the ",(0,a.kt)("code",null,"Result")," occurs. If nothing is provided, nothing will be thrown.")))))}u.isMDXComponent=!0}}]);