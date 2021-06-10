(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[323],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),a=r(944),i=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var l=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,p=e.values,f=e.groupId,d=e.className,y=(0,a.Z)(),m=y.tabGroupChoices,v=y.setTabGroupChoices,h=(0,n.useState)(l),b=h[0],g=h[1],w=n.Children.toArray(e.children),k=[];if(null!=f){var O=m[f];null!=O&&O!==b&&p.some((function(e){return e.value===O}))&&g(O)}var T=function(e){var t=e.currentTarget,r=k.indexOf(t),n=p[r].value;g(n),null!=f&&(v(f,n),setTimeout((function(){var e,r,n,a,i,o,s,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,r>=0&&i<=u&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case s:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:T,onClick:T},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};function p(e){var t=e.children,r=e.additionalTabs,a=void 0===r?[]:r;return n.createElement(l,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"}].concat(a,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},t)}},1439:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(4786),a=r(6843),i=(r(7294),r(3905)),o=(r(9287),r(8215),{title:"Why Verify"}),c={unversionedId:"receiving/verifying-payloads/why",id:"receiving/verifying-payloads/why",isDocsHomePage:!1,title:"Why Verify",description:"Because of the way webhooks work, anyone can impersonate your service by sending a webhook to your endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems.",source:"@site/docs/receiving/verifying-payloads/why.mdx",sourceDirName:"receiving/verifying-payloads",slug:"/receiving/verifying-payloads/why",permalink:"/receiving/verifying-payloads/why",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/receiving/verifying-payloads/why.mdx",version:"current",frontMatter:{title:"Why Verify"},sidebar:"consumersSidebar",previous:{title:"Introduction",permalink:"/receiving/introduction"},next:{title:"How to Verify",permalink:"/receiving/verifying-payloads/how"}},s=[],u={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Because of the way webhooks work, anyone can impersonate your service by sending a webhook to your endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems."),(0,i.kt)("p",null,"In order to prevent it, Svix signs every webhook and its metadata with a unique key for each endpoint. This signature can then be used to verify the webhook indeed comes from Svix, and only process it if it is."),(0,i.kt)("p",null,"Another potential security hole is what's called replay attacks. A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"replay attack")," is when an attacker intercepts a valid payload (including the signature), and re-transmits it to your endpoint. This payload will pass signature validation, and will therefore be acted upon."),(0,i.kt)("p",null,"To mitigate this attack, Svix includes a timestamp for when the webhook attempt occurred. Our libraries automatically reject webhooks with a timestamp that are more than five minutes away (past or future) from the current time. This requires your server's clock to be synchronised and accurate, and it's recommended that you use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"NTP")," to achieve this."))}l.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);