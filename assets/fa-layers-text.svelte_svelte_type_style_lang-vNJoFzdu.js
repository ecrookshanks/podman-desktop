import{J as ee,p as te,q as l,y as S,k as a,z as v,v as j,A as le,i as ae,j as ie,f as M,r as q,e as z,g as se,a as w,b as ne,u as C,x as A,l as V,s as P}from"./props-aYZjoruW.js";import{s,a as re,t as d}from"./class-CtwBLNtx.js";import{b as oe}from"./index-client-DF8tRCgU.js";function me(i,e,t,y){e===void 0||e(i,t)}function ge(i){const e={};i.children&&(e.default=!0);for(const t in i.$$slots)e[t]=!0;return e}function _e(i,e){var c;var t=(c=i.$$events)==null?void 0:c[e.type],y=ee(t)?t.slice():t==null?[]:[t];for(var f of y)f.call(this,e)}function we(i){var t;var e=(t=i.$$slots)==null?void 0:t.default;return e===!0?i.children:e}function Q(i,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?i.style.fontSize=e.replace("x","em"):i.style.fontSize=""}function ye(i,e,t,y,f,c=1,x="",k=""){let b=1,r=1;f&&(f=="horizontal"?b=-1:f=="vertical"?r=-1:b=r=-1),typeof i=="string"&&(i=parseFloat(i)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const m=`${e*c}${x}`,O=`${t*c}${x}`;let g=`translate(${m},${O}) scale(${b*i},${r*i})`;return y&&(g+=` rotate(${y}${k})`),g}var de=C('<title class="svelte-bvo74f"> </title>'),fe=C('<path class="svelte-bvo74f"></path>'),ce=C('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),pe=C('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function ue(i,e){te(e,!1);const t=A(),y=A();let f=l(e,"class",24,()=>{}),c=l(e,"id",24,()=>{}),x=l(e,"style",24,()=>{}),k=l(e,"icon",8),b=l(e,"title",24,()=>{}),r=l(e,"size",24,()=>{}),m=l(e,"color",24,()=>{}),O=l(e,"fw",8,!1),g=l(e,"pull",24,()=>{}),B=l(e,"scale",8,1),E=l(e,"translateX",8,0),J=l(e,"translateY",8,0),N=l(e,"rotate",24,()=>{}),X=l(e,"flip",24,()=>{}),R=l(e,"spin",8,!1),T=l(e,"pulse",8,!1),Y=l(e,"primaryColor",8,""),W=l(e,"secondaryColor",8,""),D=l(e,"primaryOpacity",8,1),G=l(e,"secondaryOpacity",8,.4),H=l(e,"swapOpacity",8,!1),_=A();S(()=>(a(_),v(r()),Q),()=>{a(_)&&r()&&Q(a(_),r())}),S(()=>v(k()),()=>{j(t,k()&&k().icon||[0,0,"",[],""])}),S(()=>(v(B()),v(E()),v(J()),v(N()),v(X())),()=>{j(y,ye(B(),E(),J(),N(),X(),512))}),le(),ae();var I=ie(),Z=M(I);q(Z,()=>a(t)[4],U=>{var n=pe();oe(n,p=>j(_,p),()=>a(_));var K=V(n);q(K,b,p=>{var o=de(),u=V(o);z(()=>se(u,b())),w(p,o)});var F=P(K),L=V(F),$=V(L);q($,()=>typeof a(t)[4]=="string",p=>{var o=fe();z(()=>{s(o,"d",a(t)[4]),s(o,"fill",m()||Y()||"currentColor"),s(o,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),w(p,o)},p=>{var o=ce(),u=M(o),h=P(u);z(()=>{s(u,"d",a(t)[4][0]),s(u,"fill",W()||m()||"currentColor"),s(u,"fill-opacity",H()!=!1?D():G()),s(u,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`),s(h,"d",a(t)[4][1]),s(h,"fill",Y()||m()||"currentColor"),s(h,"fill-opacity",H()!=!1?G():D()),s(h,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),w(p,o)}),z(()=>{s(n,"id",c()),re(n,`svelte-fa svelte-fa-base ${f()??""} svelte-bvo74f`),s(n,"style",x()),s(n,"viewBox",`0 0 ${a(t)[0]??""} ${a(t)[1]??""}`),d(n,"pulse",T()),d(n,"svelte-fa-size-lg",r()==="lg"),d(n,"svelte-fa-size-sm",r()==="sm"),d(n,"svelte-fa-size-xs",r()==="xs"),d(n,"svelte-fa-fw",O()),d(n,"svelte-fa-pull-left",g()==="left"),d(n,"svelte-fa-pull-right",g()==="right"),d(n,"spin",R()),s(F,"transform",`translate(${a(t)[0]/2} ${a(t)[1]/2})`),s(F,"transform-origin",`${a(t)[0]/4} 0`),s(L,"transform",a(y))}),w(U,n)}),w(i,I),ne()}ue.__docgen={version:3,name:"fa.svelte",data:[{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"any",type:"any"},localName:"clazz"},{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"fw",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"pull",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"scale",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"translateX",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"translateY",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"rotate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"flip",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"spin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"pulse",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"primaryColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"secondaryColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"primaryOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"secondaryOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.4},{visibility:"public",description:null,keywords:[],name:"swapOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{ue as F,me as a,_e as b,we as d,ge as s};
