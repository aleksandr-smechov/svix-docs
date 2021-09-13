(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[770],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6008:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(4786),i=r(6843),a=(r(7294),r(3905)),o={title:"Retry Schedule"},l=void 0,c={unversionedId:"account/retries",id:"account/retries",isDocsHomePage:!1,title:"Retry Schedule",description:"Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff.",source:"@site/docs/account/retries.mdx",sourceDirName:"account",slug:"/account/retries",permalink:"/account/retries",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/account/retries.mdx",version:"current",frontMatter:{title:"Retry Schedule"},sidebar:"mainSidebar",previous:{title:"Managing Member Access",permalink:"/account/org-members"},next:{title:"Getting Started with the CLI",permalink:"/tutorials/cli"}},u=[{value:"The schedule",id:"the-schedule",children:[]},{value:"Failed delivery handling",id:"failed-delivery-handling",children:[]}],s={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff."),(0,a.kt)("h2",{id:"the-schedule"},"The schedule"),(0,a.kt)("p",null,"Each message is attempted based on this schedule:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Immediately"),(0,a.kt)("li",{parentName:"ul"},"5 seconds"),(0,a.kt)("li",{parentName:"ul"},"5 minutes"),(0,a.kt)("li",{parentName:"ul"},"30 minutes"),(0,a.kt)("li",{parentName:"ul"},"2 hours"),(0,a.kt)("li",{parentName:"ul"},"5 hours"),(0,a.kt)("li",{parentName:"ul"},"10 hours"),(0,a.kt)("li",{parentName:"ul"},"10 hours (in addition to the previous)")),(0,a.kt)("p",null,"Your customers can also manually retry each message at any time from the application portal. Additionally, if an endpoint is removed or disabled delivery attempts to the endpoint will be disabled as well."),(0,a.kt)("h2",{id:"failed-delivery-handling"},"Failed delivery handling"),(0,a.kt)("p",null,"After the conclusion of the above attempts the message will be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"Failed")," for this endpoint, and you will get a webhook of type ",(0,a.kt)("inlineCode",{parentName:"p"},"message.attempt.exhausted")," notifying you of this error."))}p.isMDXComponent=!0}}]);