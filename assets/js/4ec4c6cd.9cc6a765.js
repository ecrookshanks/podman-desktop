"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41697],{8958:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"namespaces/commands/index","title":"commands","description":"The commands module provides functions to register and execute commands","source":"@site/api/namespaces/commands/index.md","sourceDirName":"namespaces/commands","slug":"/namespaces/commands/","permalink":"/api/namespaces/commands/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"onDidChange","permalink":"/api/namespaces/cli/functions/onDidChange"},"next":{"title":"executeCommand","permalink":"/api/namespaces/commands/functions/executeCommand"}}');var t=s(62540),o=s(43023);const i={},c="commands",m={},r=[{value:"Example",id:"example",level:2},{value:"Functions",id:"functions",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"commands",children:"commands"})}),"\n",(0,t.jsx)(n.p,{children:"The commands module provides functions to register and execute commands\nExisting commands available for extensions to use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pullImage"}),": uses Podman Desktop's UI pull image behavior. This command will create a visible task to show the progress of the pullImage action with the option to include a task action.\nIt uses the same parameters as the original pullImage function, in addition to having ",(0,t.jsx)(n.code,{children:"taskActionName: string"})," and ",(0,t.jsx)(n.code,{children:"taskActionCallback: () => void"})," as parameters to create a task action (optional)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import * as api from '@podman-desktop/api';\n\nexport async function activate(extensionContext: api.ExtensionContext): Promise<void> {\n\n  const myCommand = api.commands.registerCommand(\n    'extension-name.my-command',\n    (arg1: string, arg2: number) => {\n      console.log('my-command executed with', arg1, arg2);\n    },\n  );\n\n  extensionContext.subscriptions.push(myCommand);\n\n  // [...]\n\n  api.commands.executeCommand('extension-name.my-command', 'a-string', 1001);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/namespaces/commands/functions/executeCommand",children:"executeCommand"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/namespaces/commands/functions/registerCommand",children:"registerCommand"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(63696);const t={},o=a.createContext(t);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);