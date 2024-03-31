"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64891],{47516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(24246),o=s(71670);const t={},r="Interface: InputBoxOptions",c={id:"interfaces/InputBoxOptions",title:"Interface: InputBoxOptions",description:"Options to configure the behavior of the input box UI.",source:"@site/api/interfaces/InputBoxOptions.md",sourceDirName:"interfaces",slug:"/interfaces/InputBoxOptions",permalink:"/api/interfaces/InputBoxOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: ImageInspectInfo",permalink:"/api/interfaces/ImageInspectInfo"},next:{title:"Interface: InputBoxValidationMessage",permalink:"/api/interfaces/InputBoxValidationMessage"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"ignoreFocusOut?",id:"ignorefocusout",level:3},{value:"Source",id:"source",level:4},{value:"markdownDescription?",id:"markdowndescription",level:3},{value:"Source",id:"source-1",level:4},{value:"multiline?",id:"multiline",level:3},{value:"Source",id:"source-2",level:4},{value:"password?",id:"password",level:3},{value:"Source",id:"source-3",level:4},{value:"placeHolder?",id:"placeholder",level:3},{value:"Source",id:"source-4",level:4},{value:"prompt?",id:"prompt",level:3},{value:"Source",id:"source-5",level:4},{value:"title?",id:"title",level:3},{value:"Source",id:"source-6",level:4},{value:"value?",id:"value",level:3},{value:"Source",id:"source-7",level:4},{value:"valueSelection?",id:"valueselection",level:3},{value:"Source",id:"source-8",level:4},{value:"Methods",id:"methods",level:2},{value:"validateInput()?",id:"validateinput",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-9",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-inputboxoptions",children:"Interface: InputBoxOptions"}),"\n",(0,i.jsx)(n.p,{children:"Options to configure the behavior of the input box UI."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"ignorefocusout",children:"ignoreFocusOut?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"ignoreFocusOut"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set to ",(0,i.jsx)(n.code,{children:"true"})," to keep the input box open when focus moves to another part of the editor or to another window.\nThis setting is ignored on iPad and is always false."]}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L870",children:"packages/extension-api/src/extension-api.d.ts:870"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"markdowndescription",children:"markdownDescription?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"markdownDescription"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A description of the field to be show (Markdown format)"}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L854",children:"packages/extension-api/src/extension-api.d.ts:854"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"multiline",children:"multiline?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"multiline"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set to ",(0,i.jsx)(n.code,{children:"true"})," when value represents a multi line content."]}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L875",children:"packages/extension-api/src/extension-api.d.ts:875"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"password",children:"password?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"password"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Controls if a password input is shown. Password input hides the typed text."}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L864",children:"packages/extension-api/src/extension-api.d.ts:864"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"placeholder",children:"placeHolder?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"placeHolder"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional string to show as placeholder in the input box to guide the user what to type."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L859",children:"packages/extension-api/src/extension-api.d.ts:859"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"prompt",children:"prompt?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"prompt"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The text to display underneath the input box."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L849",children:"packages/extension-api/src/extension-api.d.ts:849"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"title"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional string that represents the title of the input box."}),"\n",(0,i.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L831",children:"packages/extension-api/src/extension-api.d.ts:831"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"value",children:"value?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"value"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The value to pre-fill in the input box."}),"\n",(0,i.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L836",children:"packages/extension-api/src/extension-api.d.ts:836"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"valueselection",children:"valueSelection?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"valueSelection"}),": [",(0,i.jsx)(n.code,{children:"number"}),", ",(0,i.jsx)(n.code,{children:"number"}),"]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Selection of the pre-filled ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxOptions#value",children:(0,i.jsx)(n.code,{children:"value"})}),". Defined as tuple of two number where the\nfirst is the inclusive start index and the second the exclusive end index. When ",(0,i.jsx)(n.code,{children:"undefined"})," the whole\npre-filled value will be selected, when empty (start equals end) only the cursor will be set,\notherwise the defined range will be selected."]}),"\n",(0,i.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L844",children:"packages/extension-api/src/extension-api.d.ts:844"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"validateinput",children:"validateInput()?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"validateInput"}),"(",(0,i.jsx)(n.code,{children:"value"}),"): ",(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxValidationMessage",children:(0,i.jsx)(n.code,{children:"InputBoxValidationMessage"})})," | ",(0,i.jsx)(n.code,{children:"Promise"}),"< ",(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxValidationMessage",children:(0,i.jsx)(n.code,{children:"InputBoxValidationMessage"})})," >"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An optional function that will be called to validate input and to give a hint\nto the user."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"value"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"The current value of the input box."}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxValidationMessage",children:(0,i.jsx)(n.code,{children:"InputBoxValidationMessage"})})," | ",(0,i.jsx)(n.code,{children:"Promise"}),"< ",(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxValidationMessage",children:(0,i.jsx)(n.code,{children:"InputBoxValidationMessage"})})," >"]}),"\n",(0,i.jsxs)(n.p,{children:["Either a human-readable string which is presented as an error message or an ",(0,i.jsx)(n.a,{href:"/api/interfaces/InputBoxValidationMessage",children:"InputBoxValidationMessage"}),"\nwhich can provide a specific message severity. Return ",(0,i.jsx)(n.code,{children:"undefined"}),", ",(0,i.jsx)(n.code,{children:"null"}),", or the empty string when 'value' is valid."]}),"\n",(0,i.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/16e8f33/packages/extension-api/src/extension-api.d.ts#L885",children:"packages/extension-api/src/extension-api.d.ts:885"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(27378);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);