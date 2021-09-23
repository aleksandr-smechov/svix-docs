(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[442],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return v}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),v=r,d=m["".concat(p,".").concat(v)]||m[v]||u[v]||i;return t?a.createElement(d,s(s({ref:n},c),{},{components:t})):a.createElement(d,s({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(7294),r=t(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,u=e.values,m=e.groupId,v=e.className,d=i(),f=d.tabGroupChoices,g=d.setTabGroupChoices,y=(0,a.useState)(r),h=y[0],x=y[1],k=a.Children.toArray(e.children),T=[];if(null!=m){var b=f[m];null!=b&&b!==h&&u.some((function(e){return e.value===b}))&&x(b)}var N=function(e){var n=e.currentTarget,t=T.indexOf(n),a=u[t].value;x(a),null!=m&&(g(m,a),setTimeout((function(){var e,t,a,r,i,s,o,l;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,s=window,o=s.innerHeight,l=s.innerWidth,t>=0&&i<=l&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},E=function(e){var n,t;switch(e.keyCode){case c:var a=T.indexOf(e.target)+1;t=T[a]||T[0];break;case l:var r=T.indexOf(e.target)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},v)},u.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":h===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:N,onClick:N},t)}))),n?(0,a.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},7275:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(7294),r=t(5064);function i(e){var n=e.children,t=e.additionalTabs,i=void 0===t?[]:t;return a.createElement(r.Z,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"}].concat(i,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},n)}},4431:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return v}});var a=t(4786),r=t(6843),i=(t(7294),t(3905)),s=t(7275),o=t(8215),p={title:"Event Types"},l=void 0,c={unversionedId:"event-types",id:"event-types",isDocsHomePage:!1,title:"Event Types",description:"Each message sent through Svix has an associated event type.",source:"@site/docs/event-types.mdx",sourceDirName:".",slug:"/event-types",permalink:"/event-types",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/event-types.mdx",version:"current",frontMatter:{title:"Event Types"},sidebar:"mainSidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"App Portal",permalink:"/app-portal"}},u=[{value:"Using event types",id:"using-event-types",children:[]},{value:"Bulk creating event types",id:"bulk-creating-event-types",children:[]}],m={toc:u};function v(e){var n=e.components,p=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each message sent through Svix has an associated event type.\nEvent types are identifiers denoting the type of the message being sent."),(0,i.kt)("p",null,"Event types are just a string, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"user.signup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"invoice.paid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow.completed"),"."),(0,i.kt)("p",null,"Event types are primarily used to decide which events are sent to which endpoint. By default, all messages are sent to all endpoints. Though when adding or editing endpoints, users can choose to only subscribe to some of the event types for this particular endpoint."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bulk Create")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's recommended to add the event types you are going to use ahead of time. You can do it using the scripts in the ",(0,i.kt)("a",{parentName:"p",href:"#bulk-creating-event-types"},"bulk creating event types section"),"."))),(0,i.kt)("p",null,"This is how choosing event types look like in the ",(0,i.kt)("a",{parentName:"p",href:"/app-portal"},"pre-built application portal"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Management UI screenshot",src:t(4004).Z})),(0,i.kt)("h2",{id:"using-event-types"},"Using event types"),(0,i.kt)("p",null,"You can add, edit, and delete event types in ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.svix.com"},"the dashboard")," or through the API below."),(0,i.kt)(s.Z,{mdxType:"CodeTabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Svix } from "svix";\n\nconst svix = new Svix("AUTH_TOKEN");\nconst eventType = await svix.eventType.create({\n  name: "user.signup",\n  description: "A user has signed up",\n});\n'))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from svix.api import Svix, EventTypeIn\n\nsvix = Svix("AUTH_TOKEN")\napp = svix.application.create(EventTypeIn(\n    name="user.signup",\n    description="A user has signed up"\n))\n'))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svix/svix-libs/go"\n)\n\nsvixClient := svix.New("AUTH_TOKEN", nil)\napp, err := svixClient.EventType.Create(&svix.EventTypeIn{\n    Name: "user.signup",\n    Description: "A user has signed up",\n})}\n'))),(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.svix.Svix;\nimport com.svix.models.EventTypeIn;\n\n\nSvix svix = new Svix("AUTH_TOKEN");\nsvix.getEventType()\n  .create(new EventTypeIn()\n    .name("user.signup")\n    .description("A user has signed up")\n  );\n'))),(0,i.kt)(o.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN=\'AUTH_TOKEN\'\nsvix event-type create \'{ "name": "user.signup", "description": "A user has signed up" }\'\n'))),(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN=\'AUTH_TOKEN\'\n\ncurl -X POST "https://api.svix.com/api/v1/event-type/" \\\n    -H  "Accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -H  "Authorization: Bearer ${SVIX_AUTH_TOKEN}" \\\n    -d \'{ "name": "user.signup", "description": "A user has signed up" }\'\n')))),(0,i.kt)("h2",{id:"bulk-creating-event-types"},"Bulk creating event types"),(0,i.kt)("p",null,"The easiest way to bulk-create event types is by just writing a simple script to load a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comma-separated_values"},"pipe delimited ",(0,i.kt)("inlineCode",{parentName:"a"},"CSV"))," file or a ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," file with the event types and make the API requests."),(0,i.kt)("p",null,"Here is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"CSV")," file (without headers) of events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"user.created|A user has been created\nuser.removed|A user has been removed\nuser.changed|A user has changed\n")),(0,i.kt)("p",null,"Here are some example scripts for processing the above file:"),(0,i.kt)(s.Z,{mdxType:"CodeTabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Svix } from "svix";\nimport fs from "fs";\nimport readline from "readline";\n\nconst svix = new Svix("AUTH_TOKEN");\n\nasync function execute() {\n  const fileStream = fs.createReadStream("./data.csv");\n\n  const data = readline.createInterface({\n    input: fileStream,\n    crlfDelay: Infinity,\n  });\n\n  for await (const lineItr of data) {\n    const line = lineItr.split("|");\n    const eventType = await svix.eventType.create({\n      name: line[0],\n      description: line[1],\n    });\n  }\n}\n\nexecute();\n'))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import json\nfrom svix.api import Svix, EventTypeIn\n\nsvix = Svix("AUTH_TOKEN")\n\nwith open("./data.csv", "r") as f:\n    for line in f:\n        name, description = line.split("|")\n        app = svix.event_type.create(EventTypeIn(\n            name=name,\n            description=description,\n        ))\n'))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "bufio"\n    "log"\n    "os"\n    "strings"\n\n    svix "github.com/svix/svix-libs/go"\n)\n\nfunc main() {\n    svixClient := svix.New("AUTH_TOKEN", nil)\n\n    f, err := os.Open("./data.csv")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer f.Close()\n\n    scanner := bufio.NewScanner(f)\n    for scanner.Scan() {\n        line := strings.Split(scanner.Text(), "|")\n        _, err = svixClient.EventType.Create(&svix.EventTypeIn{\n            Name:        line[0],\n            Description: line[1],\n        })\n        if err != nil {\n            log.Println(err)\n        }\n    }\n    if err := scanner.Err(); err != nil {\n        log.Fatal(err)\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package sviximport;\n\nimport java.io.FileReader;\nimport java.io.IOException;\nimport java.util.Scanner;\nimport com.svix.Svix;\nimport com.svix.models.EventTypeIn;\nimport com.svix.exceptions.ApiException;\n\npublic class App {\n\n    public static void main(String[] args) {\n        Svix svix = new Svix("AUTH_TOKEN");\n\n        try (Scanner scanner = new Scanner(new FileReader("/Users/fcjr/Desktop/import/data.csv"));) {\n            while (scanner.hasNextLine()) {\n                try {\n                    String[] line = scanner.nextLine().split("|");\n                    svix.getEventType().create(new EventTypeIn().name(line[0]).description(line[1]));\n                } catch(ApiException e) {\n                    if (e.getCode() != 409) {\n                        System.out.println(e.getResponseBody());\n                        System.exit(1);\n                    }\n                }\n            }\n        } catch(IOException e) {\n            System.out.println(e.toString());\n            System.exit(1);\n        }\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN=\'AUTH_TOKEN\'\n\nwhile IFS=$\'|\', read -r name description\ndo\n    svix event-type create "{ \\"name\\": \\"${name}\\", \\"description\\": \\"${description}\\" }"\ndone < data.csv\n'))),(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN=\'AUTH_TOKEN\'\n\nwhile IFS=$\'|\', read -r name description\ndo\n    curl -X POST "https://api.svix.com/api/v1/event-type/" \\\n        -H  "Accept: application/json" \\\n        -H  "Content-Type: application/json" \\\n        -H  "Authorization: Bearer ${SVIX_AUTH_TOKEN}" \\\n        -d  "{ \\"name\\": \\"${name}\\", \\"description\\": \\"${description}\\" }"\ndone < data.csv\n')))))}v.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})},4004:function(e,n,t){"use strict";n.Z=t.p+"assets/images/event-types-ui-890c134c13f298bd058d28017e7c452f.png"}}]);