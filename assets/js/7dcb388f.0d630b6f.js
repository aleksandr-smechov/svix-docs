(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[673],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5710:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(4786),r=n(6843),a=(n(7294),n(3905)),i={title:"Svix Play - webhook debugger"},l=void 0,s={unversionedId:"play",id:"play",isDocsHomePage:!1,title:"Svix Play - webhook debugger",description:"You can use the Svix Play webhook playground and debugger to easily inspect, test and debug incoming webhooks.",source:"@site/docs/play.mdx",sourceDirName:".",slug:"/play",permalink:"/play",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/play.mdx",version:"current",frontMatter:{title:"Svix Play - webhook debugger"},sidebar:"mainSidebar",previous:{title:"Consuming Webhooks",permalink:"/consuming-webhooks"},next:{title:"Get Help & Chat With Us",permalink:"/get-help"}},u=[{value:"Echo mode (normal)",id:"echo-mode-normal",children:[]},{value:"Relay mode (Svix CLI)",id:"relay-mode-svix-cli",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[{value:"Custom response codes",id:"custom-response-codes",children:[]}]}],c={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.svix.com/play/"},"Svix Play webhook playground and debugger")," to easily inspect, test and debug incoming webhooks."),(0,a.kt)("p",null,"It's a very useful tool for anyone developing webhooks - for both senders and consumers. More so, it's available to everyone for free, not just users of Svix!"),(0,a.kt)("h2",{id:"echo-mode-normal"},"Echo mode (normal)"),(0,a.kt)("p",null,"To use echo mode, just open the ",(0,a.kt)("a",{parentName:"p",href:"https://www.svix.com/play/"},"Svix play homepage")," and click on the Svix play URL."),(0,a.kt)("p",null,"You'd then be redirected to the main Svix play page, where you can copy your unique webhook URL and start sending it requests. Every request sent to this URL will respond with a successful ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")," response, and will be visible in the UI for you to inspect."),(0,a.kt)("p",null,"This is how it looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Svix play",src:n(8655).Z})),(0,a.kt)("h2",{id:"relay-mode-svix-cli"},"Relay mode (Svix CLI)"),(0,a.kt)("p",null,"In relay mode you can use the Svix CLI for a free and secure public URL that relays requests to your local development server. All of these requests are then viewable in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.svix.com/play/"},"Svix Play webhook debugger")," UI."),(0,a.kt)("p",null,"All you have to do is install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli"},"Svix CLI")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"svix listen")," as shown here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ svix listen http://localhost:8080/webhook/\n\nWebhook relay is now listening at\nhttps://play.svix.com/in/e_94XdF-OwN3EaTKty4izJDWRAH3V/\n\nAll requests on this endpoint will be forwarded to your local URL:\nhttp://localhost:8080/webhook/\n")),(0,a.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,a.kt)("h3",{id:"custom-response-codes"},"Custom response codes"),(0,a.kt)("p",null,"Under normal usage, Svix play (in echo mode) automatically returns successful responses to every request with the HTTP response code ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK"),"."),(0,a.kt)("p",null,"However, in some cases you may want to check how your webhook system responds to failures. For example, does auto-retry work? Are errors properly handled?"),(0,a.kt)("p",null,"To enable that, Svix Play supports returning custom error codes by appending the status code to the URL."),(0,a.kt)("p",null,"For example, if you URL was:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://play.svix.com/in/e_94XdF-OwN3EaTKty4izJDWRAH3V/\n")),(0,a.kt)("p",null,"You can change it to the following URL in order to make it always return ",(0,a.kt)("inlineCode",{parentName:"p"},"404 Not Found"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://play.svix.com/in/e_94XdF-OwN3EaTKty4izJDWRAH3V/404/\n")))}p.isMDXComponent=!0},8655:function(e,t,n){"use strict";t.Z=n.p+"assets/images/svix-play-f41f7cdc35bcb54b90502e88574f3aab.png"}}]);