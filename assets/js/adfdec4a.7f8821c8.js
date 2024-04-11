"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71970],{28305:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(24246),c=s(71670);const o={},t="Interface: CustomPick<T>",r={id:"interfaces/CustomPick",title:"Interface: CustomPick\\<T\\>",description:"A concrete CustomPick to let the user pick an item from a list of items of type T.",source:"@site/api/interfaces/CustomPick.md",sourceDirName:"interfaces",slug:"/interfaces/CustomPick",permalink:"/api/interfaces/CustomPick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: ContainerStatsInfo",permalink:"/api/interfaces/ContainerStatsInfo"},next:{title:"Interface: CustomPickItem",permalink:"/api/interfaces/CustomPickItem"}},d={},a=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"canSelectMany",id:"canselectmany",level:3},{value:"Source",id:"source",level:4},{value:"description?",id:"description",level:3},{value:"Source",id:"source-1",level:4},{value:"hideItemSections",id:"hideitemsections",level:3},{value:"Source",id:"source-2",level:4},{value:"icon?",id:"icon",level:3},{value:"Source",id:"source-3",level:4},{value:"items",id:"items",level:3},{value:"Source",id:"source-4",level:4},{value:"minHeight?",id:"minheight",level:3},{value:"Source",id:"source-5",level:4},{value:"onDidConfirmSelection",id:"ondidconfirmselection",level:3},{value:"Source",id:"source-6",level:4},{value:"onDidHide",id:"ondidhide",level:3},{value:"Source",id:"source-7",level:4},{value:"title?",id:"title",level:3},{value:"Source",id:"source-8",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-9",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-10",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-11",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-custompickt",children:"Interface: CustomPick<T>"}),"\n",(0,i.jsx)(n.p,{children:"A concrete CustomPick to let the user pick an item from a list of items of type T.\nThe items are rendered using a custom UI."}),"\n",(0,i.jsx)(n.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"T"})," extends ",(0,i.jsx)(n.a,{href:"/api/interfaces/CustomPickItem",children:(0,i.jsx)(n.code,{children:"CustomPickItem"})})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"canselectmany",children:"canSelectMany"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"canSelectMany"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If multiple items can be selected at the same time. Defaults to false."}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1113",children:"packages/extension-api/src/extension-api.d.ts:1113"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"description"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional human-readable string which is rendered less prominent in a separate line."}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1101",children:"packages/extension-api/src/extension-api.d.ts:1101"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hideitemsections",children:"hideItemSections"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"hideItemSections"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the additional sections of an item should be hidden by default when the dialog opens up.\nThe user can still open them by clicking on the 'show more' button.\nDefaults to false."}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1119",children:"packages/extension-api/src/extension-api.d.ts:1119"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"icon"}),": ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional base64 PNG image"}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1105",children:"packages/extension-api/src/extension-api.d.ts:1105"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"items",children:"items"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"items"}),": ",(0,i.jsx)(n.code,{children:"T"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Items to pick from. This can be read and updated by the extension."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1109",children:"packages/extension-api/src/extension-api.d.ts:1109"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"minheight",children:"minHeight?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"minHeight"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When a custompick is closed (the sections are hidden) it is possible to set a minimum height so to force different items to have the same height.\nIt must be set using pixels or percentage (e.g 100px or 50%)\nUse it carefully as it could break the layout."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1125",children:"packages/extension-api/src/extension-api.d.ts:1125"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondidconfirmselection",children:"onDidConfirmSelection"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"readonly"})})," ",(0,i.jsx)(n.strong,{children:"onDidConfirmSelection"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"< ",(0,i.jsx)(n.code,{children:"number"}),"[] >"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An event signaling when the user indicated confirmation of the selected item(s) index(es)."}),"\n",(0,i.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1129",children:"packages/extension-api/src/extension-api.d.ts:1129"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondidhide",children:"onDidHide"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"readonly"})})," ",(0,i.jsx)(n.strong,{children:"onDidHide"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"< ",(0,i.jsx)(n.code,{children:"void"})," >"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An event signaling when this input UI is hidden."}),"\n",(0,i.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1133",children:"packages/extension-api/src/extension-api.d.ts:1133"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"title"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional human-readable string which is rendered prominent."}),"\n",(0,i.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1097",children:"packages/extension-api/src/extension-api.d.ts:1097"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,i.jsx)(n.a,{href:"/api/interfaces/CustomPick#hide",children:"CustomPick.hide"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1147",children:"packages/extension-api/src/extension-api.d.ts:1147"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"hide"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hides the custom pick."}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-10",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1141",children:"packages/extension-api/src/extension-api.d.ts:1141"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"show"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Shows the custom pick."}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"source-11",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/107ea417125ef7f4459af3fbc193350a3a24615d/packages/extension-api/src/extension-api.d.ts#L1137",children:"packages/extension-api/src/extension-api.d.ts:1137"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var i=s(27378);const c={},o=i.createContext(c);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);