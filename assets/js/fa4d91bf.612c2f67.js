(self.webpackChunkdiahook_docs=self.webpackChunkdiahook_docs||[]).push([[930],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),h=d.tabGroupChoices,v=d.setTabGroupChoices,b=(0,r.useState)(s),y=b[0],k=b[1],g=r.Children.toArray(e.children),w=[];if(null!=m){var O=h[m];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&k(O)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;k(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,i,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};function p(e){var t=e.children;return r.createElement(s,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"curl"}]},t)}},7603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(4786),a=n(6843),o=(n(7294),n(3905)),i=n(9287),l=n(8215),c={title:"Installation"},u={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"When working with Diahook you can either use our REST API directly, or using any of our libraries. In this document we'll cover how to install them for each platform.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/installation",version:"current",frontMatter:{title:"Installation"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/overview"},next:{title:"Quickstart",permalink:"/quickstart"}},s=[{value:"Install the libraries",id:"install-the-libraries",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When working with Diahook you can either use our ",(0,o.kt)("a",{parentName:"p",href:"https://api.diahook.com/docs"},"REST API")," directly, or using any of our libraries. In this document we'll cover how to install them for each platform."),(0,o.kt)("h2",{id:"install-the-libraries"},"Install the libraries"),(0,o.kt)(i.Z,{mdxType:"CodeTabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install diahook\n// Or\nyarn add diahook\n"))),(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install diahook\n"))),(0,o.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install cURL. E.g. on arch linux:\npacman -S curl\n# Or on macOS\nbrew install curl\n")))),(0,o.kt)("p",null,"Then you can just use them as follows"),(0,o.kt)(i.Z,{mdxType:"CodeTabs"},(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Diahook } from "diahook";\n\nconst dh = new Diahook("AUTH_TOKEN");\nconst app = await dh.application.create({name: "Application name"});\n'))),(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from diahook import Diahook, ApplicationIn\n\ndh = Diahook("AUTH_TOKEN)\napp = dh.application.create(ApplicationIn(name="Application name")\n'))),(0,o.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("h1",{id:"nothing-to-do"},"Nothing to do."))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);