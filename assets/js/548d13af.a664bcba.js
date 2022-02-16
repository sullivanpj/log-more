"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[7231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,d=u["".concat(s,".").concat(v)]||u[v]||c[v]||i;return r?n.createElement(d,o(o({ref:t},y),{},{components:r})):n.createElement(d,o({ref:t},y))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},452:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>y});var n=r(7462),a=(r(7294),r(3905));const i={id:"base.severitytypes",title:"SeverityTypes variable",hide_title:!0},o=void 0,l={unversionedId:"base.severitytypes",id:"base.severitytypes",title:"SeverityTypes variable",description:"@log-right/base &gt; SeverityTypes",source:"@site/docs/base.severitytypes.md",sourceDirName:".",slug:"/base.severitytypes",permalink:"/log-right/docs/base.severitytypes",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/base.severitytypes.md",tags:[],version:"current",frontMatter:{id:"base.severitytypes",title:"SeverityTypes variable",hide_title:!0}},s=[{value:"SeverityTypes variable",id:"severitytypes-variable",children:[],level:2}],p={toc:s};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/base"},"@log-right/base")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/base.severitytypes"},"SeverityTypes")),(0,a.kt)("h2",{id:"severitytypes-variable"},"SeverityTypes variable"),(0,a.kt)("p",null,"The potential values of the severity field. Higher values indicate a more damaging event. If the severity is NONE (or 0), the condition will never be be met. If the severity is CRITICAL (or 99), the condition will always be be met."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"SeverityTypes: {\n    readonly NONE: 0;\n    readonly ONE: 1;\n    readonly TWO: 2;\n    readonly THREE: 3;\n    readonly FOUR: 4;\n    readonly FIVE: 5;\n    readonly SIX: 6;\n    readonly SEVEN: 7;\n    readonly EIGHT: 8;\n    readonly NINE: 9;\n    readonly TEN: 10;\n    readonly CRITICAL: 99;\n}\n")))}y.isMDXComponent=!0}}]);