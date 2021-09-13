(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[559],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(t),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),a=t(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,u=e.values,h=e.groupId,d=e.className,m=o(),v=m.tabGroupChoices,f=m.setTabGroupChoices,g=(0,r.useState)(a),y=g[0],k=g[1],b=r.Children.toArray(e.children),w=[];if(null!=h){var x=v[h];null!=x&&x!==y&&u.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var n=e.currentTarget,t=w.indexOf(n),r=u[t].value;k(r),null!=h&&(f(h,r),setTimeout((function(){var e,t,r,a,o,s,i,p;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,p=s.innerWidth,t>=0&&o<=p&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case p:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},t)}))),n?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},7275:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),a=t(5064);function o(e){var n=e.children,t=e.additionalTabs,o=void 0===t?[]:t;return r.createElement(a.Z,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"}].concat(o,[{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}])},n)}},7109:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(4786),a=t(6843),o=(t(7294),t(3905)),s=t(7275),i=t(8215),l={title:"How to Verify"},p=void 0,c={unversionedId:"receiving/verifying-payloads/how",id:"receiving/verifying-payloads/how",isDocsHomePage:!1,title:"How to Verify",description:"As shown in the Why Verify section, verifying incoming webhooks is very important. This section describes how to do it.",source:"@site/docs/receiving/verifying-payloads/how.mdx",sourceDirName:"receiving/verifying-payloads",slug:"/receiving/verifying-payloads/how",permalink:"/receiving/verifying-payloads/how",editUrl:"https://github.com/svix/svix-docs/edit/main/docs/receiving/verifying-payloads/how.mdx",version:"current",frontMatter:{title:"How to Verify"},sidebar:"consumersSidebar",previous:{title:"Why Verify",permalink:"/receiving/verifying-payloads/why"},next:{title:"Verifying Manually",permalink:"/receiving/verifying-payloads/how-manual"}},u=[{value:"Verifying using our official libraries",id:"verifying-using-our-official-libraries",children:[]},{value:"Framework specific examples",id:"framework-specific-examples",children:[{value:"Python (Django)",id:"python-django",children:[]},{value:"Python (Flask)",id:"python-flask",children:[]},{value:"Python (FastAPI)",id:"python-fastapi",children:[]},{value:"Node.js (Next.js)",id:"nodejs-nextjs",children:[]},{value:"Node.js (Netlify Functions)",id:"nodejs-netlify-functions",children:[]},{value:"Node.js (Express)",id:"nodejs-express",children:[]},{value:"Go (Standard lib)",id:"go-standard-lib",children:[]},{value:"Go (Gin)",id:"go-gin",children:[]},{value:"Ruby (Ruby on Rails)",id:"ruby-ruby-on-rails",children:[]},{value:"PHP (Laravel)",id:"php-laravel",children:[]}]}],h={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As shown in the ",(0,o.kt)("a",{parentName:"p",href:"/receiving/verifying-payloads/why"},"Why Verify section"),", verifying incoming webhooks is very important. This section describes how to do it."),(0,o.kt)("h2",{id:"verifying-using-our-official-libraries"},"Verifying using our official libraries"),(0,o.kt)("p",null,"First install the libraries if you haven't already:"),(0,o.kt)(s.Z,{additionalTabs:[{label:"Ruby",value:"ruby"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"}],mdxType:"CodeTabs"},(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install svix\n// Or\nyarn add svix\n"))),(0,o.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install svix\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/svix/svix-libs/go\n"))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("p",null,"Gradle: Add this dependency to your project's build file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'implementation "com.svix:svix:0.17.0"\n')),(0,o.kt)("p",null,"Maven: Add this dependency to your project's POM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.svix</groupId>\n  <artifactId>svix</artifactId>\n  <version>0.17.0</version>\n</dependency>\n"))),(0,o.kt)(i.Z,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gem install svix\n"))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require svix/svix\n"))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package Svix\n"))),(0,o.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("p",null,"On macOS install via ",(0,o.kt)("a",{href:"https://brew.sh/"},"Homebrew"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install svix/svix/svix\n")),(0,o.kt)("p",null,"On Windows install via ",(0,o.kt)("a",{href:"https://scoop.sh/"},"Scoop"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add svix https://github.com/svix/scoop-svix.git\nscoop install svix\n")),(0,o.kt)("p",null,"For other platforms, such as linux, checkout the ",(0,o.kt)("a",{href:"https://github.com/svix/svix-cli#installation"},"CLI docs")," on Github.")),(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install cURL. E.g. on arch linux:\npacman -S curl\n")))),(0,o.kt)("p",null,"Then verify webhooks using the code below. The payload is the raw (string) body of the request, and the headers are the headers passed in the request."),(0,o.kt)("p",null,"The signature you should get from where you added the endpoint, e.g. the application portal."),(0,o.kt)(s.Z,{additionalTabs:[{label:"Ruby",value:"ruby"},{label:"PHP",value:"php"},{label:"C#",value:"csharp"}],mdxType:"CodeTabs"},(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Webhook } from "svix";\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\n// These were all sent from the server\nconst headers = {\n  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",\n  "svix-timestamp": "1614265330",\n  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",\n};\nconst payload = \'{"test": 2432232314}\';\n\nconst wh = new Webhook(secret);\n// Throws on error, returns the verified content on success\nconst payload = wh.verify(payload, headers);\n'))),(0,o.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from svix.webhooks import Webhook\n\nsecret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n# These were all sent from the server\nheaders = {\n  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",\n  "svix-timestamp": "1614265330",\n  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",\n}\npayload = \'{"test": 2432232314}\'\n\nwh = Webhook(secret)\n# Throws on error, returns the verified content on success\npayload = wh.verify(payload, headers)\n'))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svix/svix-libs/go"\n)\n\nsecret := "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n// These were all sent from the server\nheaders := http.Header{}\nheaders.Set("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek")\nheaders.Set("svix-timestamp", "1614265330")\nheaders.Set("svix-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")\n\npayload := []byte(`{"test": 2432232314}`)\n\nwh, err := svix.NewWebhook(secret)\nerr := wh.Verify(payload, headers)\n// returns nil on success, error otherwise\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.svix.Webhook;\n\nString secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\n// These were all sent from the server\nHashMap<String, List<String>> headerMap = new HashMap<String, List<String>>();\nheaderMap.put("svix-id", Arrays.asList("msg_p5jXN8AQM9LWM0D4loKWxJek"));\nheaderMap.put("svix-timestamp", Arrays.asList("1614265330"));\nheaderMap.put("svix-signature", Arrays.asList("v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="));\nHttpHeaders headers = HttpHeaders.of(headerMap, BiPredicate<String, String>)\n\nString payload = "{\\"test\\": 2432232314}";\n\nWebhook webhook = new Webhook(secret);\n\nwebhook.verify(payload, headers)\n// throws WebhookVerificationError exception on failure. \n'))),(0,o.kt)(i.Z,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'svix\'\n\n\n# These were all sent from the server\nheaders = {\n  "svix-id" => "msg_p5jXN8AQM9LWM0D4loKWxJek",\n  "svix-timestamp" => "1614265330",\n  "svix-signature" => "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="\n}\npayload = \'{"test": 2432232314}\'\n\nwh = Svix::Webhook.new("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw")\n# Raises on error, returns the verified content on success\njson = wh.verify(payload, headers)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// import using composers autoload\nrequire_once('vendor/autoload.php');\n// or manually\nrequire_once('/path/to/svix/php/init.php');\n\n// These were all sent from the server\n$payload = '{\"test\": 2432232314}';\n$header = array(\n        'svix-id'  => 'msg_p5jXN8AQM9LWM0D4loKWxJek',\n        'svix-timestamp' => '1614265330',\n        'svix-signature' => 'v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=',\n    );\n\n// Throws on error, returns the verified content on success\n$wh = new \\Svix\\Webhook('whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw');\n$json = $wh->verify($payload, $header);\n"))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Svix;\nusing System.Net;\n\n// These were all sent from the server\nvar headers = new WebHeaderCollection();\nheaders.Set("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek");\nheaders.Set("svix-timestamp", "1614265330");\nheaders.Set("svix-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=");\nvar payload = "{\\"test\\": 2432232314}";\n\nvar wh = new Webhook("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw/Je4ZJEGP1QFb");\n\n// Throws on error\nwh.Verify(payload, headers);\n'))),(0,o.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export SVIX_AUTH_TOKEN="AUTH_TOKEN"\nsvix verify --secret whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw --msg-id msg_p5jXN8AQM9LWM0D4loKWxJek --timestamp 1614265330 --signature v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE= \'{"test": 2432232314}\'\n'))),(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("p",null,"No easy way to verify the signature just with cURL."))),(0,o.kt)("h2",{id:"framework-specific-examples"},"Framework specific examples"),(0,o.kt)("p",null,"Here are examples on how to adjust the above examples to your favourite framework!"),(0,o.kt)("h3",{id:"python-django"},"Python (Django)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from django.http import HttpResponse\n\nfrom svix.webhooks import Webhook, WebhookVerificationError\n\nsecret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n@csrf_exempt\ndef webhook_handler(request):\n    headers = request.headers\n    payload = request.body\n\n    try:\n        wh = Webhook(secret)\n        msg = wh.verify(payload, headers)\n    except WebhookVerificationError as e:\n        return HttpResponse(status=400)\n\n    # Do someting with the message...\n\n    return HttpResponse(status=204)\n')),(0,o.kt)("h3",{id:"python-flask"},"Python (Flask)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from flask import request\n\nfrom svix.webhooks import Webhook, WebhookVerificationError\n\nsecret = \"whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw\"\n\n@app.route('/webhook/')\ndef webhook_handler():\n    headers = request.headers\n    payload = request.get_data()\n\n    try:\n        wh = Webhook(secret)\n        msg = wh.verify(payload, headers)\n    except WebhookVerificationError as e:\n        return ('', 400)\n\n    # Do someting with the message...\n\n    return ('', 204)\n")),(0,o.kt)("h3",{id:"python-fastapi"},"Python (FastAPI)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import Request, Response, status\n\nfrom svix.webhooks import Webhook, WebhookVerificationError\n\nsecret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\n@router.post("/webhook/", status_code=status.HTTP_204_NO_CONTENT)\nasync def webhook_handler(request: Request, response: Response):\n    headers = request.headers\n    payload = await request.body()\n\n    try:\n        wh = Webhook(secret)\n        msg = wh.verify(payload, headers)\n    except WebhookVerificationError as e:\n        response.status_code = status.HTTP_400_BAD_REQUEST\n        return\n\n    # Do someting with the message...\n')),(0,o.kt)("h3",{id:"nodejs-nextjs"},"Node.js (Next.js)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Webhook } from "svix";\nimport { buffer } from "micro";\n\nexport const config = {\n    api: {\n        bodyParser: false,\n    },\n}\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\nexport default async function handler(req, res) {\n    const payload = (await buffer(req)).toString();\n    const headers = req.headers;\n\n    const wh = new Webhook(secret);\n    let msg;\n    try {\n        msg = wh.verify(payload, headers);\n    } catch (err) {\n        res.status(400).json({});\n    }\n\n    // Do something with the message...\n\n    res.json({});\n}\n')),(0,o.kt)("h3",{id:"nodejs-netlify-functions"},"Node.js (Netlify Functions)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Webhook } from "svix";\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\n\nexport const handler = async ({body, headers}) => {\n    const payload = body;\n\n    const wh = new Webhook(secret);\n    let msg;\n    try {\n        msg = wh.verify(payload, headers);\n    } catch (err) {\n        res.status(400).json({});\n    }\n\n    // Do something with the message...\n\n    res.json({});\n}\n')),(0,o.kt)("h3",{id:"nodejs-express"},"Node.js (Express)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Webhook } from "svix";\nimport bodyParser from "body-parser";\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";\n\napp.post(\'/webhook\', bodyParser.raw({type: \'application/json\'}), (req, res) => {\n    const payload = req.body;\n    const headers = req.headers;\n\n    const wh = new Webhook(secret);\n    let msg;\n    try {\n        msg = wh.verify(payload, headers);\n    } catch (err) {\n        res.status(400).json({});\n    }\n\n    // Do something with the message...\n\n    res.json({});\n});\n')),(0,o.kt)("h3",{id:"go-standard-lib"},"Go (Standard lib)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "io"\n    "log"\n    "net/http"\n\n    svix "github.com/svix/svix-libs/go"\n)\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\nfunc main() {\n\n    wh, err := svix.NewWebhook(secret)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    http.HandleFunc("/webhook", func(w http.ResponseWriter, r *http.Request) {\n        headers := r.Header\n        payload, err := io.ReadAll(r.Body)\n        if err != nil {\n            w.WriteHeader(http.StatusBadRequest)\n            return\n        }\n\n        err = wh.Verify(payload, headers)\n        if err != nil {\n            w.WriteHeader(http.StatusBadRequest)\n            return\n        }\n\n        // Do something with the message...\n\n        w.WriteHeader(http.StatusNoContent)\n\n    })\n    http.ListenAndServe(":8080", nil)\n}\n')),(0,o.kt)("h3",{id:"go-gin"},"Go (Gin)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "io"\n    "log"\n    "net/http"\n\n    "github.com/gin-gonic/gin"\n    svix "github.com/svix/svix-libs/go"\n)\n\nconst secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"\n\nfunc main() {\n\n    wh, err := svix.NewWebhook(secret)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    r := gin.Default()\n    r.POST("/webhook", func(c *gin.Context) {\n        headers := c.Request.Header\n        payload, err := io.ReadAll(c.Request.Body)\n        if err != nil {\n            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})\n            return\n        }\n\n        err = wh.Verify(payload, headers)\n        if err != nil {\n            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})\n            return\n        }\n\n        // Do something with the message...\n\n        c.JSON(200, gin.H{})\n    })\n    r.Run()\n}\n')),(0,o.kt)("h3",{id:"ruby-ruby-on-rails"},"Ruby (Ruby on Rails)"),(0,o.kt)("p",null,"Once you've setup your project add a route to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/routes.rb")," file at the top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rails.application.routes.draw")," block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rb"},'Rails.application.routes.draw do\n  post "/webhook", to: "webhook#index"\n\n  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html\nend\n')),(0,o.kt)("p",null,"The route above declares that ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /webhook")," requests are mapped to the index action of ",(0,o.kt)("inlineCode",{parentName:"p"},"WebhookController"),"."),(0,o.kt)("p",null,"To create ",(0,o.kt)("inlineCode",{parentName:"p"},"WebhookController")," and its index action, we'll run the controller generator (with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-routes")," option because we already have an appropriate route):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/rails generate controller Webhook index --skip-routes\n")),(0,o.kt)("p",null,"Rails will create several files for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"    create  app/controllers/webhook_controller.rb\n    invoke  erb\n    create    app/views/webhook\n    create    app/views/webhook/index.html.erb\n    invoke  test_unit\n    create    test/controllers/webhook_controller_test.rb\n    invoke  helper\n    create    app/helpers/webhook_helper.rb\n    invoke    test_unit\n    invoke  assets\n    invoke    scss\n    create      app/assets/stylesheets/webhook.scss\n")),(0,o.kt)("p",null,"Now we can add our verification logic to the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"app/controllers/webhook_controller.rb")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rb"},"require 'svix'\n\nclass WebhookController < ApplicationController\n  protect_from_forgery with: :null_session # disables CSRF middleware; required for API endpoints\n\n  def index\n    begin\n      payload = request.body.read\n      headers = request.headers\n      wh = Svix::Webhook.new(\"whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw\")\n\n      json = wh.verify(payload, headers)\n\n      # Do something with the message...\n\n      head :no_content\n    rescue\n      head :bad_request\n    end\n  end\nend\n")),(0,o.kt)("h3",{id:"php-laravel"},"PHP (Laravel)"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/api.php")," file add the following after the last use directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Svix\\Webhook;\nuse Svix\\Exception\\WebhookVerificationException;\n\nRoute::post('webhook', function(Request $request) {\n    $payload = $request->getContent();\n    $headers = collect($request->headers->all())->transform(function ($item) {\n        return $item[0];\n    });\n\n    try {\n        $wh = new Webhook(\"whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw\");\n        $json = $wh->verify($payload, $headers);\n\n        # Do something with the message...\n\n        return response()->noContent();\n    } catch (WebhookVerificationException $e) {\n        return response(null, 400);\n    }\n});\n")))}d.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);