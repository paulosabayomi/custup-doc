"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[9019],{4759:(e,t,n)=>{n.r(t),n.d(t,{CustUpUI:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(5893),s=n(1151),o=n(7294),l=n(7925);const a={sidebar_position:6},c="Default UI",r={id:"customization/default-ui",title:"Default UI",description:"The defualt UI serves as a major entry to CustUp as it is the default UI that displays and gives users a hint and options on how to start adding files.",source:"@site/docs/customization/default-ui.mdx",sourceDirName:"customization",slug:"/customization/default-ui",permalink:"/docs/customization/default-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/customization/default-ui.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Using Custom Font",permalink:"/docs/customization/custom-font"},next:{title:"Icons",permalink:"/docs/customization/icons"}},d={},u=[{value:"The hint text",id:"the-hint-text",level:3},{value:"The File source list",id:"the-file-source-list",level:3},{value:"Using options",id:"using-options",level:2},{value:"Persisting the UI",id:"persisting-the-ui",level:3},{value:"Icons list",id:"icons-list",level:3}],h=({})=>(o.useEffect((()=>{new l.Z({targetRootElement:"#container",_custupDefaultUploadSentence:'<div>\n      <div>Drag files to upload or Click to select file from device</div> - <div style="color: blue">I am the hint text</div>',default_styles_override:{outerContainer:["custup_outer_contaner",!0],defaultUIUploadSentenceContainer:["default_ui_container",!0]},file_upload:{endpoint_url:"http://api.pryxy.com/fileupload",files_field_name:"profileImage"}})}),[]),(0,i.jsx)(i.Fragment,{}));function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"default-ui",children:"Default UI"}),"\n","\n","\n","\n",(0,i.jsx)("div",{id:"container",style:{marginBottom:10,width:"100%",display:"flex",justifyContent:"center"}}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(t.p,{children:"The defualt UI serves as a major entry to CustUp as it is the default UI that displays and gives users a hint and options on how to start adding files."}),"\n",(0,i.jsxs)(t.p,{children:["An it is also possible to customize it to your taste using options and ",(0,i.jsx)(t.a,{href:"/docs/customization/main-ui",children:"style override"}),", to change the styles of the default UI check ",(0,i.jsx)(t.a,{href:"/docs/customization/main-ui",children:"main UI style customization"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"There are currently two main components in the default UI"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The hint text"}),"\n",(0,i.jsx)(t.li,{children:"The File source list"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"and both can be customized to fit into the need of your project"}),"\n",(0,i.jsx)(t.h3,{id:"the-hint-text",children:"The hint text"}),"\n",(0,i.jsxs)(t.p,{children:["The hint text can hold any HTML element so you can change set the innerHTML of the hint element to anything you like, the hint text can be changed with the ",(0,i.jsx)(t.code,{children:"_custupDefaultUploadSentence"})," option"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n    _custupDefaultUploadSentence: `<div>This is a custom HTML element</div>`\n})\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To hide the hint element you can either set ",(0,i.jsx)(t.code,{children:"_custupDefaultUploadSentence"})," to ",(0,i.jsx)(t.code,{children:"null"})," or override the style by adding a new class name to the element with ",(0,i.jsx)(t.code,{children:"defaultUIUploadSentenceContainer"})," that has ",(0,i.jsx)(t.code,{children:"display: none"})]}),"\n",(0,i.jsx)(t.h3,{id:"the-file-source-list",children:"The File source list"}),"\n",(0,i.jsxs)(t.p,{children:["To customize the file source list HTML use the ",(0,i.jsx)(t.code,{children:"file_source_icons"})," and set any custom HTML to the icons you want to customize"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const instance1 = new CustUp({\n    file_source_icons: {\n        video_camera: \'<div style="align-self: center; text-align: center;">V</div>\',\n        capture_image: \'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M456-600h320q-27-69-82.5-118.5T566-788L456-600Zm-92 80 160-276q-11-2-22-3t-22-1q-66 0-123 25t-101 67l108 188ZM170-400h218L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 108-188H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67L596-440 436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H572l160 276ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>\',\n        openai_dalle_source: \'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-32v-80q117 0 198.5-81.5T840-392h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T560-32Zm0-160v-80q50 0 85-35t35-85h80q0 83-58.5 141.5T560-192ZM222-57q-15 0-30-6t-27-17L23-222q-11-12-17-27t-6-30q0-16 6-30.5T23-335l127-127q23-23 57-23.5t57 22.5l50 50 28-28-50-50q-23-23-23-56t23-56l57-57q23-23 56.5-23t56.5 23l50 50 28-28-50-50q-23-23-23-56.5t23-56.5l127-127q12-12 27-18t30-6q15 0 29.5 6t26.5 18l142 142q12 11 17.5 25.5T895-730q0 15-5.5 30T872-673L745-546q-23 23-56.5 23T632-546l-50-50-28 28 50 50q23 23 22.5 56.5T603-405l-56 56q-23 23-56.5 23T434-349l-50-50-28 28 50 50q23 23 22.5 57T405-207L278-80q-11 11-25.5 17T222-57Zm0-79 42-42-142-142-42 42 142 142Zm85-85 42-42-142-142-42 42 142 142Zm184-184 56-56-142-142-56 56 142 142Zm198-198 42-42-142-142-42 42 142 142Zm85-85 42-42-142-142-42 42 142 142ZM448-504Z"/></svg>\'\n    },\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"using-options",children:"Using options"}),"\n",(0,i.jsx)(t.p,{children:"Currently these are the customizations that can be done to the default UI through using options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Persisting the UI"}),"\n",(0,i.jsx)(t.li,{children:"Setting and rearranging the icons list"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"persisting-the-ui",children:"Persisting the UI"}),"\n",(0,i.jsxs)(t.p,{children:["You may want to set the default UI to not automatically hide when file has been added just like the behavior of the detached UI, to achieve that set the ",(0,i.jsx)(t.code,{children:"persist_default_ui"})," to ",(0,i.jsx)(t.code,{children:"true"})," which is ",(0,i.jsx)(t.code,{children:"false"})," by default"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n    persist_default_ui: true\n})\n"})}),"\n",(0,i.jsx)(t.h3,{id:"icons-list",children:"Icons list"}),"\n",(0,i.jsx)(t.p,{children:"You can rearrange and also choose which file sources you would like to list out on the default UI"}),"\n",(0,i.jsxs)(t.p,{children:["To choose or rearrange the file sources icons you can use the ",(0,i.jsx)(t.code,{children:"allowed_sources"})," option which takes an ",(0,i.jsx)(t.code,{children:"array"})," of file sources"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n    allowed_sources: ['dropbox_source', 'record_screen', 'link_source', 'google_drive_source'],\n})\n"})}),"\n",(0,i.jsx)(t.p,{children:"The file sources icons will be listed as they listed in the array"})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(7294);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);