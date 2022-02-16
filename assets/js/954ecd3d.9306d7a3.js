"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[1390],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>p});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var g=n.createContext({}),s=function(t){var e=n.useContext(g),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(g.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,g=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(r),p=i,h=d["".concat(g,".").concat(p)]||d[p]||c[p]||a;return r?n.createElement(h,o(o({ref:e},u),{},{components:r})):n.createElement(h,o({ref:e},u))}));function p(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var g in e)hasOwnProperty.call(e,g)&&(l[g]=e[g]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7655:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>l,toc:()=>g,default:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={id:"getting-started",title:"Getting Started",hide_title:!1,tags:["learning","getting started"]},o="Getting Started",l={unversionedId:"learning/getting-started",id:"learning/getting-started",title:"Getting Started",description:"After installing log-right in your application, you're now ready to get started using all of the great features available in the package.",source:"@site/docs/learning/getting-started.md",sourceDirName:"learning",slug:"/learning/getting-started",permalink:"/log-right/docs/learning/getting-started",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/learning/getting-started.md",tags:[{label:"learning",permalink:"/log-right/docs/tags/learning"},{label:"getting started",permalink:"/log-right/docs/tags/getting-started"}],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,tags:["learning","getting started"]},sidebar:"learningSidebar",previous:{title:"Installation",permalink:"/log-right/docs/learning/installation"},next:{title:"Result Handler",permalink:"/log-right/docs/learning/result-handler"}},g=[{value:"Returning Results",id:"returning-results",children:[],level:2},{value:"Formatting Reports",id:"formatting-reports",children:[],level:2},{value:"Capturing Events",id:"capturing-events",children:[],level:2}],s={toc:g};function u(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"After installing ",(0,i.kt)("inlineCode",{parentName:"p"},"log-right")," in your application, you're now ready to get started using all of the great features available in the package."),(0,i.kt)("h2",{id:"returning-results"},"Returning Results"),(0,i.kt)("p",null,"Log-Right's ",(0,i.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.result"},"Result")," class provides a standard way to handle returning errors (or any other value) from a function or external process. By using the Result object as your go-to method of returning from a function, you are organizing all of your code's function types, keeping to a consistent and predicable error handling principle, and enabling your code to use the rest of the Log-Right event handling flow."),(0,i.kt)("h2",{id:"formatting-reports"},"Formatting Reports"),(0,i.kt)("p",null,"Log-Right will first format ",(0,i.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.result"},"Result")," objects using a method provided by the user (or the default methods if not provided), so that the data is in a form that can be captured to the logs. Log-Right also has various build-in methods of formatting this data that the user can select from."),(0,i.kt)("p",null,"This formatted data will be stored in a ",(0,i.kt)("a",{parentName:"p",href:"/log-right/docs/log-right.report"},"Report")," object."),(0,i.kt)("h2",{id:"capturing-events"},"Capturing Events"),(0,i.kt)("p",null,"Logging in JavaScript/TypeScript can unfortunately tend to be much more difficult than just writing a string to the console. Log-Right has plenty of built in functionality to support various methods of capturing this data to the source of your choice - but if you just want to write the methods to the console, Log-Right has you covered there too!"))}u.isMDXComponent=!0}}]);