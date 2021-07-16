(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[36],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2401:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(4786),a=n(6843),o=(n(7294),n(3905)),i={title:"Managing Member Access"},s={unversionedId:"account/org-members",id:"account/org-members",isDocsHomePage:!1,title:"Managing Member Access",description:"This section explains how to manage access to your organization's account. You can easily give your teammates access, manage it, and invite new team members.",source:"@site/docs/account/org-members.mdx",sourceDirName:"account",slug:"/account/org-members",permalink:"/account/org-members",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/account/org-members.mdx",version:"current",frontMatter:{title:"Managing Member Access"},sidebar:"mainSidebar",previous:{title:"Managing Environments",permalink:"/account/environments"},next:{title:"Retry Schedule",permalink:"/account/retries"}},c=[{value:"Managing members",id:"managing-members",children:[{value:"Invite a user",id:"invite-a-user",children:[]},{value:"View members",id:"view-members",children:[]}]}],m={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains how to manage access to your organization's account. You can easily give your teammates access, manage it, and invite new team members."),(0,o.kt)("h2",{id:"managing-members"},"Managing members"),(0,o.kt)("p",null,"There are currently two supported roles ",(0,o.kt)("inlineCode",{parentName:"p"},"Member")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin"),". A member can control most aspects of the account, including applications, endpoints and event types. An admin can do all of that, and also manage members."),(0,o.kt)("p",null,"You can invite as many members as you want to your organization, so feel free to invite all of your team. To do it, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.staging.svix.com/settings/organization/members"},"organization members page")," on the dashboard."),(0,o.kt)("h3",{id:"invite-a-user"},"Invite a user"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Invite Teammates"),", put in the email address of the teammate you would like to invite, and choose the appropriate role."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New member",src:n(3944).Z})),(0,o.kt)("h3",{id:"view-members"},"View members"),(0,o.kt)("p",null,"This is how it looks like after you've sent some invitations:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manage members",src:n(6367).Z})),(0,o.kt)("p",null,"You can then add more members, manage access and manage invitations directly from this page."))}u.isMDXComponent=!0},3944:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-member-f34a8666ff63c3803b12d7328dfddca8.png"},6367:function(e,t,n){"use strict";t.Z=n.p+"assets/images/manage-members-ff05e07267698fe79823a920431f6d9f.png"}}]);