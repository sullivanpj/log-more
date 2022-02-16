"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[3497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||v[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7353:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>l,toc:()=>c,default:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={id:"base.eventconfig.severity",title:"EventConfig.severity property",hide_title:!0},a=void 0,l={unversionedId:"base.eventconfig.severity",id:"base.eventconfig.severity",title:"EventConfig.severity property",description:"@log-right/base &gt; EventConfig &gt; severity",source:"@site/docs/base.eventconfig.severity.md",sourceDirName:".",slug:"/base.eventconfig.severity",permalink:"/log-right/docs/base.eventconfig.severity",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.eventconfig.severity.md",tags:[],version:"current",frontMatter:{id:"base.eventconfig.severity",title:"EventConfig.severity property",hide_title:!0}},c=[{value:"EventConfig.severity property",id:"eventconfigseverity-property",children:[],level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/base"},"@log-right/base")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/base.eventconfig"},"EventConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/log-right/docs/base.eventconfig.severity"},"severity")),(0,o.kt)("h2",{id:"eventconfigseverity-property"},"EventConfig.severity property"),(0,o.kt)("p",null,"The severity of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IEvent")," - this value will be used to determine if we should considered the event occurrence a: - Success (event will be considered valid, no error handler action should be taken, and DO NOT report event) - Alert (event will be considered valid, and no error handler action should be taken, but report event) - Error (event will be considered invalid, error handler action will be taken, and report event)"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"severity: Severity;\n")))}p.isMDXComponent=!0}}]);