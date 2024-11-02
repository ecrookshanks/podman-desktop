"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56095],{75220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(62540),s=n(43023);const r={},i="Function: createStatusBarItem()",c={id:"namespaces/window/functions/createStatusBarItem",title:"Function: createStatusBarItem()",description:"createStatusBarItem(alignment?, priority?): StatusBarItem",source:"@site/api/namespaces/window/functions/createStatusBarItem.md",sourceDirName:"namespaces/window/functions",slug:"/namespaces/window/functions/createStatusBarItem",permalink:"/api/namespaces/window/functions/createStatusBarItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"createCustomPick",permalink:"/api/namespaces/window/functions/createCustomPick"},next:{title:"createWebviewPanel",permalink:"/api/namespaces/window/functions/createWebviewPanel"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"function-createstatusbaritem",children:"Function: createStatusBarItem()"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"createStatusBarItem"}),"(",(0,a.jsx)(t.code,{children:"alignment"}),"?, ",(0,a.jsx)(t.code,{children:"priority"}),"?): ",(0,a.jsx)(t.a,{href:"/api/interfaces/StatusBarItem",children:(0,a.jsx)(t.code,{children:"StatusBarItem"})})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Creates a status bar ",(0,a.jsx)(t.a,{href:"/api/interfaces/StatusBarItem",children:"StatusBarItem"})," item."]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.p,{children:["\u2022 ",(0,a.jsx)(t.strong,{children:"alignment?"}),": ",(0,a.jsx)(t.a,{href:"/api/type-aliases/StatusBarAlignment",children:(0,a.jsx)(t.code,{children:"StatusBarAlignment"})})]}),"\n",(0,a.jsx)(t.p,{children:"The alignment of the item."}),"\n",(0,a.jsxs)(t.p,{children:["\u2022 ",(0,a.jsx)(t.strong,{children:"priority?"}),": ",(0,a.jsx)(t.code,{children:"number"})]}),"\n",(0,a.jsx)(t.p,{children:"The priority of the item. Higher values mean more to the left or more to the right."}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/api/interfaces/StatusBarItem",children:(0,a.jsx)(t.code,{children:"StatusBarItem"})})}),"\n",(0,a.jsx)(t.p,{children:"A new status bar item."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import * as api from '@podman-desktop/api';\n\nexport async function activate(extensionContext: api.ExtensionContext): Promise<void> {\n  const statusBarItem = api.window.createStatusBarItem();\n  statusBarItem.text = 'Information';\n  statusBarItem.tooltip = 'A problem occured';\n  statusBarItem.command = 'extension-name.my-command';\n  statusBarItem.iconClass = 'fa fa-exclamation-triangle';\n  extensionContext.subscriptions.push(\n    api.commands.registerCommand('extension-name.my-command', () => { console.log('command executed'); }),\n    statusBarItem,\n  );\n  statusBarItem.show();\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/f3a2a669f3b5d02b538f30fa205b538b26b26842/packages/extension-api/src/extension-api.d.ts#L2236",children:"packages/extension-api/src/extension-api.d.ts:2236"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(63696);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);