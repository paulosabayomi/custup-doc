"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[4903],{7113:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var n=o(5893),s=o(1151);const i={sidebar_position:7},l="Tools",a={id:"customization/tools",title:"Tools",description:"This page only applies when you're using the default UI type, the tools on the default UI type can be set to not display on the UI and in which case the settings on this page will not be effective",source:"@site/docs/customization/tools.md",sourceDirName:"customization",slug:"/customization/tools",permalink:"/docs/customization/tools",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/customization/tools.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Scrollbar",permalink:"/docs/customization/scrollbar"},next:{title:"Options",permalink:"/docs/category/options"}},c={},r=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tools",children:"Tools"}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,n.jsx)(t.p,{children:"This page only applies when you're using the default UI type, the tools on the default UI type can be set to not display on the UI and in which case the settings on this page will not be effective"})}),"\n",(0,n.jsx)(t.p,{children:"The tools on the default UI type can be rearranged and styles, and you can also set which tools you want to be displayed"}),"\n",(0,n.jsxs)(t.p,{children:["To achieve this you will use the ",(0,n.jsx)(t.code,{children:"allowed_tools"})," option which takes an array of tools for the default UI type"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"For example"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const options = {\n    // ...\n    allowed_tools: ['tools_dragger', 'add_file', 'upload', 'added_files_count', 'clear_files'],\n}\n\nconst uploader = new CustUp(options)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The tools will be displayed according to their order in the array, and the ones that are not in the array will not be included on the UI, to not show the tools on the default UI type at all set ",(0,n.jsx)(t.code,{children:"allowed_tools"})," to ",(0,n.jsx)(t.code,{children:"null"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const options = {\n    // ...\n    allowed_tools: null,\n}\n\nconst uploader = new CustUp(options)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>l});var n=o(7294);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);