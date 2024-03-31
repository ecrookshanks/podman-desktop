"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85210],{72997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var s=n(24246),a=n(71670);const i={title:"Share your local podman images with the Kubernetes cluster",description:"Build image and use it directly in your kubernetes cluster",slug:"sharing-podman-images-with-kubernetes-cluster",authors:["benoitf"],tags:["podman-desktop","podman","images","kubernetes"],hide_table_of_contents:!1,image:"/img/blog/sharing-podman-images-with-kubernetes-cluster/selkie-family.png"},o=void 0,r={permalink:"/blog/sharing-podman-images-with-kubernetes-cluster",source:"@site/blog/2023-12-06-sharing-podman-images-with-kubernetes-cluster.md",title:"Share your local podman images with the Kubernetes cluster",description:"Build image and use it directly in your kubernetes cluster",date:"2023-12-06T00:00:00.000Z",formattedDate:"December 6, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"podman",permalink:"/blog/tags/podman"},{label:"images",permalink:"/blog/tags/images"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:7.71,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Principal Software Engineer",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"Share your local podman images with the Kubernetes cluster",description:"Build image and use it directly in your kubernetes cluster",slug:"sharing-podman-images-with-kubernetes-cluster",authors:["benoitf"],tags:["podman-desktop","podman","images","kubernetes"],hide_table_of_contents:!1,image:"/img/blog/sharing-podman-images-with-kubernetes-cluster/selkie-family.png"},unlisted:!1,prevItem:{title:"Podman Desktop 1.6 Release",permalink:"/blog/podman-desktop-release-1.6"},nextItem:{title:"Podman Desktop 1.5 Release",permalink:"/blog/podman-desktop-release-1.5"}},l={authorsImageUrls:[void 0]},m=[];function d(e){const t={code:"code",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"As developers we constantly improve and refine our applications. One of the challenges we face is quickly iterating when working with container images and kubernetes deployments/pods."}),"\n",(0,s.jsxs)(t.p,{children:["For example, when we want to try a new image in a kubernetes pod, this image needs to be available on a private/public registry or on the nodes of the kubernetes cluster.\nSometimes we need to call extra commands such as ",(0,s.jsx)(t.code,{children:"kind load docker-image"})," or ",(0,s.jsx)(t.code,{children:"minikube cache add <image>"})," or publish the image first to a 3rd party registry."]}),"\n",(0,s.jsx)(t.p,{children:"You'll agree that trying out a new image in a Kubernetes pod should be as seamless as building the image itself."}),"\n",(0,s.jsx)(t.p,{children:"In this blog post, we will explore the best practice for streamlining the image iteration process in Kubernetes with Podman Desktop."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"hero",src:n(77538).Z+"",width:"1920",height:"1080"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},77538:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/selkie-family-1b33ecd1c85565d5af69c52a03180a61.png"},71670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(27378);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);