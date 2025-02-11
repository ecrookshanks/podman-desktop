import{N as i,r as p,D as T}from"./DocsRenderer-CFRXHY34-Cj479XhX.js";import{g as j}from"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DhvimCFa.js";import"./index-Cu4lwwaE.js";import"./index-BCI4JQNS.js";import"./index-ogSvIofg.js";var _="DARK_MODE",d,b;function R(){return b||(b=1,d=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var n,a,o;if(Array.isArray(r)){if(n=r.length,n!=e.length)return!1;for(a=n;a--!==0;)if(!t(r[a],e[a]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(o=Object.keys(r),n=o.length,n!==Object.keys(e).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[a]))return!1;for(a=n;a--!==0;){var u=o[a];if(!t(r[u],e[u]))return!1}return!0}return r!==r&&e!==e}),d}var M=R();const D=j(M);function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(t)}var y;function w(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function P(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?w(Object(e),!0).forEach(function(n){I(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function I(t,r,e){return r=N(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function N(t){var r=q(t,"string");return l(r)==="symbol"?r:String(r)}function q(t,r){if(l(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r);if(l(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function s(t){return L(t)||B(t)||K(t)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(t,r){if(t){if(typeof t=="string")return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,r)}}function B(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L(t){if(Array.isArray(t))return g(t)}function g(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const{global:Y}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:X,SET_STORIES:Z,DOCS_RENDERED:rr}=__STORYBOOK_MODULE_CORE_EVENTS__;var C=Y,U=C.document,c=C.window,A="sb-addon-themes-3";(y=c.matchMedia)===null||y===void 0||y.call(c,"(prefers-color-scheme: dark)");var m={classTarget:"body",dark:i.dark,darkClass:["dark"],light:i.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},k=function(r){c.localStorage.setItem(A,JSON.stringify(r))},F=function(r,e){var n=e.current,a=e.darkClass,o=a===void 0?m.darkClass:a,u=e.lightClass,O=u===void 0?m.lightClass:u;if(n==="dark"){var v,h;(v=r.classList).remove.apply(v,s(f(O))),(h=r.classList).add.apply(h,s(f(o)))}else{var S,E;(S=r.classList).remove.apply(S,s(f(o))),(E=r.classList).add.apply(E,s(f(O)))}},f=function(r){var e=[];return e.concat(r).map(function(n){return n})},G=function(r){var e=U.querySelector(r.classTarget);e&&F(e,r)},H=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.localStorage.getItem(A);if(typeof e=="string"){var n=JSON.parse(e);return r&&(r.dark&&!D(n.dark,r.dark)&&(n.dark=r.dark,k(n)),r.light&&!D(n.light,r.light)&&(n.light=r.light,k(n))),n}return P(P({},m),r)};G(H());const{addons:tr,useState:er,useEffect:nr}=__STORYBOOK_MODULE_PREVIEW_API__,ar={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},darkMode:{current:"light",darkClass:"dark",lightClass:"light",dark:{...i.dark,appPreviewBg:"transparent"},light:{...i.light,appPreviewBg:"transparent"},stylePreview:!0},docs:{container:t=>{const[r,e]=p.useState(!0);p.useEffect(()=>(t.context.channel.on(_,e),()=>t.context.channel.removeListener(_,e)),[t.context.channel]);const n={...t};return n.theme=r?i.dark:i.light,p.createElement(T,n)}}}};export{ar as default};
