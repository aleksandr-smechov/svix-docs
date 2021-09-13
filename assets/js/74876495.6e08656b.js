(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[49],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(v,r(r({ref:t},c),{},{components:n})):a.createElement(v,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),i=n(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),s="tabItem_1uMI",p="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,d=e.groupId,m=e.className,v=o(),h=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,a.useState)(i),y=k[0],b=k[1],x=a.Children.toArray(e.children),f=[];if(null!=d){var T=h[d];null!=T&&T!==y&&u.some((function(e){return e.value===T}))&&b(T)}var N=function(e){var t=e.currentTarget,n=f.indexOf(t),a=u[n].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,i,o,r,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,l=r.innerWidth,n>=0&&o<=l&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case c:var a=f.indexOf(e.target)+1;n=f[a]||f[0];break;case l:var i=f.indexOf(e.target)-1;n=f[i]||f[f.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},7275:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),i=n(5064);function o(e){var t=e.children,n=e.additionalTabs,o=void 0===n?[]:n;return a.createElement(i.Z,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"}].concat(o,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},t)}},1774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(4786),i=n(6843),o=(n(7294),n(3905)),r=n(7275),s=n(8215),p={title:"Quickstart"},l=void 0,c={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"This page has everything you need to start sending webhooks with Svix.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/quickstart.mdx",version:"current",frontMatter:{title:"Quickstart"},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/installation"},next:{title:"Event Types",permalink:"/event-types"}},u=[{value:"Main concepts",id:"main-concepts",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Sending messages",id:"sending-messages",children:[{value:"Creating an application",id:"creating-an-application",children:[]},{value:"Send a message",id:"send-a-message",children:[]}]},{value:"Add webhook endpoints",id:"add-webhook-endpoints",children:[{value:"Using the application portal",id:"using-the-application-portal",children:[]},{value:"Using the API",id:"using-the-api",children:[]}]},{value:"Closing words",id:"closing-words",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page has everything you need to start sending webhooks with Svix."),(0,o.kt)("h3",{id:"main-concepts"},"Main concepts"),(0,o.kt)("p",null,"In Svix you have three important entities you will be interacting with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"messages"),": these are the webhooks being sent. They can have contents and a few other properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application"),": this is where ",(0,o.kt)("inlineCode",{parentName:"li"},"messages")," are sent to. Usually you want to create one application for each of your users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoint"),": endpoints are the URLs messages will be sent to. Each application can have multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"endpoints")," and each message sent to that application will be sent to all of them (unless they are not subscribed to the sent ",(0,o.kt)("a",{parentName:"li",href:"/event-types"},"event type"),").")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Get your authentication token (",(0,o.kt)("inlineCode",{parentName:"p"},"AuthToken"),") from the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.svix.com"},"Svix dashboard"),"."),(0,o.kt)("h2",{id:"sending-messages"},"Sending messages"),(0,o.kt)("h3",{id:"creating-an-application"},"Creating an application"),(0,o.kt)("p",null,"Each of your users needs an associated application. The easiest way is to create a new application whenever a user signs up. In this section we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.svix.com/docs#operation/create_application_api_v1_app__post"},"create application API endpoint")," to create an application."),(0,o.kt)("p",null,"You would need the application's ID when sending messages. You can either save the ID returned when creating the application, or set your own unique id (e.g. your user's username or internal database id) in the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," field and use that intsead."),(0,o.kt)("p",null,"Code example:"),(0,o.kt)(r.Z,{mdxType:"CodeTabs"},(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Svix } from "svix";\n\nconst svix = new Svix("AUTH_TOKEN");\nconst app = await svix.application.create({name: "Application name"});\n'))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from svix.api import Svix, ApplicationIn\n\nsvix = Svix("AUTH_TOKEN")\napp = svix.application.create(ApplicationIn(name="Application name"))\n'))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svix/svix-libs/go"\n)\n\nsvixClient := svix.New("AUTH_TOKEN", nil)\napp, err := svixClient.Application.Create(&svix.ApplicationIn{\n    Name: "Application name",\n})}\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.svix.models.ApplicationIn;\nimport com.svix.models.ApplicationOut;\nimport com.svix.Svix;\n\nSvix svix = new Svix("AUTH_TOKEN");\nApplicationOut app = svix.getApplication().create(new ApplicationIn().name("Application name"));\n'))),(0,o.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export SVIX_AUTH_TOKEN='AUTH_TOKEN'\nsvix application create '{ \"name\": \"Application name\" }'\n"))),(0,o.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "https://api.svix.com/api/v1/app/" \\\n    -H  "Accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -H  "Authorization: Bearer AUTH_TOKEN" \\\n    -d \'{"name": "Application name"}\'\n')))),(0,o.kt)("h3",{id:"send-a-message"},"Send a message"),(0,o.kt)("p",null,"We will now send a new message using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.svix.com/docs#operation/create_message_api_v1_app__app_id__msg__post"},"create message API endpoint"),". It accepts an ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),", which is the application's ID (or custom ",(0,o.kt)("inlineCode",{parentName:"p"},"uid"),") from the previous section. In addition, it accepts the following fields (as part the json body):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/event-types"},(0,o.kt)("inlineCode",{parentName:"a"},"eventType")),": an identifier denoting the type of the event. E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"invoice.paid"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eventId"),": an optional unique ID for the event. This is useful if you want to map each message to unique events on your system. This is also used as an idempotency key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload"),": a JSON dictionary that can hold anything. Its content will be sent as the webhook content.")),(0,o.kt)("p",null,"For example:"),(0,o.kt)(r.Z,{mdxType:"CodeTabs"},(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const svix = new Svix("AUTH_TOKEN");\nawait svix.message.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", {\n    "eventType": "invoice.paid",\n    "eventId": "evt_Wqb1k73rXprtTm7Qdlr38G",\n    "payload": {\n        "id": "invoice_WF7WtCLFFtd8ubcTgboSFNql",\n        "status": "paid",\n        "attempt": 2\n    }\n});\n'))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'svix = Svix("AUTH_TOKEN")\nsvix.message.create(\n    "app_Xzx8bQeOB1D1XEYmAJaRGoj0",\n    MessageIn(\n        event_type="invoice.paid",\n        event_id="evt_Wqb1k73rXprtTm7Qdlr38G",\n        payload={\n            "id": "invoice_WF7WtCLFFtd8ubcTgboSFNql",\n            "status": "paid",\n            "attempt": 2\n        }\n    )\n)\n'))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'svixClient := svix.New("AUTH_TOKEN", nil)\nsvixClient.Message.Create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", &svix.MessageIn{\n    EventType: "invoice.paid",\n    EventId:   svix.String("evt_Wqb1k73rXprtTm7Qdlr38G"),\n    Payload: map[string]interface{}{\n        "id":      "invoice_WF7WtCLFFtd8ubcTgboSFNql",\n        "status":  "paid",\n        "attempt": 2,\n    },\n})\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Svix svix = new Svix("AUTH_TOKEN");\nsvix.getMessage().create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", \n  new MessageIn()\n    .eventType("invoice.paid")\n    .eventId("evt_Wqb1k73rXprtTm7Qdlr38G")\n    .payload("{" +\n       "\\"id\\": \\"invoice_WF7WtCLFFtd8ubcTgboSFNql\\"," +\n       "\\"status\\":  \\"paid\\"," +\n       "\\"attempt\\": 2" +\n      "}"));\n'))),(0,o.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN="AUTH_TOKEN"\nsvix message create app_Xzx8bQeOB1D1XEYmAJaRGoj0 \'{ "eventType": "invoice.paid", "eventId": "evt_Wqb1k73rXprtTm7Qdlr38G", "payload": { "id": "invoice_WF7WtCLFFtd8ubcTgboSFNql", "status": "paid", "attempt": 2 } }\'\n'))),(0,o.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "https://api.svix.com/api/v1/app/app_Xzx8bQeOB1D1XEYmAJaRGoj0/msg/" \\\n    -H  "Accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -H  "Authorization: Bearer AUTH_TOKEN" \\\n    -d \'{"eventType": "invoice.paid", "eventId": "evt_Wqb1k73rXprtTm7Qdlr38G", "payload": {"id": "invoice_WF7WtCLFFtd8ubcTgboSFNql", "status": "paid", "attempt": 2}}\'\n')))),(0,o.kt)("h4",{id:"idempotentcy"},"Idempotentcy"),(0,o.kt)("p",null,"As mentioned above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventId")," is also used as an idempotency key. This means that if you send the same request (with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"eventId"),") more than once, only one message will be created. The rest of the attempts will be ignored."),(0,o.kt)("p",null,"This means that you can safely retry sending messages on errors (such as network errors) without worrying about duplicate messages being sent."),(0,o.kt)("h2",{id:"add-webhook-endpoints"},"Add webhook endpoints"),(0,o.kt)("p",null,"In the example above we showed how to send messages, though these messages were not sent to any specific URLs. In order for them to be sent, we need to add endpoints. This is what this section is about."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.svix.com/play/"},"Svix Play webhook debugger")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/svix/svix-cli"},"Svix CLI")," to inspect, test and debug your webhooks during development."))),(0,o.kt)("h3",{id:"using-the-application-portal"},"Using the application portal"),(0,o.kt)("p",null,"Svix offers a pre-build application portal. With ",(0,o.kt)("a",{parentName:"p",href:"https://api.svix.com/docs#operation/get_dashboard_access_api_v1_auth_dashboard_access__app_id___post"},"one API call"),", you can give your users access to this UI and they can then add their own endpoints themselves."),(0,o.kt)("p",null,"More on that in the ",(0,o.kt)("a",{parentName:"p",href:"/management-ui"},"application portal docs"),"."),(0,o.kt)("h3",{id:"using-the-api"},"Using the API"),(0,o.kt)("p",null,"In addition to the application portal, you can also use our API to add endpoints to your applications. To do so, you will use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.svix.com/docs#operation/create_endpoint_api_v1_app__app_id__endpoint__post"},"create endpoint API"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(r.Z,{mdxType:"CodeTabs"},(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const svix = new Svix("AUTH_TOKEN");\nawait svix.endpoint.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", {\n    "url": "https://api.example.com/svix-webhooks/",\n    "version": 1,\n    "description": "My main endpoint",\n});\n'))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'svix = Svix("AUTH_TOKEN")\nsvix.endpoint.create(\n    "app_Xzx8bQeOB1D1XEYmAJaRGoj0",\n    EndpointIn(\n        url="https://api.example.com/svix-webhooks/",\n        version=1,\n        description="My main endpoint",\n    )\n)\n'))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'svixClient := svix.New("AUTH_TOKEN", nil)\nsvixClient.Endpoint.Create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", &svix.EndpointIn{\n    Url:         "https://api.example.com/svix-webhooks/",\n    Version:     1,\n    Description: svix.String("My main endpoint"),\n})\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Svix svix = new Svix("AUTH_TOKEN");\nsvix.getEndpoint()\n    .create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", \n            new EndpointIn()\n              .url("https://api.example.com/svix-webhooks/")\n              .version(1)\n              .description("My main endpoint"));\n'))),(0,o.kt)(s.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN="AUTH_TOKEN"\nsvix endpoint create \'{ "url": "https://api.example.com/svix-webhooks/", "version": 1, "description": "My main endpoint" }\'\n'))),(0,o.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "https://api.svix.com/api/v1/app/app_Xzx8bQeOB1D1XEYmAJaRGoj0/endpoint/" \\\n    -H  "Accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -H  "Authorization: Bearer AUTH_TOKEN" \\\n    -d \'{"url": "https://api.example.com/svix-webhooks/", "version": 1, "description": "My main endpoint"}\'\n')))),(0,o.kt)("p",null,"The version number is an integer signifying the current version of the API. You can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if you haven't started versioning your API yet."),(0,o.kt)("h2",{id:"closing-words"},"Closing words"),(0,o.kt)("p",null,"That's it! There are only three API calls you should really care about. Creating applications (i.e users), sending messages, and giving your users access to the admin UI. All of them are covered here."))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);