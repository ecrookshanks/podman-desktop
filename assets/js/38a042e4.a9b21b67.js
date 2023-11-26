"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7138],{95583:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=o(24246),t=o(71670);const i={title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},a=void 0,r={permalink:"/blog/develop-using-devcontainer",source:"@site/blog/2022-11-17-develop-podman-using-codespaces.md",title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"devcontainer",permalink:"/blog/tags/devcontainer"},{label:"codespaces",permalink:"/blog/tags/codespaces"}],readingTime:6.985,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Maintainer of Podman Desktop",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Release Notes - Podman Desktop 0.10",permalink:"/blog/podman-desktop-release-0.10"}},d={authorsImageUrls:[void 0]},c=[{value:"Defining image of the container",id:"defining-image-of-the-container",level:2},{value:"Configure the DevContainer using devcontainer.json",id:"configure-the-devcontainer-using-devcontainerjson",level:2},{value:"Using the DevContainer.json on Github Codespace",id:"using-the-devcontainerjson-on-github-codespace",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["GitHub ",(0,s.jsx)(n.a,{href:"https://github.blog/changelog/2022-11-09-codespaces-for-free-and-pro-accounts/",children:"announced last week"})," that Codespaces is available for everyone and it includes free minutes."]}),"\n",(0,s.jsxs)(n.p,{children:["Let see how we can use a ",(0,s.jsx)(n.a,{href:"https://containers.dev/",children:"Development Container"})," having all the tools to build and run Podman Desktop. The Development Container works locally using Visual Studio Code but in this blog post we will see how it works directly with a simple click from GitHub."]}),"\n",(0,s.jsx)(n.p,{children:"The challenges are to run a desktop tool (Podman Desktop) and running a container engine (Podman) inside this Development Container without using too many memory !"}),"\n",(0,s.jsx)(n.h2,{id:"defining-image-of-the-container",children:"Defining image of the container"}),"\n",(0,s.jsxs)(n.p,{children:["The first thing is in the choice of the image for the container. It is possible to pick-up a default image and add some features but there is no existing feature for Podman at ",(0,s.jsx)(n.a,{href:"https://github.com/devcontainers/features/tree/main/src",children:"https://github.com/devcontainers/features/tree/main/src"})," and most of the features are expecting to run on top of Debian/Ubuntu"]}),"\n",(0,s.jsxs)(n.p,{children:["If you are not interested in how to setup the image, jump to the ",(0,s.jsx)(n.a,{href:"#configure-the-devcontainer-using-devcontainerjson",children:"next section"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Podman binaries are available quickly after the releases for Fedora. I decided then to use ",(0,s.jsx)(n.code,{children:"Fedora 37"})," as the base image."]}),"\n",(0,s.jsx)(n.p,{children:"Let start the Containerfile using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"FROM quay.io/fedora/fedora:37\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then I install Node.js 16 from official nodejs.org repository. It's easier to switch to the version that we need."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:'# install Node.js + yarn\nENV NODE_VERSION 16.18.1\nRUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \\\n    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \\\n    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \\\n    npm install -g yarn\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, all system dependencies used to run an Electron application needs to be installed."}),"\n",(0,s.jsx)(n.p,{children:"Podman is also installed so we can run some containers inside this container."}),"\n",(0,s.jsxs)(n.p,{children:["And of course, we need to install VNC (I choose ",(0,s.jsx)(n.a,{href:"https://tigervnc.org/",children:"tigervnc"}),") with a light Window Manager (",(0,s.jsx)(n.a,{href:"http://fluxbox.org/",children:"fluxbox"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["To connect to the display of the container, we need to expose VNC over HTML/websocket using ",(0,s.jsx)(n.a,{href:"https://novnc.com/",children:"noVNC"})]}),"\n",(0,s.jsx)(n.p,{children:"xterm is installed to start a terminal from the VNC side."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"RUN dnf -y update && \\\n    yum -y reinstall shadow-utils && \\\n    yum install -y git \\\n                   # dependencies for Podman Desktop\n                   nss \\\n                   atk \\\n                   at-spi2-atk \\\n                   cups-libs \\\n                   gtk3 \\\n                   # for remote Display\n                   fluxbox \\\n                   tigervnc-server \\\n                   xorg-x11-fonts-Type1 \\\n                   novnc \\\n                   supervisor \\\n                   xdpyinfo \\\n                   # for podman\n                   podman \\\n                   fuse-overlayfs --exclude container-selinux \\\n                   xterm && \\\n    rm -rf /var/cache /var/log/dnf* /var/log/yum.*\n"})}),"\n",(0,s.jsx)(n.p,{children:"Supervisord setup the launch of the VNC server and the Window manager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"COPY supervisord.conf /etc/supervisord.conf\n"})}),"\n",(0,s.jsx)(n.p,{children:"A custom theme for fluxbox:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"COPY fluxbox /usr/share/fluxbox/init\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we need a special configuration to allow to have Podman working inside the container"}),"\n",(0,s.jsxs)(n.p,{children:["We add the ",(0,s.jsx)(n.code,{children:"podman-desktop"})," user with correct range on subuid and subgid when running containers. I used the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman/blob/main/docs/tutorials/rootless_tutorial.md#etcsubuid-and-etcsubgid-configuration",children:"tutorial"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"RUN useradd -u 1000 podman-desktop && echo podman-desktop:10000:5000 > /etc/subuid && echo podman-desktop:10000:5000 > /etc/subgid\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then use some default configuration files"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"# initialize conf files\nADD https://raw.githubusercontent.com/containers/libpod/master/contrib/podmanimage/stable/containers.conf /etc/containers/containers.conf\nADD https://raw.githubusercontent.com/containers/libpod/master/contrib/podmanimage/stable/podman-containers.conf /home/podman-desktop/.config/containers/containers.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and make sure that all permissions are correct following the guide ",(0,s.jsx)(n.a,{href:"https://www.redhat.com/sysadmin/podman-inside-container",children:"https://www.redhat.com/sysadmin/podman-inside-container"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"# set permissions\nRUN chown podman-desktop:podman-desktop -R /home/podman-desktop && chmod 644 /etc/containers/containers.conf && \\\n    mkdir -p /var/lib/shared/overlay-images /var/lib/shared/overlay-layers /var/lib/shared/vfs-images /var/lib/shared/vfs-layers; touch /var/lib/shared/overlay-images/images.lock; touch /var/lib/shared/overlay-layers/layers.lock; touch /var/lib/shared/vfs-images/images.lock; touch /var/lib/shared/vfs-layers/layers.lock && \\\n    mkdir -p /run/user/1000 && chown podman-desktop:podman-desktop /run/user/1000\n"})}),"\n",(0,s.jsx)(n.p,{children:"plus define an empty user namespace."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:'ENV _CONTAINERS_USERNS_CONFIGURED=""\n'})}),"\n",(0,s.jsx)(n.p,{children:"Make sure Podman will create the socket in an expected directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"# socket path for podman\nENV XDG_RUNTIME_DIR=/run/user/1000\n"})}),"\n",(0,s.jsx)(n.p,{children:"OK ! we have a custom Containerfile providing all the tools to build and run Podman Desktop (using VNC for the display), run Podman and run Electron."}),"\n",(0,s.jsxs)(n.p,{children:["The current file is available at ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/main/.devcontainer/.parent/Containerfile",children:"https://github.com/containers/podman-desktop/blob/main/.devcontainer/.parent/Containerfile"})]}),"\n",(0,s.jsx)(n.p,{children:"Let's configure the DevContainer."}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-devcontainer-using-devcontainerjson",children:"Configure the DevContainer using devcontainer.json"}),"\n",(0,s.jsxs)(n.p,{children:["DevContainer definition is stored at ",(0,s.jsx)(n.code,{children:".devcontainer/devcontainer.json"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["We need to reuse the image of the previous step. For that let's use the build section of the ",(0,s.jsx)(n.code,{children:"devcontainer.json"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"build": {\n  "dockerfile": "Containerfile"\n},\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In order to avoid to redo all the build steps each time we open a workspace using this dev container, we published the image to quay.io at ",(0,s.jsxs)(n.a,{href:"https://quay.io/repository/podman-desktop/devcontainer-parent?tab=tags&tag=next",children:["quay.io/podman-desktop/devcontainer-parent",":next","\n"]}),". This parent image is not changing much so it's better to use is as a parent one."]}),"\n",(0,s.jsxs)(n.p,{children:["Inside ",(0,s.jsx)(n.code,{children:".devcontainer"})," directory there is a ",(0,s.jsx)(n.code,{children:".parent"})," directory with everything related to the parent image."]}),"\n",(0,s.jsxs)(n.p,{children:["And in the ",(0,s.jsx)(n.code,{children:".devcontainer/Containerfile"})," file we reference this image"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:"FROM quay.io/podman-desktop/devcontainer-parent:next\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, we will be ",(0,s.jsx)(n.code,{children:"root"})," in the container and this is probably not what we expect. Let's change that."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"containerUser": "podman-desktop"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Some Visual Studio Code extensions are nice to use and we can add them"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "extensions": ["svelte.svelte-vscode", "bradlc.vscode-tailwindcss"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then here is the tricky part, how to run our container allowing to run again inside the container some containers with podman."}),"\n",(0,s.jsxs)(n.p,{children:["We specify the arguments to make it possible. It's possible to use ",(0,s.jsx)(n.code,{children:"--privileged"})," flag but I prefer to list the subset of permissions.\nUsing ",(0,s.jsx)(n.code,{children:"--privileged"})," we don't really know what are the privilege that are required while specifying all of them, people are aware of what is granted/denied."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"runArgs": [\n    "--cap-add=sys_admin",\n    "--security-opt",\n    "seccomp=unconfined",\n    "--device",\n    "/dev/fuse",\n    "--security-opt",\n    "label=disable",\n    "--security-opt",\n    "apparmor=unconfined"\n  ],\n'})}),"\n",(0,s.jsx)(n.p,{children:"Source code of Podman Desktop needs to be editable within the DevContainer so it needs to be mounted."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind",\n"workspaceFolder": "/workspace",\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then we need a command to build Podman Desktop."}),"\n",(0,s.jsxs)(n.p,{children:["For that, we use ",(0,s.jsx)(n.code,{children:"onCreateCommand"})," hook with a custom command"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"onCreateCommand": "${containerWorkspaceFolder}/.devcontainer/onCreateCommand.sh",\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and in the ",(0,s.jsx)(n.code,{children:".devcontainer"})," folder the ",(0,s.jsx)(n.code,{children:"onCreateCommand.sh"})," script is the following"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"#!/bin/sh\nyarn\n\nMODE=production yarn run build && yarn run electron-builder build --linux --dir --config .electron-builder.config.cjs\n"})}),"\n",(0,s.jsx)(n.p,{children:"Two instructions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Fetch all Node.js dependencies."}),"\n",(0,s.jsxs)(n.li,{children:["build Podman Desktop in the ",(0,s.jsx)(n.code,{children:"dist"})," folder using ",(0,s.jsx)(n.code,{children:"Linux"})," as target Operating System."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After the start of the container, how to launch Podman Desktop, the website and VNC, etc ?"}),"\n",(0,s.jsxs)(n.p,{children:["Just use ",(0,s.jsx)(n.code,{children:"postStartCommand"})," hook."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"postStartCommand": "${containerWorkspaceFolder}/.devcontainer/postStartCommand.sh",\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and in the ",(0,s.jsx)(n.code,{children:".devcontainer"})," folder the ",(0,s.jsx)(n.code,{children:"postStartCommand.sh"})," script is the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'#!/bin/sh\n\n# Start all services\n/usr/bin/supervisord -c /etc/supervisord.conf &\n\n# wait X server to be ready or after 2mn exit\necho "Waiting for X server to be ready"\ntimeout 120 bash -c \'until xdpyinfo -display :0 &> /dev/null; do printf "."; sleep 1; done\'\n\n# launch podman desktop\necho "Launching Podman Desktop"\ncd dist/linux-unpacked/&& ./podman-desktop &\n\n# Launch the 9000 redirect after 20 seconds\nsleep 20\nwebsockify --web=/usr/share/novnc localhost:9000 localhost:5900 &\n\n# launch the website rendering\necho "Launching Website"\ncd website && yarn start\n'})}),"\n",(0,s.jsx)(n.p,{children:"It starts VNC and noVNC, start precompiled Podman Desktop and start the documentation rendering."}),"\n",(0,s.jsx)(n.p,{children:"It is not launching the Watch mode/development mode of Podman Desktop as it requires a container having more than 8GB of memory."}),"\n",(0,s.jsx)(n.p,{children:"Picking up a larger instance with for example 16GB, it's possible to use development mode."}),"\n",(0,s.jsxs)(n.p,{children:["Of course, to make VNC happy, we need to specify the ",(0,s.jsx)(n.code,{children:"DISPLAY"})," environment variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"remoteEnv": {\n  "DISPLAY": ":0"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When the DevContainer is fully available, we want to have a way to quickly open the ",(0,s.jsx)(n.code,{children:"Website rendering URL"})," and ",(0,s.jsx)(n.code,{children:"noVNC"})]}),"\n",(0,s.jsxs)(n.p,{children:["Let's tweak the ",(0,s.jsx)(n.code,{children:"devcontainer.json"})," file by adding the ",(0,s.jsx)(n.code,{children:"portsAttributes"})," section"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"portsAttributes": {\n  "9000": {\n    "label": "vnc",\n    "onAutoForward": "openPreview"\n  },\n  "3000": {\n    "label": "website"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After all post-creation steps, the ",(0,s.jsx)(n.code,{children:"Preview"})," browser inside the VS Code editor will open a window to VNC. And another port (",(0,s.jsx)(n.code,{children:"3000"}),") is flagged for the website."]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-devcontainerjson-on-github-codespace",children:"Using the DevContainer.json on Github Codespace"}),"\n",(0,s.jsx)(n.p,{children:"As a user, opening a workspace with all what we configured is done using a single click."}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"https://github.com/containers/podman-desktop"})," then click on the ",(0,s.jsx)(n.code,{children:"< > Code"})," dropdown and click on ",(0,s.jsx)(n.code,{children:"Create codespace on main"})," button."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Open Codespace",src:o(37486).Z+"",width:"1240",height:"617"})}),"\n",(0,s.jsx)(n.p,{children:"Once you click on the button, the codespace is setting up:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Preparing Codespace",src:o(66289).Z+"",width:"754",height:"587"})}),"\n",(0,s.jsxs)(n.p,{children:["After few minutes, as there is not yet ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds",children:"prebuilt codespaces"}),", the codespace is opening."]}),"\n",(0,s.jsxs)(n.p,{children:["The simple Browser displays the noVNC window:\n",(0,s.jsx)(n.img,{alt:"Opening Codespace",src:o(38559).Z+"",width:"2051",height:"1066"})]}),"\n",(0,s.jsxs)(n.p,{children:["Click on the connect button. Then on the terminal you can enter ",(0,s.jsx)(n.code,{children:"podman run quay.io/podman/hello"})," and the container is detected in Podman Desktop.\n",(0,s.jsx)(n.img,{alt:"Testing Codespace",src:o(92972).Z+"",width:"2051",height:"1066"})]}),"\n",(0,s.jsxs)(n.p,{children:["It's also possible using the port widget to get on ",(0,s.jsx)(n.code,{children:"3000"})," port by clicking on the world icon a preview of the website in another tab. Changing source code of the website will refresh the content of the window."]}),"\n",(0,s.jsx)(n.p,{children:"Depending on the usecase, it's also possible to open documentation in the preview browser."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Edit website Codespace",src:o(83517).Z+"",width:"2051",height:"1066"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["The DevContainer image for Podman Desktop is recent so it'll probably evolve over time by adding new capabilities but it allows you to easily build/run/experiment and ",(0,s.jsx)(n.strong,{children:"contribute"})," to the tool or the website."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},37486:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/codespaces-click-repository-22eb251ecc45a2b29952fe5983e16238.png"},83517:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/codespaces-edit-website-d1f2a645f97209e453bc72cadafa0b54.png"},38559:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/codespaces-open-novnc-ec3f30d836eb7af5750498a833d37184.png"},66289:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/codespaces-preparing-codespace-3121417aa9d8947b8f5566bf39478961.png"},92972:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/codespaces-testing-podman-desktop-3210aa766f273a52253d27cb4e7ef782.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var s=o(27378);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);