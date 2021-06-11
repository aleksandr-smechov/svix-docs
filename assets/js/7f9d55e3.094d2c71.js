(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[442],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=c(n),d=a,m=v["".concat(u,".").concat(d)]||v[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var l=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,v=e.groupId,d=e.className,m=(0,a.Z)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,y=(0,r.useState)(l),h=y[0],b=y[1],k=r.Children.toArray(e.children),x=[];if(null!=v){var T=f[v];null!=T&&T!==h&&p.some((function(e){return e.value===T}))&&b(T)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;b(r),null!=v&&(g(v,r),setTimeout((function(){var e,n,r,a,i,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case u:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};function p(e){var t=e.children,n=e.additionalTabs,a=void 0===n?[]:n;return r.createElement(l,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"}].concat(a,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},t)}},4431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(4786),a=n(6843),i=(n(7294),n(3905)),o=n(4996),s=n(9287),u=n(8215),c={title:"Event Types"},l={unversionedId:"event-types",id:"event-types",isDocsHomePage:!1,title:"Event Types",description:"Each message sent through Svix has an associated event type.",source:"@site/docs/event-types.mdx",sourceDirName:".",slug:"/event-types",permalink:"/event-types",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/event-types.mdx",version:"current",frontMatter:{title:"Event Types"},sidebar:"mainSidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Management UI",permalink:"/management-ui"}},p=[{value:"Using event types",id:"using-event-types",children:[]}],v={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each message sent through Svix has an associated event type.\nEvent types are identifiers denoting the type of the message being sent."),(0,i.kt)("p",null,"Event types are just string, and can be anything. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"user.signup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"invoice.paid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow.completed"),"."),(0,i.kt)("p",null,"Event types are primarily used to decide which events are sent to which endpoint. By default, all messages are sent to all endpoints. Though when adding or editing endpoints, users can choose to only subscribe to some of the event types for this particular endpoint."),(0,i.kt)("p",null,"This is how it looks like in the ",(0,i.kt)("a",{parentName:"p",href:"/management-ui"},"pre-built management UI"),":"),(0,i.kt)("img",{alt:"Management UI screenshot",src:(0,o.Z)("img/event-types-ui.png")}),(0,i.kt)("h2",{id:"using-event-types"},"Using event types"),(0,i.kt)("p",null,"You can add, edit, and delete event types in ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.svix.com"},"the dashboard")," or through the API below."),(0,i.kt)(s.Z,{mdxType:"CodeTabs"},(0,i.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Svix } from "svix";\n\nconst svix = new Svix("AUTH_TOKEN");\nconst eventType = await api.eventType.create({\n    name: "user.signup",\n    description: "A user has signed up"\n});\n'))),(0,i.kt)(u.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from svix import Svix, EventTypeIn\n\nsvix = Svix("AUTH_TOKEN")\napp = svix.application.create(EventTypeIn(\n    name="user.signup",\n    description="A user has signed up"\n))\n'))),(0,i.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svix/svix-libs/go"\n)\n\nsvixClient := svix.New("AUTH_TOKEN", nil)\napp, err := svixClient.EventType.Create(&svix.EventTypeIn{\n    Name: "user.signup",\n    Description: "A user has signed up",\n})}\n'))),(0,i.kt)(u.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN=\'AUTH_TOKEN\'\nsvix event-type create \'{ "name": "user.signup", "description": "A user has signed up" }\'\n'))),(0,i.kt)(u.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "https://api.svix.com/api/v1/event-type/" \\\n    -H  "Accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -H  "Authorization: Bearer AUTH_TOKEN" \\\n    -d \'{ "name": "user.signup", "description": "A user has signed up" }\'\n')))))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);