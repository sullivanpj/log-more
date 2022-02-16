"use strict";(globalThis.webpackChunklog_right=globalThis.webpackChunklog_right||[]).push([[6103],{9360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7294),l=a(1217),i=a(8665),o=a(8561),s=a(7462),r=a(5999),c=a(1750);const m=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,(0,s.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,(0,s.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))};var g=a(5773),d=a(1575);const p=function(e){const{content:t,sidebar:a}=e,{assets:s,metadata:r}=t,{title:c,description:p,nextItem:v,prevItem:b,date:u,tags:_,authors:h,frontMatter:E}=r,{hide_table_of_contents:N,keywords:f,toc_min_heading_level:k,toc_max_heading_level:C}=E,Z=s.image??E.image;return n.createElement(i.Z,{wrapperClassName:g.kM.wrapper.blogPages,pageClassName:g.kM.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:k,maxHeadingLevel:C}):void 0},n.createElement(l.Z,{title:c,description:p,keywords:f,image:Z},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:u}),h.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:h.map((e=>e.url)).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((e=>e.label)).join(",")})),n.createElement(o.Z,{frontMatter:E,assets:s,metadata:r,isBlogPostPage:!0},n.createElement(t,null)),(v||b)&&n.createElement(m,{nextItem:v,prevItem:b}))}},1750:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(9960);const i=function(e){const{permalink:t,title:a,subLabel:i}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294),i=a(6010),o=a(5002);const s="tableOfContents_cNA8";const r=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),l=a(7294),i=a(5773);function o(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?l.createElement("ul",{className:i?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const d=(0,i.LU)(),p=c??d.tableOfContents.minHeadingLevel,v=m??d.tableOfContents.maxHeadingLevel,b=(0,i.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:v}),u=(0,l.useMemo)((()=>{if(s&&r)return{linkClassName:s,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:v}}),[s,r,p,v]);return(0,i.Si)(u),l.createElement(o,(0,n.Z)({toc:b,className:a,linkClassName:s},g))}}}]);