"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28917],{86477:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(62540),t=s(43023);const r={},c="Interface: ExtensionContext",o={id:"interfaces/ExtensionContext",title:"Interface: ExtensionContext",description:"Properties",source:"@site/api/interfaces/ExtensionContext.md",sourceDirName:"interfaces",slug:"/interfaces/ExtensionContext",permalink:"/api/interfaces/ExtensionContext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Extension",permalink:"/api/interfaces/Extension"},next:{title:"FileSystemWatcher",permalink:"/api/interfaces/FileSystemWatcher"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"extensionUri",id:"extensionuri",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"secrets",id:"secrets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"storagePath",id:"storagepath",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"subscriptions",id:"subscriptions",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-extensioncontext",children:"Interface: ExtensionContext"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"extensionuri",children:"extensionUri"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"extensionUri"}),": ",(0,i.jsx)(n.a,{href:"/api/classes/Uri",children:(0,i.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The uri of the directory containing the extension."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/b60cc6298f2419e83ae5f2adb6d1c388004c79f1/packages/extension-api/src/extension-api.d.ts#L197",children:"packages/extension-api/src/extension-api.d.ts:197"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"secrets",children:"secrets"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"secrets"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/SecretStorage",children:(0,i.jsx)(n.code,{children:"SecretStorage"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A storage utility for secrets. Secrets are persisted across reloads."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/b60cc6298f2419e83ae5f2adb6d1c388004c79f1/packages/extension-api/src/extension-api.d.ts#L202",children:"packages/extension-api/src/extension-api.d.ts:202"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"storagepath",children:"storagePath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"storagePath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An absolute file path in which the extension can store state.\nThe directory might not exist on disk and creation is\nup to the extension."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/b60cc6298f2419e83ae5f2adb6d1c388004c79f1/packages/extension-api/src/extension-api.d.ts#L192",children:"packages/extension-api/src/extension-api.d.ts:192"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"subscriptions",children:"subscriptions"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"subscriptions"}),": ",(0,i.jsx)(n.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/b60cc6298f2419e83ae5f2adb6d1c388004c79f1/packages/extension-api/src/extension-api.d.ts#L185",children:"packages/extension-api/src/extension-api.d.ts:185"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(63696);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);