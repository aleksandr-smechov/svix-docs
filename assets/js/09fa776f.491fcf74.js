(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[810],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),f=h.tabGroupChoices,y=h.setTabGroupChoices,g=(0,a.useState)(c),v=g[0],k=g[1],b=a.Children.toArray(e.children),w=[];if(null!=d){var x=f[d];null!=x&&x!==v&&p.some((function(e){return e.value===x}))&&k(x)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;k(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};function p(e){var t=e.children;return a.createElement(c,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"cURL",value:"curl"}]},t)}},2900:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(4786),r=n(6843),i=(n(7294),n(3905)),o=n(9287),s=n(8215),l={title:"Verifying Payloads"},u={unversionedId:"receiving/verifying-payloads",id:"receiving/verifying-payloads",isDocsHomePage:!1,title:"Verifying Payloads",description:"Because of the way webhooks work, anyone can impersonate your service by sending a webhook to your endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems.",source:"@site/docs/receiving/verifying-payloads.mdx",sourceDirName:"receiving",slug:"/receiving/verifying-payloads",permalink:"/receiving/verifying-payloads",version:"current",frontMatter:{title:"Verifying Payloads"},sidebar:"someSidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Management UI",permalink:"/management-ui"}},c=[{value:"Verifying signatures using our official libraries",id:"verifying-signatures-using-our-official-libraries",children:[]},{value:"Verifying signatures manually",id:"verifying-signatures-manually",children:[{value:"Constructing the signed content",id:"constructing-the-signed-content",children:[]},{value:"Determining the expected signature",id:"determining-the-expected-signature",children:[]},{value:"Verify timestamp",id:"verify-timestamp",children:[]}]},{value:"Building your own libraries",id:"building-your-own-libraries",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Because of the way webhooks work, anyone can impersonate your service by sending a webhook to your endpoint. Think about it: it's just an HTTP POST from an unknown source. This is a potential security hole for many applications, or at the very least, a source of problems."),(0,i.kt)("p",null,"In order to prevent it, Svix signs every webhook and its metadata with a unique key for each endpoint. This signature can then be used to verify the webhook indeed comes from Svix, and only process it if it is."),(0,i.kt)("p",null,"Another potential security hole is what's called replay attacks. A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"replay attack")," is when an attacker intercepts a valid payload (including the signature), and re-transmits it to your endpoint. This payload will pass signature validation, and will therefore be acted upon."),(0,i.kt)("p",null,"To mitigate this attack, Svix includes a timestamp for when the webhook attempt occurred. Our libraries automatically reject webhooks with a timestamp that are more than five minutes away (past or future) from the current time. This requires your server's clock to be synchronised and accurate, and it's recommended that you use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"NTP")," to achieve this."),(0,i.kt)("h2",{id:"verifying-signatures-using-our-official-libraries"},"Verifying signatures using our official libraries"),(0,i.kt)("p",null,"First install the libraries if you haven't already:"),(0,i.kt)(o.Z,{mdxType:"CodeTabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install svix\n// Or\nyarn add svix\n"))),(0,i.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pip install svix\n"))),(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/svixhq/svix-libs/go\n"))),(0,i.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Install cURL. E.g. on arch linux:\npacman -S curl\n")))),(0,i.kt)("p",null,"Then verify webhooks using the following:"),(0,i.kt)(o.Z,{mdxType:"CodeTabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Webhook } from "svix";\n\nconst secret = "MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\n// These were all sent from the server\nconst headers = {\n  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",\n  "svix-timestamp": "1614265330",\n  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",\n};\nconst payload = \'{"test": 2432232314}\';\n\nconst wh = new Webhook(secret);\n// Throws on error, returns the verified content on success\nconst payload = wh.verify(payload, headers);\n'))),(0,i.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from svix import Webhook\n\nsecret = "MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n# These were all sent from the server\nheaders = {\n  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",\n  "svix-timestamp": "1614265330",\n  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",\n}\npayload = \'{"test": 2432232314}\'\n\nwh = Webhook(secret);\n# Throws on error, returns the verified content on success\npayload = wh.verify(payload, headers);\n'))),(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svixhq/svix-libs/go"\n)\n\nsecret := "MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n// These were all sent from the server\nheaders := http.Header{}\nheaders.Set("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek")\nheaders.Set("svix-timestamp", "1614265330")\nheaders.Set("svix-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")\n\npayload := []byte(`{"test": 2432232314}`)\n\nwh, err := svix.NewWebhook(secret)\nerr := wh.Verify(payload, headers)\n// returns nil on success, error otherwise\n'))),(0,i.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("p",null,"No easy way to verify the signature just with cURL."))),(0,i.kt)("h2",{id:"verifying-signatures-manually"},"Verifying signatures manually"),(0,i.kt)("p",null,"Each webhook call includes three headers with additional information that are used for verification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Svix-Id"),": the unique message identifier for the webhook message. This identifier is unique across all messages, but will be the same when the same webhook is being resent (e.g. due to a previous failure)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Svix-Timestamp"),": timestamp in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_time"},"seconds since epoch"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Svix-Signature"),": the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Base64"},"Base64")," encoded signature.")),(0,i.kt)("h3",{id:"constructing-the-signed-content"},"Constructing the signed content"),(0,i.kt)("p",null,"The signature is composed by concatenating the following the id, timestamp and payload, separated by the full-stop character ",(0,i.kt)("inlineCode",{parentName:"p"},"."),". Which in code will look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'signed_content = "${svix_id}.${svix_timestamp}.${body}"\n')),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," is the raw body of the request. The signature is sensitive to any changes, so even a small change in the body will cause the signature to be completely different. This means that you should ",(0,i.kt)("em",{parentName:"p"},"not")," change the body in any way before verifying."),(0,i.kt)("h3",{id:"determining-the-expected-signature"},"Determining the expected signature"),(0,i.kt)("p",null,"Svix uses an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code"},"HMAC")," with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA-256")," to sign its webhooks."),(0,i.kt)("p",null,"So to calculate the expected signature, you should HMAC the ",(0,i.kt)("inlineCode",{parentName:"p"},"signed_content")," from above using your secret webhook signature key. This generated signature should match the one sent in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Svix-Signature")," header."),(0,i.kt)("p",null,"Please note that to compare the signatures it's recommended to use a constant-time string comparison method in order to prevent timing attacks."),(0,i.kt)("h3",{id:"verify-timestamp"},"Verify timestamp"),(0,i.kt)("p",null,"As mentioned above, Svix also sends the timestamp of the attempt in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Svix-Timestamp")," header. You should compare this timestamp against your system timestamp and make sure it's within your tolerance in order to prevent timestamp attacks."),(0,i.kt)("h2",{id:"building-your-own-libraries"},"Building your own libraries"),(0,i.kt)("p",null,"Depending on your product you may want to offer additional processing before passing the verified payload for your customers. For example, you may want to create API objects from the payload that your users can use to interact with your API."),(0,i.kt)("p",null,"In this scenario you would want to create your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Webhook")," class equivalent that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Svix")," class internally. This way you can get all of the verification that Svix offer, while still being able to post-process the payload before passing it to your users."))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);