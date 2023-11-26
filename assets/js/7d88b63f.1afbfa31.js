"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7741],{99152:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(24246),i=o(71670);const s={sidebar_position:100},r="Troubleshooting OpenShift Local",c={id:"troubleshooting/troubleshooting-openshift-local",title:"Troubleshooting OpenShift Local",description:"You can find here troubleshooting help for issues specific to OpenShift Local.",source:"@site/docs/troubleshooting/troubleshooting-openshift-local.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-openshift-local",permalink:"/docs/troubleshooting/troubleshooting-openshift-local",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-openshift-local.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"mySidebar",previous:{title:"Troubleshooting Podman on Linux",permalink:"/docs/troubleshooting/troubleshooting-podman-on-linux"}},l={},a=[];function h(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"troubleshooting-openshift-local",children:"Troubleshooting OpenShift Local"}),"\n",(0,t.jsx)(n.p,{children:"You can find here troubleshooting help for issues specific to OpenShift Local."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To verify that your user can run ",(0,t.jsx)(n.code,{children:"crc"}),", verify that the ",(0,t.jsx)(n.code,{children:"crc"})," binary is available in the user PATH (",(0,t.jsx)(n.code,{children:"/usr/local/bin/crc"})," on macOS and Linux)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To verify that the host is ready to run OpenShift Local, in a terminal, run this command and verify the output has no errors:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ crc setup --check-only\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"INFO Using bundle path <bundle_path>\nINFO Checking if running as non-root\nINFO Checking if running inside WSL2\nINFO Checking if crc-admin-helper executable is cached\ncrc-admin-helper executable is not cached\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To verify the configured preset, in a terminal, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ crc config get preset\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var t=o(27378);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);