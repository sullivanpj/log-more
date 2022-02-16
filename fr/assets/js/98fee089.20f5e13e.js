"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9286:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"base.formatbase",title:"formatBase variable",hide_title:!0},i=void 0,l={unversionedId:"base.formatbase",id:"base.formatbase",title:"formatBase variable",description:"@log-right/base &gt; formatBase",source:"@site/docs/base.formatbase.md",sourceDirName:".",slug:"/base.formatbase",permalink:"/log-right/fr/docs/base.formatbase",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.formatbase.md",tags:[],version:"current",frontMatter:{id:"base.formatbase",title:"formatBase variable",hide_title:!0}},s=[{value:"formatBase variable",id:"formatbase-variable",children:[],level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base"},"@log-right/base")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/log-right/fr/docs/base.formatbase"},"formatBase")),(0,n.kt)("h2",{id:"formatbase-variable"},"formatBase variable"),(0,n.kt)("p",null,"A helper function that will handle converting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Result")," objects returned from a failed process into a ",(0,n.kt)("inlineCode",{parentName:"p"},"Report")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"formatBase: <TFormatted extends FormattedData = FormattedData>(result: IResult) => IResult<Report<TFormatted>, any, any>\n")))}p.isMDXComponent=!0}}]);