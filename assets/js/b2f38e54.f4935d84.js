(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[997],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},5064:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),i=a(9443);var r=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=r(),v=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,n.useState)(i),g=f[0],w=f[1],x=n.Children.toArray(e.children),b=[];if(null!=m){var N=v[m];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&w(N)}var y=function(e){var t=e.currentTarget,a=b.indexOf(t),n=u[a].value;w(n),null!=m&&(k(m,n),setTimeout((function(){var e,a,n,i,r,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&r<=c&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case c:var i=b.indexOf(e.target)-1;a=b[i]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},8903:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(4786),i=a(6843),r=a(7294),o=a(3905),l=a(5064);function s(e){var t=e.children;return r.createElement(l.Z,{defaultValue:"homebrew",groupId:"cli-platform",values:[{label:"Homebrew",value:"homebrew"},{label:"Scoop",value:"scoop"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}]},t)}var c=a(8215),p={title:"Getting Started with the CLI"},u=void 0,m={unversionedId:"tutorials/cli",id:"tutorials/cli",isDocsHomePage:!1,title:"Getting Started with the CLI",description:"The Svix CLI is one of the fastest ways to interact with our API, which is especially useful during development.",source:"@site/docs/tutorials/cli.mdx",sourceDirName:"tutorials",slug:"/tutorials/cli",permalink:"/tutorials/cli",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/tutorials/cli.mdx",version:"current",frontMatter:{title:"Getting Started with the CLI"},sidebar:"mainSidebar",previous:{title:"Retry Schedule",permalink:"/account/retries"},next:{title:"Consuming Webhooks",permalink:"/consuming-webhooks"}},d=[{value:"Install the Svix CLI",id:"install-the-svix-cli",children:[]},{value:"Authenticate with your Svix account",id:"authenticate-with-your-svix-account",children:[]},{value:"Create an application",id:"create-an-application",children:[]},{value:"List your applications",id:"list-your-applications",children:[]},{value:"Add an endpoint",id:"add-an-endpoint",children:[]},{value:"Send a message",id:"send-a-message",children:[]},{value:"Get creative",id:"get-creative",children:[]}],h={toc:d};function v(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli"},"Svix CLI")," is one of the fastest ways to interact with our API, which is especially useful during development."),(0,o.kt)("p",null,"With the Svix CLI you can interact with our ",(0,o.kt)("a",{parentName:"p",href:"https://www.svix.com"},"webhook sending API"),", validate webhook payloads, quickly open our docs, and much more."),(0,o.kt)("p",null,"In this tutorial, we will learn how to install the Svix CLI and use it to send your first webhook message!"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial assumes you have already familiar with the Svix service. If this is your first time using Svix,\nwe recommend you first check out our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.svix.com/overview"},"quickstart documentaion"),"."))),(0,o.kt)("h2",{id:"install-the-svix-cli"},"Install the Svix CLI"),(0,o.kt)(s,{mdxType:"CLITabs"},(0,o.kt)(c.Z,{value:"homebrew",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Svix CLI with ",(0,o.kt)("a",{parentName:"p",href:"https://homebrew.sh"},"Homebrew"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install svix/svix/svix\n"))),(0,o.kt)(c.Z,{value:"scoop",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Svix CLI with ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add svix https://github.com/svix/scoop-svix.git\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop install svix\n"))),(0,o.kt)(c.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Svix CLI on macOS without Homebrew:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest Darwin tar.gz file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli/releases/latest"},"https://github.com/svix/svix-cli/releases/latest"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"tar -xvf svix_X.X.X_Darwin_x86_64.tar.gz"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optionally, install the binary in a location where you can execute it globally (e.g., /usr/local/bin).")))),(0,o.kt)(c.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Svix CLI on Linux without a package manager:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest Linux tar.gz file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli/releases/latest"},"https://github.com/svix/svix-cli/releases/latest"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"tar -xvf svix_X.X.X_Linux_x86_64.tar.gz"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the executable: ",(0,o.kt)("inlineCode",{parentName:"p"},"./svix"))))),(0,o.kt)(c.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Svix CLI on Windows without Scoop:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest Windows tar.gz file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli/releases/latest"},"https://github.com/svix/svix-cli/releases/latest"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"svix_X.X.X_Windows_x86_64.tar.gz")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},".exe")," file"))))),(0,o.kt)("h2",{id:"authenticate-with-your-svix-account"},"Authenticate with your Svix account"),(0,o.kt)("p",null,"After installing the Svix CLI, you must authenticate with your Svix account before you can start running commands."),(0,o.kt)("p",null,"To do so, simply set your Svix Auth Token to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SVIX_AUTH_TOKEN")," env variable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On macOS and Linux: ",(0,o.kt)("inlineCode",{parentName:"li"},"export SVIX_AUTH_TOKEN=<MY-AUTH-TOKEN>")),(0,o.kt)("li",{parentName:"ul"},"On Windows via command prompt: ",(0,o.kt)("inlineCode",{parentName:"li"},"set SVIX_AUTH_TOKEN=<MY-AUTH-TOKEN>")),(0,o.kt)("li",{parentName:"ul"},"On Windows via PowerShell: ",(0,o.kt)("inlineCode",{parentName:"li"},"$env:SVIX_AUTH_TOKEN = '<MY-AUTH-TOKEN>'"))),(0,o.kt)("h2",{id:"create-an-application"},"Create an application"),(0,o.kt)("p",null,"You\u2019re now ready to use the Svix CLI. To get started let's create a new application."),(0,o.kt)("p",null,"Each Svix CLI command accepts raw JSON input as either the first positional argument or piped via ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin"),"."),(0,o.kt)("p",null,"We can create an application with the ",(0,o.kt)("inlineCode",{parentName:"p"},"application create")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'svix application create \'{"name": "My Application"}\'\n')),(0,o.kt)("p",null,"API commands also include convenience flags for common values to make it easier when hand crafting commands.\nFor example, the same application could have been created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--data-name")," flag: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'svix application create --data-name "My Application"\n')),(0,o.kt)("p",null,"This command creates a new application on Svix and returns the raw application object as JSON."),(0,o.kt)("h2",{id:"list-your-applications"},"List your applications"),(0,o.kt)("p",null,"Now that we've created an app we can list our existing apps with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"svix application list\n")),(0,o.kt)("p",null,"The list command by default returns the first 50 applications, you can change this limit by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--limit")," flag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Get the first 100 applications\nsvix application list --limit 100\n")),(0,o.kt)("h2",{id:"add-an-endpoint"},"Add an endpoint"),(0,o.kt)("p",null,"Next let's add an endpoint to the application we created above.  The create command should have returned an Application ID.\nSince the application name is not unique, we will need its ID to make changes."),(0,o.kt)("p",null,"Let's add a webhook endpoint with the url ",(0,o.kt)("inlineCode",{parentName:"p"},"http://example.com/webhook"),". Every endpoint must have a version associated with it\nto help you version your webhook API.  For this example we will set the version to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"svix endpoint create <MY-APP-ID> \\\n    --data-url http://example.com/webhook \\\n    --data-version 1\n")),(0,o.kt)("h2",{id:"send-a-message"},"Send a message"),(0,o.kt)("p",null,"Now that we have an application created and an endpoint configured to listen to messages from that app, we are ready to send our first\nwebhook message! Let's send a ",(0,o.kt)("inlineCode",{parentName:"p"},"user.created")," event with the user's username and email."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'svix message create <MY-APP-ID> \\\n    --data-eventType "user.created" \\\n    --data-payload \'{\n        "username": "new_user",\n        "email": "new_user@example.com"\n    }\'\n')),(0,o.kt)("p",null,"This message will now be sent to Svix and dispatched to all webhook endpoints listening to your application."),(0,o.kt)("h2",{id:"get-creative"},"Get creative"),(0,o.kt)("p",null,"The Svix CLI has commands to interact with every part of the Svix API."),(0,o.kt)("p",null,"To get a complete list of commands, run ",(0,o.kt)("inlineCode",{parentName:"p"},"svix --help"),"."),(0,o.kt)("p",null,"Since each command accepts raw JSON input piped over ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin"),", you can chain Svix CLI commands together with other command line tools (like the popular JSON parser\n",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),") to create powerful snippets to improve your workflow."),(0,o.kt)("p",null,"For example, to automatically open the dashboard for the app we created in step 3, on macOS you can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"svix application get <MY-APP-ID> | jq '.id' | xargs svix auth dashboard | jq '.url' | xargs open\n")),(0,o.kt)("p",null,"With a slight modification, we can convert this one-liner to a shell function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"function dashboard {\n   svix application get \"$1\" | jq '.id' | xargs svix auth dashboard | jq '.url' | xargs open\n}\n")),(0,o.kt)("p",null,"Which you can run like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"dashboard <MY-APP-ID>\n")))}v.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);