"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90125],{38654:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(24246),t=s(71670);const a={},o="Function: listImages()",r={id:"namespaces/containerEngine/functions/listImages",title:"Function: listImages()",description:"listImages(options?): Promise\\",source:"@site/api/namespaces/containerEngine/functions/listImages.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/listImages",permalink:"/api/namespaces/containerEngine/functions/listImages",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listContainers",permalink:"/api/namespaces/containerEngine/functions/listContainers"},next:{title:"listInfos",permalink:"/api/namespaces/containerEngine/functions/listInfos"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"function-listimages",children:"Function: listImages()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"listImages"}),"(",(0,i.jsx)(n.code,{children:"options"}),"?): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,i.jsx)(n.code,{children:"ImageInfo"})}),"[]>"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"List the container images. Only images from a final layer (no children) are returned."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"options?"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/ListImagesOptions",children:(0,i.jsx)(n.code,{children:"ListImagesOptions"})})]}),"\n",(0,i.jsx)(n.p,{children:"optional options for listing images"}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,i.jsx)(n.code,{children:"ImageInfo"})}),"[]>"]}),"\n",(0,i.jsxs)(n.p,{children:["A promise resolving to an array of images information. This method returns a subset of the available information for images. To get the complete description of a specific image, you can use the ",(0,i.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/getImageInspect",children:"containerEngine.getImageInspect"})," method."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Example 1: List all container images when no specific provider is provided.\nconst images = await listImages();\nconsole.log(images);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Example 2: List container images for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst images = await listImages({ provider: provider.connection });\nconsole.log(images);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks/podman-desktop/blob/0ed1009e9ce7e8b86f9dc00368e0705458eaeda1/packages/extension-api/src/extension-api.d.ts#L3568",children:"packages/extension-api/src/extension-api.d.ts:3568"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(27378);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);