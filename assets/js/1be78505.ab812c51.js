(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var r=n(7294),a=n(3905),o=n(2263),i=n(6291),l=n(3575),c=n(4786),s=n(6843),u=n(6010),d=n(9306),p=n(1839),m=n(3783),h=n(7898),b=n(6742),f=n(3919),y=n(5537),v=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(4478),k=n(8617),E=n(4973),C="sidebar_15mo",_="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",S="menu_Bmed",j="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",O="collapseSidebarButtonIcon_3E-R",I="sidebarMenuIcon_fgN0",P="sidebarMenuCloseIcon_1lpH",w=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},L=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,["items"]);return t.map((function(e,t){return r.createElement(B,(0,c.Z)({key:t,item:e},n))}))}));function B(e){switch(e.item.type){case"category":return r.createElement(A,e);case"link":default:return r.createElement(D,e)}}function A(e){var t,n=e.item,a=e.onItemClick,o=e.collapsible,i=e.activePath,l=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),p=n.items,m=n.label,h=w(n,i),b=(0,d.D9)(h),f=(0,r.useState)((function(){return!!o&&(!h&&n.collapsed)})),y=f[0],v=f[1],g=(0,r.useRef)(null),k=(0,r.useState)(void 0),E=k[0],C=k[1],_=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){h&&!b&&y&&v(!1)}),[h,b,y]);var N=(0,r.useCallback)((function(e){e.preventDefault(),E||_(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[E]);return 0===p.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":y})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[j]=!o,t)),onClick:o?N:void 0,href:o?"#":void 0},l),m),r.createElement("ul",{className:"menu__list",ref:g,style:{height:E},onTransitionEnd:function(){y||_(!1)}},r.createElement(L,{items:p,tabIndex:y?"-1":"0",onItemClick:a,collapsible:o,activePath:i})))}function D(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,l=t.label,d=w(t,a);return r.createElement("li",{className:"menu__list-item",key:l},r.createElement(b.Z,(0,c.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:i},(0,f.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,f.Z)(i)?l:r.createElement("span",null,l,r.createElement(k.Z,null))))}function R(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},r.createElement(v,{className:O}))}function M(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(I,P)},"\xd7"):r.createElement(g.Z,{className:I,height:24,width:24}))}var W=function(e){var t,n,a=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,b=function(){var e=(0,d.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),f=(0,d.LU)(),v=f.navbar.hideOnScroll,g=f.hideableSidebar,k=(0,d.nT)().isClosed,j=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var a=(0,m.Z)();return(0,r.useEffect)((function(){a===m.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=j.showResponsiveSidebar,O=j.closeResponsiveSidebar,I=j.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(C,(t={},t[_]=v,t[N]=s,t))},v&&r.createElement(y.Z,{tabIndex:-1,className:Z}),r.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":x},n[T]=!k&&b,n)),"aria-label":(0,E.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},r.createElement(M,{responsiveSidebarOpened:x,onClick:I}),r.createElement("ul",{className:"menu__list"},r.createElement(L,{items:o,onItemClick:O,collapsible:l,activePath:a}))),g&&r.createElement(R,{onClick:c}))},H={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},z={Prism:n(7410).Z,theme:H};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},J=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},V=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=U({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=U({},n,{backgroundColor:null}),a};function Y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var G=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?V(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=U({},Y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?U({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),F(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),F(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=U({},Y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?U({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),F(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],d=n[i][o];if("string"==typeof d?(u=i>0?u:["plain"],s=d):(u=J(u,d.type),d.alias&&(u=J(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split($),m=p.length;l.push({types:u,content:p[0]});for(var h=1;h<m;h++)K(l),c.push(l=[]),l.push({types:u,content:p[h]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return K(l),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var X=n(7594),q=n.n(X),Q={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ee=n(5350),te=function(){var e=(0,d.LU)().prism,t=(0,ee.Z)().isDarkTheme,n=e.theme||Q,r=e.darkTheme||n;return t?r:n},ne="codeBlockContainer_K1bP",re="codeBlockContent_hGly",ae="codeBlockTitle_eoMF",oe="codeBlock_23N8",ie="codeBlockWithTitle_2JqI",le="copyButton_Ue-o",ce="codeBlockLines_39YC",se=/{([\d,-]+)}/,ue=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function de(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,i=(0,d.LU)().prism,l=(0,r.useState)(!1),s=l[0],p=l[1],m=(0,r.useState)(!1),h=m[0],b=m[1];(0,r.useEffect)((function(){b(!0)}),[]);var f=(0,d.bc)(a)||o,y=(0,r.useRef)(null),v=[],g=te(),k=Array.isArray(t)?t.join(""):t;if(a&&se.test(a)){var C=a.match(se)[1];v=q()(C).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);var N=k.replace(/\n$/,"");if(0===v.length&&void 0!==_){for(var Z,S="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ue(["js","jsBlock"]);case"jsx":case"tsx":return ue(["js","jsBlock","jsx"]);case"html":return ue(["js","jsBlock","html"]);case"python":case"py":return ue(["python"]);default:return ue()}}(_),T=k.replace(/\n$/,"").split("\n"),x=0;x<T.length;){var O=x+1,I=T[x].match(j);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=O+",";break;case"highlight-start":Z=O;break;case"highlight-end":S+=Z+"-"+(O-1)+","}T.splice(x,1)}else x+=1}v=q()(S),N=T.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var i=document.getSelection(),l=!1;i.rangeCount>0&&(l=i.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),l&&(i.removeAllRanges(),i.addRange(l)),o&&o.focus()}(N),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(G,(0,c.Z)({},z,{key:String(h),theme:g,code:N,language:_}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,i=e.getLineProps,l=e.getTokenProps;return r.createElement("div",{className:ne},f&&r.createElement("div",{style:a,className:ae},f),r.createElement("div",{className:(0,u.Z)(re,_)},r.createElement("pre",{tabIndex:0,className:(0,u.Z)(n,oe,"thin-scrollbar",(t={},t[ie]=f,t)),style:a},r.createElement("code",{className:ce},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},l({token:e,key:t})))})))})))),r.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(le,"clean-btn"),onClick:P},s?r.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var pe=n(6159),me={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(de,e):r.createElement("code",e)},a:function(e){return r.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(de,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,pe.Z)("h1"),h2:(0,pe.Z)("h2"),h3:(0,pe.Z)("h3"),h4:(0,pe.Z)("h4"),h5:(0,pe.Z)("h5"),h6:(0,pe.Z)("h6")},he=n(4608),be=n(5977),fe={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function ye(e){var t,n,i,c,s,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,b=(0,o.Z)(),f=b.siteConfig,y=b.isClient,g=m.pluginId,k=m.version,C=function(e){var t,n=e.versionMetadata,r=e.currentDocRoute,a=n.permalinkToSidebar,o=n.docsSidebars,i=a[r.path]||a[(t=r.path,t.endsWith("/")?t:t+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(r.path)];return{sidebar:o[i],sidebarName:i}}({versionMetadata:m,currentDocRoute:p}),_=C.sidebarName,N=C.sidebar,Z=(0,r.useState)(!1),S=Z[0],j=Z[1],T=(0,r.useState)(!1),x=T[0],O=T[1],I=(0,r.useCallback)((function(){x&&O(!1),j(!S)}),[x]);return r.createElement(l.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:k,tag:(0,d.os)(g,k)}},r.createElement("div",{className:fe.docPage},N&&r.createElement("aside",{className:(0,u.Z)(fe.docSidebarContainer,(t={},t[fe.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe.docSidebarContainer)&&S&&O(!0)}},r.createElement(W,{key:_,sidebar:N,path:p.path,sidebarCollapsible:null==(n=null==(i=f.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:I,isHidden:x}),x&&r.createElement("div",{className:fe.collapsedDocSidebar,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.createElement(v,{className:fe.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,u.Z)(fe.docMainContainer,(c={},c[fe.docMainContainerEnhanced]=S||!N,c))},r.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",fe.docItemWrapper,(s={},s[fe.docItemWrapperEnhanced]=S,s))},r.createElement(a.Zo,{components:me},h)))))}var ve=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,be.LX)(a.pathname,e)}));return o?r.createElement(ye,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):r.createElement(he.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return d},Z:function(){return p}});var r=n(6843),a=n(4786),o=n(7294),i=n(6010),l=n(4973),c=n(9306),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,["id"]),d=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[s]=!d,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);