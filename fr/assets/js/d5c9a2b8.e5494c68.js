"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[8532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||g[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},969:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>a,toc:()=>c,default:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={id:"log-right.resultconfig",title:"ResultConfig type",hide_title:!0},i=void 0,a={unversionedId:"log-right.resultconfig",id:"log-right.resultconfig",title:"ResultConfig type",description:"log-right &gt; ResultConfig",source:"@site/docs/log-right.resultconfig.md",sourceDirName:".",slug:"/log-right.resultconfig",permalink:"/log-right/fr/docs/log-right.resultconfig",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-right.resultconfig.md",tags:[],version:"current",frontMatter:{id:"log-right.resultconfig",title:"ResultConfig type",hide_title:!0}},c=[{value:"ResultConfig type",id:"resultconfig-type",children:[],level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right"},"log-right")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/fr/docs/log-right.resultconfig"},"ResultConfig")),(0,o.kt)("h2",{id:"resultconfig-type"},"ResultConfig type"),(0,o.kt)("p",null,"Result object configuration parameters to be applied to a specific event type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ResultConfig<TCallback extends CallbackFunction = CallbackFunction> = ResultConfigBase<TCallback>;\n")))}p.isMDXComponent=!0}}]);