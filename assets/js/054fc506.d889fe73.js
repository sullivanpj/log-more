"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[2876],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(r),g=a,c=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return r?n.createElement(c,o(o({ref:e},d),{},{components:r})):n.createElement(c,o({ref:e},d))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2793:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>i,toc:()=>u,default:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={id:"log-more.result",title:"Result class",hide_title:!0},o=void 0,i={unversionedId:"log-more.result",id:"log-more.result",title:"Result class",description:"log-more &gt; Result",source:"@site/docs/log-more.result.md",sourceDirName:".",slug:"/log-more.result",permalink:"/log-right/docs/log-more.result",editUrl:"https://github.com/sullivanpj/log-right/tree/main/apps/docs/docs/log-more.result.md",tags:[],version:"current",frontMatter:{id:"log-more.result",title:"Result class",hide_title:!0}},u=[{value:"Result class",id:"result-class",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],s={toc:u};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/log-more"},"log-more")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/log-right/docs/log-more.result"},"Result")),(0,a.kt)("h2",{id:"result-class"},"Result class"),(0,a.kt)("p",null,"A class used to handle the result of a function call or sub-process. Functions/process should return back this object so that the calling function can evaluate it's success."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Result<TReturned = any | undefined> extends ResultBase implements IResult<TReturned> \n")),(0,a.kt)("b",null,"Extends:")," ResultBase",(0,a.kt)("b",null,"Implements:")," IResult<TReturned>",(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result._constructor_"},"(constructor)(params)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,a.kt)("code",null,"Result")," class")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.callback"},"callback?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"CallbackFunction"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A field containing any values returned from the function call")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.context"},"context?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"unknown"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A free-format field that will be added to all IEvent objects (to be used in custom logic added by the user).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.create"},"create")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"<","TReturned","_","1 = any",">","(params: string ","|"," Error ","|"," Partial","<","ResultBaseParams","<","TReturned","_","1",">",">",") =",">"," ",(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result"},"Result"),"<","TReturned","_","1",">"),(0,a.kt)("td",{parentName:"tr",align:null},"A helper function to create a result object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.data"},"data?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"TReturned"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A field containing any values returned from the function call")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.details"},"details?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string that includes additional information about the event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.id"},"id")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A unique string that can be used to identify the event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.isvalidated"},"isValidated?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An indicator specifying the last results of isValidated. If it has not been validated yet, return null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.severity"},"severity")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Severity"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines the severity level of the event (a number 0 through 10). This field is used to determine how the system should respond to an event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.source"},"source?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string representing the source that initiated the event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.success"},"success")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"<","TReturned","_","1 = any",">","(data?: TReturned","_","1 ","|"," undefined, type?: EventType ","|"," undefined) =",">"," ",(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result"},"Result"),"<","TReturned","_","1",">"),(0,a.kt)("td",{parentName:"tr",align:null},"A helper function to return back a success result")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.type"},"type")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"EventType"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of the event (values can be defined by the user)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.userid"},"userId?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A string that can be used to represent the current user performing actions in the application/triggering processes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.validate"},"validate")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"() =",">"," boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"A function call to validate if the result is a success or failure")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.warning"},"warning")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"<","TReturned","_","1 = any",">","(message?: any, data?: TReturned","_","1 ","|"," undefined, type?: EventType ","|"," undefined) =",">"," ",(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result"},"Result"),"<","TReturned","_","1",">"),(0,a.kt)("td",{parentName:"tr",align:null},"A helper function to return back an warning result")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/log-right/docs/log-more.result.error"},"error(error, type)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"A helper function to return back an error result")))))}d.isMDXComponent=!0}}]);