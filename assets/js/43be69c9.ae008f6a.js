"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76228],{58886:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"interfaces/QuickPickItem","title":"Interface: QuickPickItem","description":"Defined in1508","source":"@site/api/interfaces/QuickPickItem.md","sourceDirName":"interfaces","slug":"/interfaces/QuickPickItem","permalink":"/api/interfaces/QuickPickItem","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"QuickInputButton","permalink":"/api/interfaces/QuickInputButton"},"next":{"title":"QuickPickOptions","permalink":"/api/interfaces/QuickPickOptions"}}');var t=n(62540),c=n(43023);const r={},a="Interface: QuickPickItem",o={},d=[{value:"Properties",id:"properties",level:2},{value:"alwaysShow?",id:"alwaysshow",level:3},{value:"buttons?",id:"buttons",level:3},{value:"description?",id:"description",level:3},{value:"detail?",id:"detail",level:3},{value:"kind?",id:"kind",level:3},{value:"label",id:"label",level:3},{value:"picked?",id:"picked",level:3},{value:"See",id:"see",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"interface-quickpickitem",children:"Interface: QuickPickItem"})}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1508",children:"packages/extension-api/src/extension-api.d.ts:1508"})]}),"\n",(0,t.jsx)(i.p,{children:"Represents an item that can be selected from\na list of items."}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(i.h3,{id:"alwaysshow",children:"alwaysShow?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"alwaysShow"}),": ",(0,t.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1555",children:"packages/extension-api/src/extension-api.d.ts:1555"})]}),"\n",(0,t.jsx)(i.p,{children:"Always show this item."}),"\n",(0,t.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"buttons",children:"buttons?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"buttons"}),": readonly ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickInputButton",children:(0,t.jsx)(i.code,{children:"QuickInputButton"})}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1565",children:"packages/extension-api/src/extension-api.d.ts:1565"})]}),"\n",(0,t.jsxs)(i.p,{children:["Optional buttons that will be rendered on this particular item. These buttons will trigger\nan QuickPickItemButtonEvent when clicked. Buttons are only rendered when using a quickpick\ncreated by the window.createQuickPick createQuickPick() API. Buttons are not rendered when using\nthe ",(0,t.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API."]}),"\n",(0,t.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"description",children:"description?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"description"}),": ",(0,t.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1527",children:"packages/extension-api/src/extension-api.d.ts:1527"})]}),"\n",(0,t.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in the same line. Supports rendering of\nThemeIcon theme icons via the ",(0,t.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"detail",children:"detail?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"detail"}),": ",(0,t.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1535",children:"packages/extension-api/src/extension-api.d.ts:1535"})]}),"\n",(0,t.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in a separate line. Supports rendering of\nThemeIcon theme icons via the ",(0,t.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"kind",children:"kind?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"kind"}),": ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind",children:(0,t.jsx)(i.code,{children:"QuickPickItemKind"})})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1519",children:"packages/extension-api/src/extension-api.d.ts:1519"})]}),"\n",(0,t.jsxs)(i.p,{children:["The kind of QuickPickItem that will determine how this item is rendered in the quick pick. When not specified,\nthe default is ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#default",children:"QuickPickItemKind.Default"}),"."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"label",children:"label"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"label"}),": ",(0,t.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1513",children:"packages/extension-api/src/extension-api.d.ts:1513"})]}),"\n",(0,t.jsxs)(i.p,{children:["A human-readable string which is rendered prominent. Supports rendering of ThemeIcon theme icons via\nthe ",(0,t.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"picked",children:"picked?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"optional"})," ",(0,t.jsx)(i.strong,{children:"picked"}),": ",(0,t.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Defined in: ",(0,t.jsx)(i.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/55e7e111324e53134e37f0c5e80bf684341d2eba/packages/extension-api/src/extension-api.d.ts#L1548",children:"packages/extension-api/src/extension-api.d.ts:1548"})]}),"\n",(0,t.jsxs)(i.p,{children:["Optional flag indicating if this item is picked initially. This is only honored when using\nthe ",(0,t.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API. To do the same thing with\nthe window.createQuickPick createQuickPick() API, simply set the QuickPick.selectedItems\nto the items you want picked initially.\n(",(0,t.jsx)(i.em,{children:"Note:"})," This is only honored when the picker allows multiple selections.)"]}),"\n",(0,t.jsx)(i.h4,{id:"see",children:"See"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickOptions#canpickmany",children:"QuickPickOptions.canPickMany"})}),"\n",(0,t.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,t.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,t.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]})]})}function l(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(63696);const t={},c=s.createContext(t);function r(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);