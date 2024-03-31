"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46103],{83227:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(27378);var s=t(40624),i=t(1123),a=t(75484),o=t(70412),r=t(95988),l=t(25532),c=t(99213),d=t(14582),u=t(24246);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.C)(),{title:t,description:s,date:a,tags:r,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:t,description:s,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=t(17061),f=t(33873);function v(e){let{sidebar:n,children:t}=e;const{metadata:s,toc:i}=(0,o.C)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:g}=s,{hide_table_of_contents:v,toc_min_heading_level:x,toc_max_heading_level:p}=d;return(0,u.jsxs)(r.Z,{sidebar:n,toc:!v&&i.length>0?(0,u.jsx)(h.Z,{toc:i,minHeadingLevel:x,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(l.Z,{children:t}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function x(e){const n=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,s.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},17061:(e,n,t)=>{t.d(n,{Z:()=>c});t(27378);var s=t(40624),i=t(36033);const a={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var o=t(24246);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.Z)(a.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(i.Z,{...t,linkClassName:r,linkActiveClassName:l})})}},36033:(e,n,t)=>{t.d(n,{Z:()=>f});var s=t(27378),i=t(20624);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):s.push(i)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>r(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let i=n;i<=t;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(36641),m=t(24246);function g(e){let{toc:n,className:t,linkClassName:s,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const h=s.memo(g);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.L)(),v=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,s.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:x}}),[r,l,v,x])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:r,...g})}},33873:(e,n,t)=>{t.d(n,{Z:()=>g});t(27378);var s=t(40624),i=t(99213),a=t(7092),o=t(24246);function r(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(75484),u=t(458);function m(e){let{className:n}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(r,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},85978:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(10610),i=(t(27378),t(24246));function a(e){const n={...e};return n?.code?.length>2&&("$ "===n.code.substring(0,2)||"# "===n.code.substring(0,2)||"> "===n.code.substring(0,2))&&(n.code=n.code.substring(2)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{...n})})}},35654:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(30537),i=t(9928),a=t(19374),o=t(92739),r=t(13067);s.vI.add(i.vnX,a.mRB);const l={...r.Z,Icon:o.G}}}]);