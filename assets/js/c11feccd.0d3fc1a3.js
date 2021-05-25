(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[451],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var l=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,p=e.groupId,f=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,y=(0,r.useState)(l),b=y[0],g=y[1],w=r.Children.toArray(e.children),k=[];if(null!=p){var x=v[p];null!=x&&x!==b&&d.some((function(e){return e.value===x}))&&g(x)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),r=d[n].value;g(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,o,i,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};function d(e){var t=e.children;return r.createElement(l,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"curl"}]},t)}},5672:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=n(4786),a=n(6843),o=(n(7294),n(3905)),i=n(9287),s=n(8215),u=n(4996),c={title:"Management UI"},l={unversionedId:"management-ui",id:"management-ui",isDocsHomePage:!1,title:"Management UI",description:"Svix comes with a management UI for your users that you can use out of the box. Your users can then use it to add endpoints, debug delivery, as well as inspect and replay past webhooks. This is the easiest way to get started, but you can alternatively use the API to build your own.",source:"@site/docs/management-ui.mdx",sourceDirName:".",slug:"/management-ui",permalink:"/management-ui",version:"current",frontMatter:{title:"Management UI"},sidebar:"someSidebar",previous:{title:"Verifying Payloads",permalink:"/receiving/verifying-payloads"},next:{title:"Get Help & Chat With Us",permalink:"/get-help"}},d=[{value:"Giving your users access",id:"giving-your-users-access",children:[]}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Svix comes with a management UI for your users that you can use out of the box. Your users can then use it to add endpoints, debug delivery, as well as inspect and replay past webhooks. This is the easiest way to get started, but you can alternatively use the API to build your own."),(0,o.kt)("p",null,"Here is how it looks like:"),(0,o.kt)("img",{alt:"Management UI screenshot",src:(0,u.Z)("img/attempts.png")}),(0,o.kt)("h2",{id:"giving-your-users-access"},"Giving your users access"),(0,o.kt)("p",null,"To give your users access to the admin UI, just use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.svix.com/docs#/authentication/get_dashboard_access_api_v1_auth_dashboard_access__app_id___post"},"dashboard access endpoint"),". Calling this endpoint with an ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),", returns a url you can just redirect your users to in order to log them into the admin UI. They will stay logged in for a few days or until they log out."),(0,o.kt)(i.Z,{mdxType:"CodeTabs"},(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const svix = new Svix("AUTH_TOKEN");\nconst dashboard = await svix.authentication.dashboardAccess("app_Xzx8bQeOB1D1XEYmAJaRGoj0");\n// A URL that automatically logs user into the dashboard\nconsole.log(dashboard.url);\n'))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'svix = Svix("AUTH_TOKEN")\ndashboard = svix.authentication.dashboardAccess("app_Xzx8bQeOB1D1XEYmAJaRGoj0")\n# A URL that automatically logs user into the dashboard\nprint(dashboard.url)\n'))),(0,o.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "https://api.svix.com/api/v1/auth/dashboard_access/app_Xzx8bQeOB1D1XEYmAJaRGoj0/" \\\n    -H  "Accept: application/json" \\\n    -H  "Authorization:  Bearer AUTH_TOKEN"\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);