"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[6893],{7072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(5893),a=n(1151);const o={sidebar_position:3},i="Media Source Styles",c={id:"customization/media-sources",title:"Media Source Styles",description:"You can also customise the Media source UI styles, the media source elements are not part of the default UI elements, they gets added to the default UI as a popup and the main media sources container wrapper gets appended to the default UI's inner container.",source:"@site/docs/customization/media-sources.md",sourceDirName:"customization",slug:"/customization/media-sources",permalink:"/docs/customization/media-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/customization/media-sources.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Main UI Styles",permalink:"/docs/customization/main-ui"},next:{title:"External Sources Styles",permalink:"/docs/customization/external-sources"}},r={},u=[{value:"Element Styles",id:"element-styles",level:2},{value:"container",id:"container",level:3},{value:"media_capture_main_container",id:"media_capture_main_container",level:3},{value:"media_capture_bottom_tools_container",id:"media_capture_bottom_tools_container",level:3},{value:"Setting custom CSS class names",id:"setting-custom-css-class-names",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"media-source-styles",children:"Media Source Styles"}),"\n",(0,s.jsx)(t.p,{children:"You can also customise the Media source UI styles, the media source elements are not part of the default UI elements, they gets added to the default UI as a popup and the main media sources container wrapper gets appended to the default UI's inner container."}),"\n",(0,s.jsx)(t.h2,{id:"element-styles",children:"Element Styles"}),"\n",(0,s.jsx)(t.h3,{id:"container",children:"container"}),"\n",(0,s.jsx)(t.p,{children:"The media source container wrapper"}),"\n",(0,s.jsx)(t.h3,{id:"media_capture_main_container",children:"media_capture_main_container"}),"\n",(0,s.jsx)(t.p,{children:"The media source container main"}),"\n",(0,s.jsx)(t.h3,{id:"media_capture_bottom_tools_container",children:"media_capture_bottom_tools_container"}),"\n",(0,s.jsx)(t.p,{children:"The media sources bottom tools wrapper container"}),"\n",(0,s.jsx)(t.p,{children:"While these styles seems fews there are other inner elements that were not given class names, like the bottom tools, the were styled using css selector"}),"\n",(0,s.jsx)(t.p,{children:"These are all the styles including the styles that were not exposed"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container {}\n\n/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div {}\n\n/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div svg {}\n\n/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div._custup_m_add_media {}\n\n/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div._custup_m_remove_media_popup {} /*Not implemented in the favour of CustUp's default popup close button*/\n\n/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div:active {}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"setting-custom-css-class-names",children:"Setting custom CSS class names"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"media_capture_source_style_override"})," option is used for adding or overriding the element's class names"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const instance1 = new CustUp({\n  media_capture_source_style_override: {\n    container: ['custum_class_name_to_add_to_the_container_el', true]\n  }\n})\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(7294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);