(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[770],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6008:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(4786),o=n(6843),i=(n(7294),n(3905)),a={title:"Retry Schedule"},l=void 0,c={unversionedId:"account/retries",id:"account/retries",isDocsHomePage:!1,title:"Retry Schedule",description:"Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff.",source:"@site/docs/account/retries.mdx",sourceDirName:"account",slug:"/account/retries",permalink:"/account/retries",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/account/retries.mdx",version:"current",frontMatter:{title:"Retry Schedule"},sidebar:"mainSidebar",previous:{title:"Managing Member Access",permalink:"/account/org-members"},next:{title:"Consuming Webhooks",permalink:"/consuming-webhooks"}},u=[{value:"The schedule",id:"the-schedule",children:[]},{value:"Failed delivery handling",id:"failed-delivery-handling",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff."),(0,i.kt)("h2",{id:"the-schedule"},"The schedule"),(0,i.kt)("p",null,"Each message is attempted based on this schedule:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Immediately"),(0,i.kt)("li",{parentName:"ul"},"5 seconds"),(0,i.kt)("li",{parentName:"ul"},"5 minutes"),(0,i.kt)("li",{parentName:"ul"},"30 minutes"),(0,i.kt)("li",{parentName:"ul"},"2 hours"),(0,i.kt)("li",{parentName:"ul"},"5 hours"),(0,i.kt)("li",{parentName:"ul"},"10 hours"),(0,i.kt)("li",{parentName:"ul"},"10 hours")),(0,i.kt)("p",null,"Your customers can also manually retry each message at any time from the application portal. Additionally, if an endpoint is removed or disabled delivery attempts to the endpoint will be disabled as well."),(0,i.kt)("h2",{id:"failed-delivery-handling"},"Failed delivery handling"),(0,i.kt)("p",null,"After the conclusion of the above attempts the message will be marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"Failed")," for this endpoint, and you will get a webhook of type ",(0,i.kt)("inlineCode",{parentName:"p"},"message.attempt.exhausted")," notifying you of this error."))}p.isMDXComponent=!0}}]);