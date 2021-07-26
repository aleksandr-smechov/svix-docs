(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[54],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return t?r.createElement(v,a(a({ref:n},m),{},{components:t})):r.createElement(v,a({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8981:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(4786),o=t(6843),i=(t(7294),t(3905)),a={title:"Managing Environments"},s=void 0,l={unversionedId:"account/environments",id:"account/environments",isDocsHomePage:!1,title:"Managing Environments",description:"This section explains how to add and use multiple environments (e.g. dev, staging and prod) from the same account.",source:"@site/docs/account/environments.mdx",sourceDirName:"account",slug:"/account/environments",permalink:"/account/environments",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/account/environments.mdx",version:"current",frontMatter:{title:"Managing Environments"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/account/overview"},next:{title:"Managing Member Access",permalink:"/account/org-members"}},c=[{value:"What are environments",id:"what-are-environments",children:[]},{value:"Managing environments",id:"managing-environments",children:[{value:"Add environments",id:"add-environments",children:[]},{value:"View environments",id:"view-environments",children:[]}]}],m={toc:c};function u(e){var n=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section explains how to add and use multiple environments (e.g. dev, staging and prod) from the same account."),(0,i.kt)("h2",{id:"what-are-environments"},"What are environments"),(0,i.kt)("p",null,"It's common practice for engineering teams to have multiple environments, such as development, staging and production. The idea behind having multiple environments is to be able to test changes in isolation and catch issues before they hit production. So for example, a developer may make some changes locally, test them, and push them for testing in CI/CD. Following that, the change will be moved to a shared ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," environment where it would be tested by the wider team. Changes that pass this level of testing will move to ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),", where they are deployed to an environment that's as similar as possible to the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environment, and after all testing pass there they would be deployed to ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," and rolled out to users."),(0,i.kt)("p",null,"Not all teams go through all of the steps above (and some go through more), but the idea remains the same: you want to isolate your ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environment, where real user data lies, from your non-production environments that may contain bugs and regressions."),(0,i.kt)("h2",{id:"managing-environments"},"Managing environments"),(0,i.kt)("p",null,"Each environment is completely isolated, and has completely separate data, settings and API keys."),(0,i.kt)("p",null,"You can create as many environments as you want, to do it just go to the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.svix.com/environments"},"environment management page")," on the dashboard."),(0,i.kt)("h3",{id:"add-environments"},"Add environments"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"New Environment"),", choose a name and mark the environment as either ",(0,i.kt)("inlineCode",{parentName:"p"},"Development")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Production"),". At the moment this tag is only used for visual purposes, though in the near future it will also have functional implications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New environment",src:t(2789).Z})),(0,i.kt)("h3",{id:"view-environments"},"View environments"),(0,i.kt)("p",null,"This is how it looks like after adding multiple environments:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manage environments",src:t(417).Z})),(0,i.kt)("p",null,"You can then switch between the active environment using the switcher on the top left corner and just start using that environment like you used your account before."))}u.isMDXComponent=!0},2789:function(e,n,t){"use strict";n.Z=t.p+"assets/images/env-add-15d5b9ed6519153691e5c84657f94bb2.png"},417:function(e,n,t){"use strict";n.Z=t.p+"assets/images/env-manage-0ebb89772a2627c1c0a0f35da9e2da55.png"}}]);