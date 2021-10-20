(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[323],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,v=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var f=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,f=e.values,p=e.groupId,d=e.className,v=i(),y=v.tabGroupChoices,m=v.setTabGroupChoices,h=(0,n.useState)(a),b=h[0],g=h[1],w=n.Children.toArray(e.children),k=[];if(null!=p){var O=y[p];null!=O&&O!==b&&f.some((function(e){return e.value===O}))&&g(O)}var T=function(e){var t=e.currentTarget,r=k.indexOf(t),n=f[r].value;g(n),null!=p&&(m(p,n),setTimeout((function(){var e,r,n,a,i,o,c,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,r>=0&&i<=l&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case l:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:T,onClick:T},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},7275:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(5064);function i(e){var t=e.children,r=e.additionalTabs,i=void 0===r?[]:r;return n.createElement(a.Z,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"},{label:"Ruby",value:"ruby"}].concat(i,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},t)}},1439:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(4786),a=r(6843),i=(r(7294),r(3905)),o=(r(7275),r(8215),{title:"Why Verify"}),c=void 0,s={unversionedId:"receiving/verifying-payloads/why",id:"receiving/verifying-payloads/why",isDocsHomePage:!1,title:"Why Verify",description:"Because of the way webhooks work, attackers can impersonate services by simply sending a fake webhook to an endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems.",source:"@site/docs/receiving/verifying-payloads/why.mdx",sourceDirName:"receiving/verifying-payloads",slug:"/receiving/verifying-payloads/why",permalink:"/receiving/verifying-payloads/why",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/receiving/verifying-payloads/why.mdx",version:"current",frontMatter:{title:"Why Verify"},sidebar:"consumersSidebar",previous:{title:"Introduction",permalink:"/receiving/introduction"},next:{title:"How to Verify",permalink:"/receiving/verifying-payloads/how"}},l=[],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Because of the way webhooks work, attackers can impersonate services by simply sending a fake webhook to an endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems."),(0,i.kt)("p",null,"In order to prevent it, Svix signs every webhook and its metadata with a unique key for each endpoint. This signature can then be used to verify the webhook indeed comes from Svix, and only process it if it is."),(0,i.kt)("p",null,"Another potential security hole is what's called replay attacks. A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"replay attack")," is when an attacker intercepts a valid payload (including the signature), and re-transmits it to your endpoint. This payload will pass signature validation, and will therefore be acted upon."),(0,i.kt)("p",null,"To mitigate this attack, Svix includes a timestamp for when the webhook attempt occurred. Our libraries automatically reject webhooks with a timestamp that are more than five minutes away (past or future) from the current time. This requires your server's clock to be synchronised and accurate, and it's recommended that you use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"NTP")," to achieve this."))}f.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);