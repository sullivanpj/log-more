"use strict";(globalThis.webpackChunklog_more=globalThis.webpackChunklog_more||[]).push([[706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),u=n,b=f["".concat(s,".").concat(u)]||f[u]||m[u]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9286:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>s,default:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"base.formatbase",title:"formatBase variable",hide_title:!0},l=void 0,i={unversionedId:"base.formatbase",id:"base.formatbase",title:"formatBase variable",description:"@log-more/base &gt; formatBase",source:"@site/docs/base.formatbase.md",sourceDirName:".",slug:"/base.formatbase",permalink:"/log-more/fr/docs/base.formatbase",editUrl:"https://github.com/sullivanpj/log-more/tree/main/apps/docs/docs/base.formatbase.md",tags:[],version:"current",frontMatter:{id:"base.formatbase",title:"formatBase variable",hide_title:!0}},s=[{value:"formatBase variable",id:"formatbase-variable",children:[],level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base"},"@log-more/base")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/log-more/fr/docs/base.formatbase"},"formatBase")),(0,n.kt)("h2",{id:"formatbase-variable"},"formatBase variable"),(0,n.kt)("p",null,"A helper function that will handle converting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Result")," objects returned from a failed process into a ",(0,n.kt)("inlineCode",{parentName:"p"},"Report")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"formatBase: <TFormatted extends FormattedData = FormattedData>(result: IResult) => IResult<Report<TFormatted>, any, any>\n")))}p.isMDXComponent=!0}}]);