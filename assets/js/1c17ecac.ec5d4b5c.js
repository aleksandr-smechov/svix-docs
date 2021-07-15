(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[259],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(f,a(a({ref:t},l),{},{components:o})):n.createElement(f,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9183:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=o(4786),r=o(6843),i=(o(7294),o(3905)),a={title:"Consuming Webhooks"},s={unversionedId:"consuming-webhooks",id:"consuming-webhooks",isDocsHomePage:!1,title:"Consuming Webhooks",description:"In addition to helping you send webhooks to your users, we also help your users to easily verify the authenticity and security of the webhooks they receive from you.",source:"@site/docs/consuming-webhooks.mdx",sourceDirName:".",slug:"/consuming-webhooks",permalink:"/consuming-webhooks",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/consuming-webhooks.mdx",version:"current",frontMatter:{title:"Consuming Webhooks"},sidebar:"mainSidebar",previous:{title:"Retry Schedule",permalink:"/account/retries"},next:{title:"Getting Started with the CLI",permalink:"/tutorials/cli"}},u=[{value:"Documentation for your users",id:"documentation-for-your-users",children:[]},{value:"Building your own libraries",id:"building-your-own-libraries",children:[]}],c={toc:u};function l(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to helping you send webhooks to your users, we also help your users to easily verify the authenticity and security of the webhooks they receive from you."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For information on how to verify webhooks, please head to the ",(0,i.kt)("a",{parentName:"p",href:"/receiving/introduction"},"Consuming Webhooks documentation"),"."))),(0,i.kt)("h2",{id:"documentation-for-your-users"},"Documentation for your users"),(0,i.kt)("p",null,"We offer easy to use docs for how to safely consume webhooks which you can share with your users directly: ",(0,i.kt)("a",{parentName:"p",href:"/receiving/introduction"},"Consuming Webhooks documentation"),"."),(0,i.kt)("h2",{id:"building-your-own-libraries"},"Building your own libraries"),(0,i.kt)("p",null,"Depending on your product you may want to offer additional processing before passing the verified payload for your customers. For example, you may want to create API objects from the payload that your users can use to interact with your API."),(0,i.kt)("p",null,"In this scenario you would want to create your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Webhook")," class equivalent that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Svix")," class internally. This way you can get all of the verification that Svix offer, while still being able to post-process the payload before passing it to your users."))}l.isMDXComponent=!0}}]);