"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[899],{43688:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(24246),s=i(71670);const o={sidebar_position:3},a="MacOS",l={id:"installation/macos-install",title:"MacOS",description:"This page contains information regarding installation of Podman Desktop on MacOS.",source:"@site/docs/installation/macos-install.md",sourceDirName:"installation",slug:"/installation/macos-install",permalink:"/docs/installation/macos-install",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/installation/macos-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Windows",permalink:"/docs/installation/windows-install/"},next:{title:"Linux",permalink:"/docs/installation/linux-install/"}},d={},c=[{value:"Installing Podman Desktop on MacOS using .dmg file",id:"installing-podman-desktop-on-macos-using-dmg-file",level:2},{value:"Installing Podman Desktop on MacOS using brew",id:"installing-podman-desktop-on-macos-using-brew",level:2},{value:"Installation steps",id:"installation-steps",level:3},{value:"Getting Started",id:"getting-started",level:2}];function r(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"macos",children:"MacOS"}),"\n",(0,t.jsx)(e.p,{children:"This page contains information regarding installation of Podman Desktop on MacOS."}),"\n",(0,t.jsx)(e.p,{children:"You can install Podman Desktop on Mac:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Using the .dmg file"}),"\n",(0,t.jsx)(e.li,{children:"Using Brew"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"Prerequisite",type:"info",children:(0,t.jsxs)(e.p,{children:["Podman Desktop requires ",(0,t.jsx)(e.a,{href:"https://docs.podman.io/en/latest/index.html",children:"Podman Engine"}),". If you don't have Podman Engine installed, Podman Desktop will prompt you to do so at a later stage."]})}),"\n",(0,t.jsx)(e.h2,{id:"installing-podman-desktop-on-macos-using-dmg-file",children:"Installing Podman Desktop on MacOS using .dmg file"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Download the ",(0,t.jsx)(e.code,{children:".dmg"})," file from the ",(0,t.jsx)(e.a,{href:"/downloads/macos",children:"Downloads"})," section of this website."]}),"\n",(0,t.jsx)(e.p,{children:'While we recommend getting the "universal" binary file which will work irrespective of the chip architecture your Mac possesses, you also have the option to get the applicable .dmg file depending on your Mac Hardware Architecture (that is Intel or Apple M1).'}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Locate the downloaded file, and double-click on it. (Usually, you will find the downloaded file in the Downloads folder)"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img0",src:i(26778).Z+"",width:"1594",height:"786"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Drag Podman Desktop icon to the Applications folder."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img1",src:i(52599).Z+"",width:"1037",height:"703"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Start Podman Desktop from the 'Launchpad' or Mac's ",(0,t.jsx)(e.code,{children:"Applications"})," directory."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img2",src:i(4583).Z+"",width:"674",height:"714"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Install Podman from Podman Desktop, if not yet installed."}),"\n",(0,t.jsxs)(e.p,{children:['When you open Podman Desktop for the first time, click on the "View detection checks" button to scan if all the prerequisites to use Podman Desktop are met. If it says ',(0,t.jsx)(e.code,{children:"\u274c podman cli was not found in the PATH"}),", then you need to install the Podman CLI/Engine which can be done within the application."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img3",src:i(18578).Z+"",width:"2880",height:"1800"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Click on the "Install" button next to the "View detection checks" button, and follow the instructions on screen.'}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"You will be redirected to the Podman Installer. Follow the instructions on screen and enter your system password when asked."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img4",src:i(92797).Z+"",width:"1265",height:"1149"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"After the installation is complete, close the installation program. Podman Engine has been installed and you are now ready to use Podman Desktop."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"installing-podman-desktop-on-macos-using-brew",children:["Installing Podman Desktop on MacOS using ",(0,t.jsx)(e.a,{href:"https://brew.sh/",children:"brew"})]}),"\n",(0,t.jsx)(e.admonition,{title:"Prerequisite",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://brew.sh/",children:"Homebrew"})}),"\n"]})}),"\n",(0,t.jsx)(e.h3,{id:"installation-steps",children:"Installation steps"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Open a terminal on your Mac."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Run the command mentioned below."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:"brew install podman-desktop\n"})}),"\n",(0,t.jsx)(e.p,{children:"Brew will also install the Podman Engine along with the Podman Desktop application, in case you don't have it installed yet."}),"\n",(0,t.jsxs)(e.p,{children:["After the command is executed, you can find the Podman Desktop Application within the ",(0,t.jsx)(e.code,{children:"Applications"})," directory of the MacOS."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(e.p,{children:["Learn more on how to get started with Podman Desktop by clicking ",(0,t.jsx)(e.a,{href:"/docs/containers",children:"here"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},52599:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/click-and-drag-862777e1ab1bfcafc559dd59f71a77e8.png"},26778:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/download-dmg-a847cf16a9f16dfddba0e46a4dbb3c2b.png"},18578:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/pd-before-podman-22ea6273dc67b3521d8836ce6fa717ec.png"},4583:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/podman-desktop-app-9ea27077f1d767753acfb5c574657f27.png"},92797:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/system-pass-563b1bc0979f040e796c2e2eec40f11b.png"},71670:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>a});var t=i(27378);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);