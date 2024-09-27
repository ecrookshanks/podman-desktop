"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93031],{96959:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(62540),i=s(43023);const o={title:"Podman Desktop 1.4 Release",description:"Podman Desktop 1.4 has been released!",slug:"podman-desktop-release-1.4",authors:["jeffmaury"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.4/juggling.png"},a=void 0,l={permalink:"/blog/podman-desktop-release-1.4",source:"@site/blog/2023-09-18-release-1.4.md",title:"Podman Desktop 1.4 Release",description:"Podman Desktop 1.4 has been released!",date:"2023-09-18T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"kubernetes",permalink:"/blog/tags/kubernetes"},{inline:!0,label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:3.415,hasTruncateMarker:!1,authors:[{name:"Jeff Maury",title:"Engineering Manager",url:"https://github.com/jeffmaury",imageURL:"https://github.com/jeffmaury.png",key:"jeffmaury",page:null}],frontMatter:{title:"Podman Desktop 1.4 Release",description:"Podman Desktop 1.4 has been released!",slug:"podman-desktop-release-1.4",authors:["jeffmaury"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.4/juggling.png"},unlisted:!1,prevItem:{title:"Podman Desktop 1.5 Release",permalink:"/blog/podman-desktop-release-1.5"},nextItem:{title:"Podman Desktop 1.3 Release",permalink:"/blog/podman-desktop-release-1.3"}},r={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Port range mapping #3654",id:"port-range-mapping-3654",level:3},{value:"Terminal lifetime #3725",id:"terminal-lifetime-3725",level:3},{value:"Create volume #3742",id:"create-volume-3742",level:3},{value:"bash support #3750",id:"bash-support-3750",level:3},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:3},{value:"Community Thank You",id:"community-thank-you",level:3},{value:"Final Notes",id:"final-notes",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Podman Desktop 1.4 Release! \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"This is essentially a bug-fix release to fix various issues in UI, but as usual we also added a few new features."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Podman 4.6.2"}),": Podman 4.6.2 included with Podman Desktop 1.4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows Arm64"}),": Native Windows on Arm64 installers and binaries"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port range mapping"}),": Start containers and map a range of ports"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Terminal UX Improvement"}),": Persistent terminal sessions when SSH'ing in a container"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Volume Creation"}),": Create volume from the ",(0,t.jsx)(n.code,{children:"Volumes"})," page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bash support"}),": Terminals are now using ",(0,t.jsx)(n.code,{children:"bash"})," if available."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Podman Desktop 1.4 is now available. ",(0,t.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Podman-desktop-1-4-juggling",src:s(74663).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,t.jsxs)(n.h3,{id:"port-range-mapping-3654",children:["Port range mapping ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3654",children:"#3654"})]}),"\n",(0,t.jsx)(n.p,{children:"When starting a new container, you can now map a port range between host and container. If the range is not valid between host and container, an error is raised."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/49404737/262927546-da66b67a-0884-40b1-85bd-a9c3ea2f3f9e.gif",alt:"Range mapping"})}),"\n",(0,t.jsxs)(n.h3,{id:"terminal-lifetime-3725",children:["Terminal lifetime ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3725",children:"#3725"})]}),"\n",(0,t.jsx)(n.p,{children:"When a terminal is opened for a container, it can now be reused after you switched to another part of the Podman Desktop UI."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"terminal lifetime",src:s(37709).A+"",width:"1316",height:"879"})}),"\n",(0,t.jsxs)(n.h3,{id:"create-volume-3742",children:["Create volume ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3742",children:"#3742"})]}),"\n",(0,t.jsx)(n.p,{children:"The Volumes tab now has a Create volume button. The Create volume UI has a single field for the volume name."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create volume",src:s(88388).A+"",width:"1316",height:"879"})}),"\n",(0,t.jsxs)(n.h3,{id:"bash-support-3750",children:["bash support ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3750",children:"#3750"})]}),"\n",(0,t.jsx)(n.p,{children:"When a terminal is opened for a container, if bash is available within the container, it will be used. Otherwise, sh will be used."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"bash sh",src:s(88177).A+"",width:"1316",height:"879"})}),"\n",(0,t.jsx)(n.h3,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reduce API calls when listing containers by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3489",children:"#3489"})]}),"\n",(0,t.jsxs)(n.li,{children:["Removing a connection(podman machine) should redirect to previous page by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3576",children:"#3576"})]}),"\n",(0,t.jsxs)(n.li,{children:["Enhance error message when image is not there by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3587",children:"#3587"})]}),"\n",(0,t.jsxs)(n.li,{children:["Dispose kind install button when extension is deactivated (#3586) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3610",children:"#3610"})]}),"\n",(0,t.jsxs)(n.li,{children:["Replace backslash/slash on windows when building image (#3465) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3618",children:"#3618"})]}),"\n",(0,t.jsxs)(n.li,{children:["Handle null value in container command (#3620) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3625",children:"#3625"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add maximum activation time for extensions by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3446",children:"#3446"})]}),"\n",(0,t.jsxs)(n.li,{children:["Handle single non-spread arguments by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3641",children:"#3641"})]}),"\n",(0,t.jsxs)(n.li,{children:["Grab usage data of volumes only on-demand by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3635",children:"#3635"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add arm64 binaries for Windows by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3643",children:"#3643"})]}),"\n",(0,t.jsxs)(n.li,{children:["Include right airgap file for Windows and arm64 by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3651",children:"#3651"})]}),"\n",(0,t.jsxs)(n.li,{children:["Redirect to previous page when removing a kubernetes connection by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3650",children:"#3650"})]}),"\n",(0,t.jsxs)(n.li,{children:["Support port ranges when starting a container (#3204) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3654",children:"#3654"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add a strict undefined check to messagebox result (#3692) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3699",children:"#3699"})]}),"\n",(0,t.jsxs)(n.li,{children:["Only restart if a machine is running by @cdrage ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3491",children:"#3491"})]}),"\n",(0,t.jsxs)(n.li,{children:["Session to the terminal is reused by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3725",children:"#3725"})]}),"\n",(0,t.jsxs)(n.li,{children:["Disable next button and show try again when onboarding failed (#3616) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3711",children:"#3711"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add podman in PATH after updating process environment PATH (#3729) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3730",children:"#3730"})]}),"\n",(0,t.jsxs)(n.li,{children:["Allow to create a volume by @benoitf ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3742",children:"#3742"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using bash if available otherwise sh in terminal by @axel7083 ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3750",children:"#3750"})]}),"\n",(0,t.jsxs)(n.li,{children:["Allow to embed existing component to onboarding (#3755) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3763",children:"#3763"})]}),"\n",(0,t.jsxs)(n.li,{children:["Some containers never return logs, do not wait for them by @dgolovin ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3784",children:"#3784"})]}),"\n",(0,t.jsxs)(n.li,{children:["Remove cancel button when on final onboarding step (#3771) by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3802",children:"#3802"})]}),"\n",(0,t.jsxs)(n.li,{children:["Onboarding add link micromark for commands by @cdrage ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3747",children:"#3747"})]}),"\n",(0,t.jsxs)(n.li,{children:["Mounts can be null when using older podman by @afbjorklund ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3806",children:"#3806"})]}),"\n",(0,t.jsxs)(n.li,{children:["Remove redundant step completion check when onboarding gets started by @lstocchi ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3798",children:"#3798"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ability to click enter in pull image name input by @deboer-tim ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3850",children:"#3850"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set proxy environment variable when launching process by @jeffmaury ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3838",children:"#3838"})]}),"\n",(0,t.jsxs)(n.li,{children:["The socket location was moved for new podman by @afbjorklund ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3853",children:"#3853"})]}),"\n",(0,t.jsxs)(n.li,{children:["Don't log console errors when activating lima extension by @afbjorklund ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3852",children:"#3852"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."}),"\n",(0,t.jsxs)(n.p,{children:["A warm welcome to ",(0,t.jsx)(n.a,{href:"https://github.com/tomgoren",children:"@tomgoren"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/Julian",children:"@Julian"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/Gelob",children:"@Gelob"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/cedricclyburn",children:"@cedricclyburn"})," who made their first contribution to the project in this release."]}),"\n",(0,t.jsx)(n.h3,{id:"final-notes",children:"Final Notes"}),"\n",(0,t.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.4.0",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Get the latest release from the ",(0,t.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},88177:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/bash-sh-640dea579335def1a54ad3d2fb668a13.gif"},88388:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/create-volume-b826557a9841c4f92311a2b5833ec247.gif"},74663:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/juggling-bfd34fcfc3b63b29752c5f16a53e36ad.png"},37709:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/terminal-dc078da2d12869ee9e148c38afe530da.gif"},43023:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(63696);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);