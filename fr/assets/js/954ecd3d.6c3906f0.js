"use strict";(globalThis.webpackChunklog_more=globalThis.webpackChunklog_more||[]).push([[1390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=g(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7655:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"getting-started",title:"Getting Started",hide_title:!1,tags:["learning","getting started"]},i="Getting Started",l={unversionedId:"learning/getting-started",id:"learning/getting-started",title:"Getting Started",description:"After installing log-more in your application, you're now ready to get started using all of the great features available in the package.",source:"@site/docs/learning/getting-started.md",sourceDirName:"learning",slug:"/learning/getting-started",permalink:"/log-more/fr/docs/learning/getting-started",editUrl:"https://github.com/sullivanpj/log-more/tree/main/apps/docs/docs/learning/getting-started.md",tags:[{label:"learning",permalink:"/log-more/fr/docs/tags/learning"},{label:"getting started",permalink:"/log-more/fr/docs/tags/getting-started"}],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,tags:["learning","getting started"]},sidebar:"learningSidebar",previous:{title:"Installation",permalink:"/log-more/fr/docs/learning/installation"},next:{title:"Result Handler",permalink:"/log-more/fr/docs/learning/result-handler"}},s=[{value:"Returning Results",id:"returning-results",children:[],level:2},{value:"Formatting Reports",id:"formatting-reports",children:[],level:2},{value:"Capturing Events",id:"capturing-events",children:[],level:2}],g={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"After installing ",(0,o.kt)("inlineCode",{parentName:"p"},"log-more")," in your application, you're now ready to get started using all of the great features available in the package."),(0,o.kt)("h2",{id:"returning-results"},"Returning Results"),(0,o.kt)("p",null,"Log-More's ",(0,o.kt)("a",{parentName:"p",href:"/log-more/fr/docs/log-more.result"},"Result")," class provides a standard way to handle returning errors (or any other value) from a function or external process. By using the Result object as your go-to method of returning from a function, you are organizing all of your code's function types, keeping to a consistent and predicable error handling principle, and enabling your code to use the rest of the Log-More event handling flow."),(0,o.kt)("h2",{id:"formatting-reports"},"Formatting Reports"),(0,o.kt)("p",null,"Log-More will first format ",(0,o.kt)("a",{parentName:"p",href:"/log-more/fr/docs/log-more.result"},"Result")," objects using a method provided by the user (or the default methods if not provided), so that the data is in a form that can be captured to the logs. Log-More also has various build-in methods of formatting this data that the user can select from."),(0,o.kt)("p",null,"This formatted data will be stored in a ",(0,o.kt)("a",{parentName:"p",href:"/log-more/fr/docs/log-more.report"},"Report")," object."),(0,o.kt)("h2",{id:"capturing-events"},"Capturing Events"),(0,o.kt)("p",null,"Logging in JavaScript/TypeScript can unfortunately tend to be much more difficult than just writing a string to the console. Log-More has plenty of built in functionality to support various methods of capturing this data to the source of your choice - but if you just want to write the methods to the console, Log-More has you covered there too!"))}u.isMDXComponent=!0}}]);