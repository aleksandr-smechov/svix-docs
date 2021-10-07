(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[494],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9665:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=n(4786),o=n(6843),i=(n(7294),n(3905)),c={title:"Source IP Addresses"},a=void 0,s={unversionedId:"receiving/source-ips",id:"receiving/source-ips",isDocsHomePage:!1,title:"Source IP Addresses",description:"In case your webhook receiving endpoint is behind a firewall or NAT, you may need to allow traffic from Svix's IP addresses.",source:"@site/docs/receiving/source-ips.mdx",sourceDirName:"receiving",slug:"/receiving/source-ips",permalink:"/receiving/source-ips",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/receiving/source-ips.mdx",version:"current",frontMatter:{title:"Source IP Addresses"},sidebar:"consumersSidebar",previous:{title:"Verifying Manually",permalink:"/receiving/verifying-payloads/how-manual"}},u=[],l={toc:u};function p(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In case your webhook receiving endpoint is behind a firewall or NAT, you may need to allow traffic from Svix's IP addresses."),(0,i.kt)("p",null,"This is the full list of IP addresses that webhooks may originate from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"54.216.8.72\n54.173.54.49\n52.215.16.239\n52.55.123.25\n52.6.93.106\n63.33.109.123\n")))}p.isMDXComponent=!0}}]);