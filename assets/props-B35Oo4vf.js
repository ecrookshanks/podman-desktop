const lr="5.25.9",Jn="5";var pn;typeof window<"u"&&((pn=window.__svelte??(window.__svelte={})).v??(pn.v=new Set)).add(Jn);let ve=!1,Qn=!1;function et(){ve=!0}et();const sr=1,ar=2,fr=4,or=8,cr=16,nt=1,tt=2,hn=4,rt=8,ut=16,_r=4,wn=1,it=2,x=Symbol(),vr="http://www.w3.org/1999/xhtml",Qe=!1;function lt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var gn=Array.isArray,st=Array.prototype.indexOf,at=Array.from,bn=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,ft=Object.getOwnPropertyDescriptors,ot=Object.prototype,ct=Array.prototype,yn=Object.getPrototypeOf,en=Object.isExtensible;function ae(e){return typeof e=="function"}const ne=()=>{};function _t(e){return e()}function ge(e){for(var n=0;n<e.length;n++)e[n]()}function dr(e,n,t=!1){return e===void 0?t?n():n:e}const I=2,En=4,Oe=8,Ye=16,j=32,ie=64,be=128,N=256,ye=512,T=1024,k=2048,X=4096,te=8192,Pe=16384,vt=32768,Ne=65536,mn=1<<17,dt=1<<19,xn=1<<20,qe=1<<21,q=Symbol("$state"),Tn=Symbol("legacy props"),pr=Symbol("");function pt(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ht(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function wt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hr(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function bt(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function yt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Et(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function W(e){if(typeof e!="object"||e===null||q in e)return e;const n=yn(e);if(n!==ot&&n!==ct)return e;var t=new Map,r=gn(e),i=U(0),u=d,a=f=>{var s=d;R(u);var l=f();return R(s),l};return r&&t.set("length",U(e.length)),new Proxy(e,{defineProperty(f,s,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&yt();var _=t.get(s);return _===void 0?(_=a(()=>U(l.value)),t.set(s,_)):S(_,a(()=>W(l.value))),!0},deleteProperty(f,s){var l=t.get(s);if(l===void 0)s in f&&t.set(s,a(()=>U(x)));else{if(r&&typeof s=="string"){var _=t.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&S(_,o)}S(l,x),nn(i)}return!0},get(f,s,l){var v;if(s===q)return e;var _=t.get(s),o=s in f;if(_===void 0&&(!o||(v=Y(f,s))!=null&&v.writable)&&(_=a(()=>U(W(o?f[s]:x))),t.set(s,_)),_!==void 0){var c=w(_);return c===x?void 0:c}return Reflect.get(f,s,l)},getOwnPropertyDescriptor(f,s){var l=Reflect.getOwnPropertyDescriptor(f,s);if(l&&"value"in l){var _=t.get(s);_&&(l.value=w(_))}else if(l===void 0){var o=t.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==x)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return l},has(f,s){var c;if(s===q)return!0;var l=t.get(s),_=l!==void 0&&l.v!==x||Reflect.has(f,s);if(l!==void 0||h!==null&&(!_||(c=Y(f,s))!=null&&c.writable)){l===void 0&&(l=a(()=>U(_?W(f[s]):x)),t.set(s,l));var o=w(l);if(o===x)return!1}return _},set(f,s,l,_){var G;var o=t.get(s),c=s in f;if(r&&s==="length")for(var v=l;v<o.v;v+=1){var g=t.get(v+"");g!==void 0?S(g,x):v in f&&(g=a(()=>U(x)),t.set(v+"",g))}o===void 0?(!c||(G=Y(f,s))!=null&&G.writable)&&(o=a(()=>U(void 0)),S(o,a(()=>W(l))),t.set(s,o)):(c=o.v!==x,S(o,a(()=>W(l))));var y=Reflect.getOwnPropertyDescriptor(f,s);if(y!=null&&y.set&&y.set.call(_,l),!c){if(r&&typeof s=="string"){var O=t.get("length"),B=Number(s);Number.isInteger(B)&&B>=O.v&&S(O,B+1)}nn(i)}return!0},ownKeys(f){w(i);var s=Reflect.ownKeys(f).filter(o=>{var c=t.get(o);return c===void 0||c.v!==x});for(var[l,_]of t)_.v!==x&&!(l in f)&&s.push(l);return s},setPrototypeOf(){Et()}})}function nn(e,n=1){S(e,e.v+n)}function tn(e){try{if(e!==null&&typeof e=="object"&&q in e)return e[q]}catch{}return e}function wr(e,n){return Object.is(tn(e),tn(n))}var rn,An,Sn,On;function xt(){if(rn===void 0){rn=window,An=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Sn=Y(n,"firstChild").get,On=Y(n,"nextSibling").get,en(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),en(t)&&(t.__t=void 0)}}function $e(e=""){return document.createTextNode(e)}function F(e){return Sn.call(e)}function Ke(e){return On.call(e)}function gr(e,n){return F(e)}function br(e,n){{var t=F(e);return t instanceof Comment&&t.data===""?Ke(t):t}}function yr(e,n=1,t=!1){let r=e;for(;n--;)r=Ke(r);return r}function Er(e){e.textContent=""}function Pn(e){return e===this.v}function Nn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ge(e){return!Nn(e,this.v)}function re(e){var n=I|k,t=d!==null&&(d.f&I)!==0?d:null;return h===null||t!==null&&(t.f&N)!==0?n|=N:h.f|=xn,{ctx:p,deps:null,effects:null,equals:Pn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function mr(e){const n=re(e);return Bn(n),n}function Tt(e){const n=re(e);return n.equals=Ge,n}function In(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Z(n[t])}}function At(e){for(var n=e.parent;n!==null;){if((n.f&I)===0)return n;n=n.parent}return null}function St(e){var n,t=h;$(At(e));try{In(e),n=Yn(e)}finally{$(t)}return n}function Dn(e){var n=St(e),t=(H||(e.f&N)!==0)&&e.deps!==null?X:T;D(e,t),e.equals(n)||(e.v=n,e.wv=Vn())}function Cn(e){h===null&&d===null&&wt(),d!==null&&(d.f&N)!==0&&h===null&&ht(),de&&pt()}function Ot(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function le(e,n,t,r=!0){var i=h,u={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:e|k,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{De(u),u.f|=vt}catch(s){throw Z(u),s}else n!==null&&Ce(u);var a=t&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(xn|be))===0;if(!a&&r&&(i!==null&&Ot(u,i),d!==null&&(d.f&I)!==0)){var f=d;(f.effects??(f.effects=[])).push(u)}return u}function We(e){const n=le(Oe,null,!1);return D(n,T),n.teardown=e,n}function un(e){Cn();var n=h!==null&&(h.f&j)!==0&&p!==null&&!p.m;if(n){var t=p;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:d})}else{var r=Rn(e);return r}}function Pt(e){return Cn(),ze(e)}function Nt(e){const n=le(ie,e,!0);return(t={})=>new Promise(r=>{t.outro?me(n,()=>{Z(n),r(void 0)}):(Z(n),r(void 0))})}function Rn(e){return le(En,e,!1)}function xr(e,n){var t=p,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=ze(()=>{e(),!r.ran&&(r.ran=!0,S(t.l.r2,!0),K(n))})}function Tr(){var e=p;ze(()=>{if(w(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&T)!==0&&D(t,X),se(t)&&De(t),n.ran=!1}e.l.r2.v=!1}})}function ze(e){return le(Oe,e,!0)}function Ar(e,n=[],t=re){const r=n.map(t);return Ze(()=>e(...r.map(w)))}function Ze(e,n=0){return le(Oe|Ye|n,e,!0)}function Ee(e,n=!0){return le(Oe|j,e,!0,n)}function Ln(e){var n=e.teardown;if(n!==null){const t=de,r=d;an(!0),R(null);try{n.call(null)}finally{an(t),R(r)}}}function Mn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&ie)!==0?t.parent=null:Z(t,n),t=r}}function It(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&j)===0&&Z(n),n=t}}function Z(e,n=!0){var t=!1;if((n||(e.f&dt)!==0)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var u=r===i?null:Ke(r);r.remove(),r=u}t=!0}Mn(e,n&&!t),Se(e,0),D(e,Pe);var a=e.transitions;if(a!==null)for(const s of a)s.stop();Ln(e);var f=e.parent;f!==null&&f.first!==null&&Fn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Fn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function me(e,n){var t=[];qn(e,t,!0),Dt(t,()=>{Z(e),n&&n()})}function Dt(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function qn(e,n,t){if((e.f&te)===0){if(e.f^=te,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var i=r.next,u=(r.f&Ne)!==0||(r.f&j)!==0;qn(r,n,u?t:!1),r=i}}}function ln(e){jn(e,!0)}function jn(e,n){if((e.f&te)!==0){e.f^=te,(e.f&T)===0&&(e.f^=T),se(e)&&(D(e,k),Ce(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Ne)!==0||(t.f&j)!==0;jn(t,i?n:!1),t=r}if(e.transitions!==null)for(const u of e.transitions)(u.is_global||n)&&u.in()}}let ce=[],je=[];function kn(){var e=ce;ce=[],ge(e)}function Ct(){var e=je;je=[],ge(e)}function Rt(e){ce.length===0&&queueMicrotask(kn),ce.push(e)}function sn(){ce.length>0&&kn(),je.length>0&&Ct()}let we=!1,xe=!1,Te=null,z=!1,de=!1;function an(e){de=e}let oe=[];let d=null,C=!1;function R(e){d=e}let h=null;function $(e){h=e}let m=null;function Lt(e){m=e}function Bn(e){d!==null&&d.f&qe&&(m===null?Lt([e]):m.push(e))}let E=null,A=0,P=null;function Mt(e){P=e}let Un=1,Ae=0,H=!1,V=null;function Vn(){return++Un}function se(e){var o;var n=e.f;if((n&k)!==0)return!0;if((n&X)!==0){var t=e.deps,r=(n&N)!==0;if(t!==null){var i,u,a=(n&ye)!==0,f=r&&h!==null&&!H,s=t.length;if(a||f){var l=e,_=l.parent;for(i=0;i<s;i++)u=t[i],(a||!((o=u==null?void 0:u.reactions)!=null&&o.includes(l)))&&(u.reactions??(u.reactions=[])).push(l);a&&(l.f^=ye),f&&_!==null&&(_.f&N)===0&&(l.f^=N)}for(i=0;i<s;i++)if(u=t[i],se(u)&&Dn(u),u.wv>e.wv)return!0}(!r||h!==null&&!H)&&D(e,T)}return!1}function Ft(e,n){for(var t=n;t!==null;){if((t.f&be)!==0)try{t.fn(e);return}catch{t.f^=be}t=t.parent}throw we=!1,e}function qt(e){return(e.f&Pe)===0&&(e.parent===null||(e.parent.f&be)===0)}function Ie(e,n,t,r){if(we){if(t===null&&(we=!1),qt(n))throw e;return}t!==null&&(we=!0);{Ft(e,n);return}}function Hn(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];m!=null&&m.includes(e)||((u.f&I)!==0?Hn(u,n,!1):n===u&&(t?D(u,k):(u.f&T)!==0&&D(u,X),Ce(u)))}}function Yn(e){var v;var n=E,t=A,r=P,i=d,u=H,a=m,f=p,s=C,l=e.f;E=null,A=0,P=null,H=(l&N)!==0&&(C||!z||d===null),d=(l&(j|ie))===0?e:null,m=null,on(e.ctx),C=!1,Ae++,e.f|=qe;try{var _=(0,e.fn)(),o=e.deps;if(E!==null){var c;if(Se(e,A),o!==null&&A>0)for(o.length=A+E.length,c=0;c<E.length;c++)o[A+c]=E[c];else e.deps=o=E;if(!H)for(c=A;c<o.length;c++)((v=o[c]).reactions??(v.reactions=[])).push(e)}else o!==null&&A<o.length&&(Se(e,A),o.length=A);if(Le()&&P!==null&&!C&&o!==null&&(e.f&(I|X|k))===0)for(c=0;c<P.length;c++)Hn(P[c],e);return i!==e&&(Ae++,P!==null&&(r===null?r=P:r.push(...P))),_}finally{E=n,A=t,P=r,d=i,H=u,m=a,on(f),C=s,e.f^=qe}}function jt(e,n){let t=n.reactions;if(t!==null){var r=st.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&I)!==0&&(E===null||!E.includes(n))&&(D(n,X),(n.f&(N|ye))===0&&(n.f^=ye),In(n),Se(n,0))}function Se(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)jt(e,t[r])}function De(e){var n=e.f;if((n&Pe)===0){D(e,T);var t=h,r=p,i=z;h=e,z=!0;try{(n&Ye)!==0?It(e):Mn(e),Ln(e);var u=Yn(e);e.teardown=typeof u=="function"?u:null,e.wv=Un;var a=e.deps,f;Qe&&Qn&&e.f&k}catch(s){Ie(s,e,t,r||e.ctx)}finally{z=i,h=t}}}function kt(){try{gt()}catch(e){if(Te!==null)Ie(e,Te,null);else throw e}}function $n(){var e=z;try{var n=0;for(z=!0;oe.length>0;){n++>1e3&&kt();var t=oe,r=t.length;oe=[];for(var i=0;i<r;i++){var u=Ut(t[i]);Bt(u)}_e.clear()}}finally{xe=!1,z=e,Te=null}}function Bt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Pe|te))===0)try{se(r)&&(De(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Fn(r):r.fn=null))}catch(i){Ie(i,r,null,r.ctx)}}}function Ce(e){xe||(xe=!0,queueMicrotask($n));for(var n=Te=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(ie|j))!==0){if((t&T)===0)return;n.f^=T}}oe.push(n)}function Ut(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(j|ie))!==0,u=i&&(r&T)!==0;if(!u&&(r&te)===0){if((r&En)!==0)n.push(t);else if(i)t.f^=T;else{var a=d;try{d=t,se(t)&&De(t)}catch(l){Ie(l,t,null,t.ctx)}finally{d=a}}var f=t.first;if(f!==null){t=f;continue}}var s=t.parent;for(t=t.next;t===null&&s!==null;)t=s.next,s=s.parent}return n}function Vt(e){var n;for(sn();oe.length>0;)xe=!0,$n(),sn();return n}async function Sr(){await Promise.resolve(),Vt()}function w(e){var n=e.f,t=(n&I)!==0;if(V!==null&&V.add(e),d!==null&&!C){if(!(m!=null&&m.includes(e))){var r=d.deps;e.rv<Ae&&(e.rv=Ae,E===null&&r!==null&&r[A]===e?A++:E===null?E=[e]:(!H||!E.includes(e))&&E.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,u=i.parent;u!==null&&(u.f&N)===0&&(i.f^=N)}return t&&(i=e,se(i)&&Dn(i)),de&&_e.has(e)?_e.get(e):e.v}function Ht(e){var n=V;V=new Set;var t=V,r;try{if(K(e),n!==null)for(r of V)n.add(r)}finally{V=n}return t}function Or(e){var n=Ht(()=>K(e));for(var t of n)if((t.f&mn)!==0)for(const r of t.deps||[])(r.f&I)===0&&Be(r,r.v);else Be(t,t.v)}function K(e){var n=C;try{return C=!0,e()}finally{C=n}}const Yt=-7169;function D(e,n){e.f=e.f&Yt|n}function Pr(e,n){var t={};for(var r in e)n.includes(r)||(t[r]=e[r]);return t}function $t(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(q in e)ke(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&q in t&&ke(t)}}}function ke(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ke(e[r],n)}catch{}const t=yn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=ft(t);for(let i in r){const u=r[i].get;if(u)try{u.call(e)}catch{}}}}}const _e=new Map;function Re(e,n){var t={f:0,v:e,reactions:null,equals:Pn,rv:0,wv:0};return t}function U(e,n){const t=Re(e);return Bn(t),t}function Kn(e,n=!1){var r;const t=Re(e);return n||(t.equals=Ge),ve&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(t),t}function Nr(e,n){return S(e,K(()=>w(e))),n}function S(e,n,t=!1){d!==null&&!C&&Le()&&(d.f&(I|Ye))!==0&&!(m!=null&&m.includes(e))&&mt();let r=t?W(n):n;return Be(e,r)}function Be(e,n){if(!e.equals(n)){var t=e.v;de?_e.set(e,n):_e.set(e,t),e.v=n,e.wv=Vn(),Gn(e,k),Le()&&h!==null&&(h.f&T)!==0&&(h.f&(j|ie))===0&&(P===null?Mt([e]):P.push(e))}return n}function fn(e,n=1){var t=w(e),r=n===1?t++:t--;return S(e,t),r}function Gn(e,n){var t=e.reactions;if(t!==null)for(var r=Le(),i=t.length,u=0;u<i;u++){var a=t[u],f=a.f;(f&k)===0&&(!r&&a===h||(D(a,n),(f&(T|N))!==0&&((f&I)!==0?Gn(a,X):Ce(a))))}}let p=null;function on(e){p=e}function Ir(e){return Xe().get(e)}function Dr(e,n){return Xe().set(e,n),n}function Cr(e){return Xe().has(e)}function Kt(e,n=!1,t){var r=p={p,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};ve&&!n&&(p.l={s:null,u:null,r1:[],r2:Re(!1)}),We(()=>{r.d=!0})}function Gt(e){const n=p;if(n!==null){e!==void 0&&(n.x=e);const a=n.e;if(a!==null){var t=h,r=d;n.e=null;try{for(var i=0;i<a.length;i++){var u=a[i];$(u.effect),R(u.reaction),Rn(u.fn)}}finally{$(t),R(r)}}p=n.p,n.m=!0}return e||{}}function Le(){return!ve||p!==null&&p.l===null}function Xe(e){return p===null&&lt(),p.c??(p.c=new Map(Wt(p)||void 0))}function Wt(e){let n=e.p;for(;n!==null;){const t=n.c;if(t!==null)return t;n=n.p}return null}const zt=["touchstart","touchmove"];function Zt(e){return zt.includes(e)}let cn=!1;function Xt(){cn||(cn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function Wn(e){var n=d,t=h;R(null),$(null);try{return e()}finally{R(n),$(t)}}function Rr(e,n,t,r=t){e.addEventListener(n,()=>Wn(t));const i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),Xt()}const zn=new Set,Ue=new Set;function Jt(e,n,t,r={}){function i(u){if(r.capture||fe.call(n,u),!u.cancelBubble)return Wn(()=>t==null?void 0:t.call(this,u))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Rt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Lr(e,n,t,r,i){var u={capture:r,passive:i},a=Jt(e,n,t,u);(n===document.body||n===window||n===document)&&We(()=>{n.removeEventListener(e,a,u)})}function Mr(e){for(var n=0;n<e.length;n++)zn.add(e[n]);for(var t of Ue)t(e)}function fe(e){var G;var n=this,t=n.ownerDocument,r=e.type,i=((G=e.composedPath)==null?void 0:G.call(e))||[],u=i[0]||e.target,a=0,f=e.__root;if(f){var s=i.indexOf(f);if(s!==-1&&(n===document||n===window)){e.__root=n;return}var l=i.indexOf(n);if(l===-1)return;s<=l&&(a=s)}if(u=i[a]||e.target,u!==n){bn(e,"currentTarget",{configurable:!0,get(){return u||t}});var _=d,o=h;R(null),$(null);try{for(var c,v=[];u!==null;){var g=u.assignedSlot||u.parentNode||u.host||null;try{var y=u["__"+r];if(y!=null&&(!u.disabled||e.target===u))if(gn(y)){var[O,...B]=y;O.apply(u,[e,...B])}else y.call(u,e)}catch(L){c?v.push(L):c=L}if(e.cancelBubble||g===n||g===null)break;u=g}if(c){for(let L of v)queueMicrotask(()=>{throw L});throw c}}finally{e.__root=n,delete e.currentTarget,R(_),$(o)}}}function Zn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function ue(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function Fr(e,n){var t=(n&wn)!==0,r=(n&it)!==0,i,u=!e.startsWith("<!>");return()=>{i===void 0&&(i=Zn(u?e:"<!>"+e),t||(i=F(i)));var a=r||An?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=F(a),s=a.lastChild;ue(f,s)}else ue(a,a);return a}}function qr(e,n,t="svg"){var r=!e.startsWith("<!>"),i=(n&wn)!==0,u=`<${t}>${r?e:"<!>"+e}</${t}>`,a;return()=>{if(!a){var f=Zn(u),s=F(f);if(i)for(a=document.createDocumentFragment();F(s);)a.appendChild(F(s));else a=F(s)}var l=a.cloneNode(!0);if(i){var _=F(l),o=l.lastChild;ue(_,o)}else ue(l,l);return l}}function jr(e=""){{var n=$e(e+"");return ue(n,n),n}}function kr(){var e=document.createDocumentFragment(),n=document.createComment(""),t=$e();return e.append(n,t),ue(n,t),e}function Br(e,n){e!==null&&e.before(n)}let _n=!0;function Ur(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Vr(e,n){return Qt(e,n)}const Q=new Map;function Qt(e,{target:n,anchor:t,props:r={},events:i,context:u,intro:a=!0}){xt();var f=new Set,s=o=>{for(var c=0;c<o.length;c++){var v=o[c];if(!f.has(v)){f.add(v);var g=Zt(v);n.addEventListener(v,fe,{passive:g});var y=Q.get(v);y===void 0?(document.addEventListener(v,fe,{passive:g}),Q.set(v,1)):Q.set(v,y+1)}}};s(at(zn)),Ue.add(s);var l=void 0,_=Nt(()=>{var o=t??n.appendChild($e());return Ee(()=>{if(u){Kt({});var c=p;c.c=u}i&&(r.$$events=i),_n=a,l=e(o,r)||{},_n=!0,u&&Gt()}),()=>{var g;for(var c of f){n.removeEventListener(c,fe);var v=Q.get(c);--v===0?(document.removeEventListener(c,fe),Q.delete(c)):Q.set(c,v)}Ue.delete(s),o!==t&&((g=o.parentNode)==null||g.removeChild(o))}});return Ve.set(l,_),l}let Ve=new WeakMap;function Hr(e,n){const t=Ve.get(e);return t?(Ve.delete(e),t(n)):Promise.resolve()}function Yr(e,n,[t,r]=[0,0]){var i=e,u=null,a=null,f=x,s=t>0?Ne:0,l=!1;const _=(c,v=!0)=>{l=!0,o(v,c)},o=(c,v)=>{f!==(f=c)&&(f?(u?ln(u):v&&(u=Ee(()=>v(i))),a&&me(a,()=>{a=null})):(a?ln(a):v&&(a=Ee(()=>v(i,[t+1,r]))),u&&me(u,()=>{u=null})))};Ze(()=>{l=!1,n(_),l||o(null,null)},s)}function $r(e,n,t){var r=e,i,u;Ze(()=>{i!==(i=n())&&(u&&(me(u),u=null),i&&(u=Ee(()=>t(r,i))))},Ne)}function Kr(e=!1){const n=p,t=n.l.u;if(!t)return;let r=()=>$t(n.s);if(e){let i=0,u={};const a=re(()=>{let f=!1;const s=n.s;for(const l in s)s[l]!==u[l]&&(u[l]=s[l],f=!0);return f&&i++,i});r=()=>w(a)}t.b.length&&Pt(()=>{vn(n,r),ge(t.b)}),un(()=>{const i=K(()=>t.m.map(_t));return()=>{for(const u of i)typeof u=="function"&&u()}}),t.a.length&&un(()=>{vn(n,r),ge(t.a)})}function vn(e,n){if(e.l.s)for(const t of e.l.s)w(t);n()}function Xn(e,n,t){if(e==null)return n(void 0),ne;const r=K(()=>e.subscribe(n,t));return r.unsubscribe?()=>r.unsubscribe():r}const ee=[];function Gr(e,n=ne){let t=null;const r=new Set;function i(f){if(Nn(e,f)&&(e=f,t)){const s=!ee.length;for(const l of r)l[1](),ee.push(l,e);if(s){for(let l=0;l<ee.length;l+=2)ee[l][0](ee[l+1]);ee.length=0}}}function u(f){i(f(e))}function a(f,s=ne){const l=[f,s];return r.add(l),r.size===1&&(t=n(i,u)||ne),f(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:i,update:u,subscribe:a}}function er(e){let n;return Xn(e,t=>n=t)(),n}let he=!1,He=Symbol();function Wr(e,n,t){const r=t[n]??(t[n]={store:null,source:Kn(void 0),unsubscribe:ne});if(r.store!==e&&!(He in t))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=ne;else{var i=!0;r.unsubscribe=Xn(e,u=>{i?r.source.v=u:S(r.source,u)}),i=!1}return e&&He in t?er(e):w(r.source)}function zr(){const e={};function n(){We(()=>{for(var t in e)e[t].unsubscribe();bn(e,He,{enumerable:!1,value:!0})})}return[e,n]}function nr(e){var n=he;try{return he=!1,[e(),he]}finally{he=n}}const tr={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Zr(e,n,t){return new Proxy({props:e,exclude:n},tr)}const rr={get(e,n){if(!e.exclude.includes(n))return w(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=ir({get[n](){return e.props[n]}},n,hn)),e.special[n](t),fn(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),fn(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Xr(e,n){return new Proxy({props:e,exclude:n,special:{},version:Re(0)},rr)}const ur={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ae(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ae(i)&&(i=i());const u=Y(i,n);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ae(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Y(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===q||n===Tn)return!1;for(let t of e.props)if(ae(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){ae(t)&&(t=t());for(const r in t)n.includes(r)||n.push(r)}return n}};function Jr(...e){return new Proxy({props:e},ur)}function dn(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function ir(e,n,t,r){var Je;var i=(t&nt)!==0,u=!ve||(t&tt)!==0,a=(t&rt)!==0,f=(t&ut)!==0,s=!1,l;a?[l,s]=nr(()=>e[n]):l=e[n];var _=q in e||Tn in e,o=a&&(((Je=Y(e,n))==null?void 0:Je.set)??(_&&n in e&&(b=>e[n]=b)))||void 0,c=r,v=!0,g=!1,y=()=>(g=!0,v&&(v=!1,f?c=K(r):c=r),c);l===void 0&&r!==void 0&&(o&&u&&bt(),l=y(),o&&o(l));var O;if(u)O=()=>{var b=e[n];return b===void 0?y():(v=!0,g=!1,b)};else{var B=(i?re:Tt)(()=>e[n]);B.f|=mn,O=()=>{var b=w(B);return b!==void 0&&(c=void 0),b===void 0?c:b}}if((t&hn)===0)return O;if(o){var G=e.$$legacy;return function(b,J){return arguments.length>0?((!u||!J||G||s)&&o(J?O():b),b):O()}}var L=!1,Me=!1,pe=Kn(l),M=re(()=>{var b=O(),J=w(pe);return L?(L=!1,Me=!0,J):(Me=!1,pe.v=b)});return a&&w(M),i||(M.equals=Ge),function(b,J){if(V!==null&&(L=Me,O(),w(pe)),arguments.length>0){const Fe=J?w(M):u&&a?W(b):b;if(!M.equals(Fe)){if(L=!0,S(pe,Fe),g&&c!==void 0&&(c=Fe),dn(M))return b;K(()=>w(M))}return b}return dn(M)?M.v:w(M)}}export{W as $,Rn as A,ze as B,K as C,Rt as D,lt as E,p as F,gn as G,un as H,hr as I,ve as J,Gr as K,zr as L,Wr as M,U as N,xr as O,Tr as P,$t as Q,pr as R,q as S,vr as T,yn as U,ft as V,Ze as W,Ne as X,Ee as Y,Z,Dr as _,Br as a,Cr as a0,Ir as a1,Zr as a2,Vr as a3,Hr as a4,$e as a5,fr as a6,ln as a7,me as a8,te as a9,Lr as aA,fn as aB,rn as aC,Nr as aD,Sr as aE,Or as aF,lr as aG,dr as aH,at as aa,h as ab,sr as ac,Be as ad,ar as ae,Re as af,or as ag,qn as ah,Er as ai,Dt as aj,Ke as ak,cr as al,_n as am,Ye as an,vt as ao,_r as ap,Wn as aq,ae as ar,R as as,$ as at,d as au,Rr as av,Le as aw,Y as ax,We as ay,wr as az,Gt as b,Jr as c,jr as d,Ar as e,br as f,Ur as g,Pr as h,Kr as i,gr as j,kr as k,w as l,Tt as m,ne as n,ir as o,Kt as p,qr as q,Yr as r,yr as s,Fr as t,Xr as u,S as v,Kn as w,$r as x,mr as y,Mr as z};
