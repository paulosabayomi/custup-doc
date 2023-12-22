"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[7599],{5969:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=o(5893),s=o(1151);const r={sidebar_position:2},t="File Sources",d={id:"options/file-sources-config",title:"File Sources",description:"This page contains the options for file sources configurations.",source:"@site/docs/options/file-sources-config.md",sourceDirName:"options",slug:"/options/file-sources-config",permalink:"/docs/options/file-sources-config",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/options/file-sources-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Main",permalink:"/docs/options/main"},next:{title:"Methods",permalink:"/docs/methods"}},l={},c=[{value:"Example",id:"example",level:4},{value:"Media Sources",id:"media-sources",level:2},{value:"video_recording",id:"video_recording",level:3},{value:"Properties",id:"properties",level:4},{value:"Description",id:"description",level:4},{value:"External sources",id:"external-sources",level:2},{value:"google_drive_source",id:"google_drive_source",level:3},{value:"Example",id:"example-1",level:4},{value:"dropbox_source",id:"dropbox_source",level:3},{value:"Example",id:"example-2",level:4},{value:"box_source",id:"box_source",level:3},{value:"Example",id:"example-3",level:4},{value:"openai_dalle_source",id:"openai_dalle_source",level:3},{value:"Example",id:"example-4",level:4},{value:"Properties description",id:"properties-description",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-sources",children:"File Sources"}),"\n",(0,i.jsx)(n.p,{children:"This page contains the options for file sources configurations."}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,i.jsx)(n.p,{children:"The external file sources are not pre-configured unlike other file uploaders that make it work out of the box preconfigured, unfortunately based on how CustUp was made they have to be configured for your projects, the full guides and relevant external links on how to set them up are on this page."})}),"\n",(0,i.jsxs)(n.p,{children:["The options on this page should be added under the ",(0,i.jsx)(n.code,{children:"file_source_config"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const instance1 = new CustUp({\n  // ...\n  file_source_config: {\n    // ...\n    video_recording: {\n      video_only: true,\n      show_image_capture_btn: false\n    }\n    // ...\n  }\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"media-sources",children:"Media Sources"}),"\n",(0,i.jsx)(n.h3,{id:"video_recording",children:"video_recording"}),"\n",(0,i.jsx)(n.p,{children:"This option is for configuring the video recording source"}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  video_only: boolean,\n  show_image_capture_btn: boolean\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"video_only"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsxs)(n.td,{children:["Set this to ",(0,i.jsx)(n.code,{children:"true"})," to record video only, audio will not be captured during video recording"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"show_image_capture_btn"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["By default on the video capture screen there is a image capture button to capture picture, set this to ",(0,i.jsx)(n.code,{children:"false"})," to not include this button"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"external-sources",children:"External sources"}),"\n",(0,i.jsx)(n.h3,{id:"google_drive_source",children:"google_drive_source"}),"\n",(0,i.jsx)(n.p,{children:"Currently the Google Drive has one property that takes the configurations for your project."}),"\n",(0,i.jsx)(n.p,{children:"Check the Google Drive Picker API doc for how to setup your credentials, you only need to setup a project, enable the Google Picker API and then create credentials for your project."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To create a project on Google Cloud Platform\n",(0,i.jsx)(n.a,{href:"https://developers.google.com/drive/picker/guides/overview#appreqs",children:"https://developers.google.com/drive/picker/guides/overview#appreqs"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To Enable the Google Picker API\n",(0,i.jsx)(n.a,{href:"https://developers.google.com/drive/picker/guides/overview#api",children:"https://developers.google.com/drive/picker/guides/overview#api"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To create credentials",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://developers.google.com/drive/picker/guides/overview#api-key",children:"https://developers.google.com/drive/picker/guides/overview#api-key"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then the ",(0,i.jsx)(n.code,{children:"authConfig"})," should be updated with the credentials"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"authConfig: {\n  client_id: string;\n  api_key: string;\n  app_id: string;\n  scopes: string;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Full option"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"google_drive_source: {\n  authConfig: {\n    client_id: string;\n    api_key: string;\n    app_id: string;\n    scopes: string;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const instance1 = new CustUp({\n  file_source_config: {\n\n    google_drive_source: {\n      authConfig: {\n        client_id: 'client_id.apps.googleusercontent.com',\n        api_key: 'api-key',\n        app_id: 'app-id',\n        scopes: 'https://www.googleapis.com/auth/drive.metadata.readonly', // optional\n      }\n    }\n\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"scopes"})," option is optional but it can be set to other values."]}),"\n",(0,i.jsx)(n.h3,{id:"dropbox_source",children:"dropbox_source"}),"\n",(0,i.jsxs)(n.p,{children:["For Dropbox only an ",(0,i.jsx)(n.code,{children:"appKey"})," has to be created for your project."]}),"\n",(0,i.jsxs)(n.p,{children:["To create an ",(0,i.jsx)(n.code,{children:"appKey"})," on Dropbox you will have to create an app first, ",(0,i.jsx)(n.a,{href:"https://www.dropbox.com/developers/apps/create",children:"follow this link to create an app on Dropbox"})]}),"\n",(0,i.jsx)(n.p,{children:"Then under the App settings change your App status from development to production then copy the App key."}),"\n",(0,i.jsxs)(n.p,{children:["The you the App key can be provided to CustUp under the ",(0,i.jsx)(n.code,{children:"authConfig"})," property."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"authConfig: {\n   appKey: string;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Full options"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"authConfig: {\n   appKey: string\n}\noptions: {\n   cancel: Function\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const instance1 = new CustUp({\n  file_source_config: {\n    // ...\n    dropbox_source: {\n        authConfig: {\n           appKey: 'random-id'\n        }\n        options: {\n           cancel: () => {/*Do something cool when user cancels the chooser*/} // optional\n        }\n    }\n\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"options"})," property is totally optional and can be omited."]}),"\n",(0,i.jsx)(n.h3,{id:"box_source",children:"box_source"}),"\n",(0,i.jsxs)(n.p,{children:["To get Box up and running you only need to provide the developer token and optionally the folder id, ",(0,i.jsx)(n.code,{children:"folder_id"})," is ",(0,i.jsx)(n.code,{children:"'0'"})," by default which is full folder."]}),"\n",(0,i.jsx)(n.p,{children:"To get a developer token on Box an app needs to be created, to create an app"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://app.box.com/developers/console/newapp",children:"https://app.box.com/developers/console/newapp"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After creating the app on the app's page under configuration section scroll to the Developer Token section and generate the developer token."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The developer token by default only last for 60 minutes to create a production token request for Enterprise access and submit your app for authorization."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Full option"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"authConfig: {\n    developerToken: string;\n    folder_id: string;\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const instance1 = new CustUp({\n  // ...\n  file_source_config: {\n    // ...\n    box_source: {\n      authConfig: {\n          developerToken: 'random-id',\n          folder_id: '0', // optional\n      }\n    }\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about Box Picker API, ",(0,i.jsx)(n.a,{href:"https://developer.box.com/guides/embed/ui-elements/picker/",children:"follow this link"})]}),"\n",(0,i.jsx)(n.h3,{id:"openai_dalle_source",children:"openai_dalle_source"}),"\n",(0,i.jsx)(n.p,{children:"CustUp can also add image files from generated images using OpenAI DALL.E API, CustUp currently uses the DALL.E v3."}),"\n",(0,i.jsx)(n.p,{children:"The API key is required to use DALL.E-3, you can generate an API key here"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"https://platform.openai.com/api-keys"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Complete option properties"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  api_key: string;\n  size: "1024x1024" | "1024x1792" | "1792x1024";\n  n: number;\n  model: "dall-e-3" | "dall-e-2";\n  quality: "standard" | "hd";\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const instance1 = new CustUp({\n  // ...\n  file_source_config: {\n    openai_dalle_source: {\n         api_key: \'api-key-from-openai\',\n         size: "1792x1024",\n         n: 1,\n         model: "dall-e-3",\n         quality: "hd"\n    }\n  }\n})\n'})}),"\n",(0,i.jsx)(n.h4,{id:"properties-description",children:"Properties description"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"api_key"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<empty string>"})}),(0,i.jsx)(n.td,{children:"OpenAI API key is required to use DALL.E 3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"1024x1024" | "1024x1792" | "1792x1024"'})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"1024x1024"'})}),(0,i.jsx)(n.td,{children:"The size of the image that will be generated by DALL.E"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"n"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:"Number of images that will be generated by DALL.E"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"model"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"dall-e-3" | "dall-e-2"'})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"dall-e-3"'})}),(0,i.jsxs)(n.td,{children:["The DALL.E model that should be used, the default is ",(0,i.jsx)(n.code,{children:'"dall-e-3"'})," note that though there is an option for the version 2 of DALL.E it may be buggy because CustUp has been optimized to use version 3"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"quality"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"standard" | "hd"'})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"standard"'})}),(0,i.jsx)(n.td,{children:"The quality of the image that will be generated by DALL.E 3"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about DALL.E 3 API ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/images/introduction",children:"follow this link"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>t});var i=o(7294);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);