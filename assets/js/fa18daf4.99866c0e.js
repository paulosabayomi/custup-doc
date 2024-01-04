"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[6838],{9955:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=i(5893),n=i(1151);const d={sidebar_position:8},r="Methods",c={id:"methods",title:"Methods",description:"This page consists of all the CustUp methods for interacting with CustUp instances.",source:"@site/docs/methods.md",sourceDirName:".",slug:"/methods",permalink:"/docs/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/methods.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Style override",permalink:"/docs/options/style-override"},next:{title:"Events",permalink:"/docs/events"}},t={},a=[{value:"File Upload",id:"file-upload",level:2},{value:"upload",id:"upload",level:3},{value:"Example",id:"example",level:4},{value:"Params Description",id:"params-description",level:4},{value:"retry_upload",id:"retry_upload",level:3},{value:"Example",id:"example-1",level:4},{value:"Params description",id:"params-description-1",level:4},{value:"get_upload_unsuccessful_files_count",id:"get_upload_unsuccessful_files_count",level:3},{value:"get_successfully_uploaded_files_count",id:"get_successfully_uploaded_files_count",level:3},{value:"get_upload_unsuccessful_files",id:"get_upload_unsuccessful_files",level:3},{value:"get_successfully_uploaded_files",id:"get_successfully_uploaded_files",level:3},{value:"File handling",id:"file-handling",level:2},{value:"show_add_file_ui",id:"show_add_file_ui",level:3},{value:"preview_file",id:"preview_file",level:3},{value:"Example",id:"example-2",level:4},{value:"Param Description",id:"param-description",level:4},{value:"get_selected_files",id:"get_selected_files",level:3},{value:"get_all_files",id:"get_all_files",level:3},{value:"clear_files",id:"clear_files",level:3},{value:"get_total_file_count",id:"get_total_file_count",level:3},{value:"remove_file",id:"remove_file",level:3},{value:"Example",id:"example-3",level:4},{value:"Params description",id:"params-description-2",level:4},{value:"add_file",id:"add_file",level:3},{value:"Example",id:"example-4",level:4},{value:"Params description",id:"params-description-3",level:4},{value:"File sources",id:"file-sources",level:2},{value:"record_video",id:"record_video",level:3},{value:"record_audio",id:"record_audio",level:3},{value:"capture_image",id:"capture_image",level:3},{value:"record_screen",id:"record_screen",level:3},{value:"launch_url_source",id:"launch_url_source",level:3},{value:"launch_dropbox_source",id:"launch_dropbox_source",level:3},{value:"launch_box_source",id:"launch_box_source",level:3},{value:"launch_dalle_source",id:"launch_dalle_source",level:3}];function h(e){const l={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(l.p,{children:"This page consists of all the CustUp methods for interacting with CustUp instances."}),"\n",(0,s.jsx)(l.h2,{id:"file-upload",children:"File Upload"}),"\n",(0,s.jsx)(l.h3,{id:"upload",children:"upload"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"file_id: string | undefined"})," - Optional"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"The method to upload file(s) to the endpoint"}),"\n",(0,s.jsx)(l.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n});\n\ninstance1.upload(); // this will upload all files\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.upload(file_id);\n"})}),"\n",(0,s.jsx)(l.h4,{id:"params-description",children:"Params Description"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Param"}),(0,s.jsx)(l.th,{children:"Type"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"file_id"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"string | undefined"})}),(0,s.jsx)(l.td,{children:"the id of the file to upload in the case of a single file, all the files will be uploaded serially if not provided"})]})})]}),"\n",(0,s.jsx)(l.h3,{id:"retry_upload",children:"retry_upload"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"file_id: string"})," - Required"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"To retry file upload for a file that couldn't be uploaded because of an error."}),"\n",(0,s.jsx)(l.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n});\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.retry_upload(file_id)\n"})}),"\n",(0,s.jsx)(l.h4,{id:"params-description-1",children:"Params description"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Param"}),(0,s.jsx)(l.th,{children:"Type"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"file_id"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"string"})}),(0,s.jsxs)(l.td,{children:["The ",(0,s.jsx)(l.code,{children:"id"})," of the file to upload"]})]})})]}),"\n",(0,s.jsx)(l.h3,{id:"get_upload_unsuccessful_files_count",children:"get_upload_unsuccessful_files_count"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns the total number of files that could not be uploaded due to an error."}),"\n",(0,s.jsx)(l.h3,{id:"get_successfully_uploaded_files_count",children:"get_successfully_uploaded_files_count"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns the total number of files that were successfully uploaded."}),"\n",(0,s.jsx)(l.h3,{id:"get_upload_unsuccessful_files",children:"get_upload_unsuccessful_files"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns all files that were not uploaded due to an error."}),"\n",(0,s.jsx)(l.h3,{id:"get_successfully_uploaded_files",children:"get_successfully_uploaded_files"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns all the files that were successfuly uploaded."}),"\n",(0,s.jsx)(l.h2,{id:"file-handling",children:"File handling"}),"\n",(0,s.jsx)(l.h3,{id:"show_add_file_ui",children:"show_add_file_ui"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method is for programmatically opening the UI for adding new files which is also called default UI overlay"}),"\n",(0,s.jsx)(l.h3,{id:"preview_file",children:"preview_file"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"file_id: string"})," - Required"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"To preview a file programmatically"}),"\n",(0,s.jsx)(l.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.preview_file(file_id)\n"})}),"\n",(0,s.jsx)(l.h4,{id:"param-description",children:"Param Description"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Param"}),(0,s.jsx)(l.th,{children:"Type"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsx)(l.tbody,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"file_id"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"string"})}),(0,s.jsxs)(l.td,{children:["the method to preview a file, when this method is called with the ",(0,s.jsx)(l.code,{children:"file_id"})," param the file preview UI will open and preview the file, currently only image, video and audio files can be previewed"]})]})})]}),"\n",(0,s.jsx)(l.h3,{id:"get_selected_files",children:"get_selected_files"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns all selected files excluding the default files, that is, excluding the files that were passed to CustUp and that were loaded immediately after initialization."}),"\n",(0,s.jsx)(l.h3,{id:"get_all_files",children:"get_all_files"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method returns all selected files including the default files that were automatically loaded at initialization."}),"\n",(0,s.jsx)(l.h3,{id:"clear_files",children:"clear_files"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["This method when called will clear all files including the files that were automatically loaded at initialization also called default files, the UI will also be cleared (If default UI type is used) and the ",(0,s.jsx)(l.code,{children:"file.all_removed"})," event will be raised."]}),"\n",(0,s.jsx)(l.h3,{id:"get_total_file_count",children:"get_total_file_count"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["This method returns the number of all added files including the default files if the ",(0,s.jsx)(l.code,{children:"count_default_files"})," option is not set to ",(0,s.jsx)(l.code,{children:"false"})," else default files will be excluded from the count."]}),"\n",(0,s.jsx)(l.h3,{id:"remove_file",children:"remove_file"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"file_id: string"})," - Required",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"callback_fn: Function"})," - Optional"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["This method is for removing a file from the memory and/or the browser storage if ",(0,s.jsx)(l.code,{children:"persist_files"})," is ",(0,s.jsx)(l.code,{children:"true"})," and it will remove the file from the UI if any of CustUp UI is used, this method is also going to trigger the ",(0,s.jsx)(l.code,{children:"file.removed"})," event after the file has been removed"]}),"\n",(0,s.jsx)(l.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.remove_file(file_id, () => make_random_api_call(file_id));\n"})}),"\n",(0,s.jsx)(l.h4,{id:"params-description-2",children:"Params description"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Param"}),(0,s.jsx)(l.th,{children:"Type"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"file_id"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"string"})}),(0,s.jsxs)(l.td,{children:["The ",(0,s.jsx)(l.code,{children:"id"})," of the file that should be removed"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"callback_fn"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"Function"})}),(0,s.jsx)(l.td,{children:"The callback function that will be called after the file has been removed"})]})]})]}),"\n",(0,s.jsx)(l.h3,{id:"add_file",children:"add_file"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"file: File | Blob | Array<File | Blob>"})," - Required",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"skip_file_check: boolean"})," - Optional"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method is for adding files to CustUp programmatically after CustUp has been initialized."}),"\n",(0,s.jsx)(l.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file = new File(...); // for example\n\ninstance1.add_file(file, skip_file_check);\n\ninstance1.add_file([file1, file2, file3]);\n"})}),"\n",(0,s.jsx)(l.h4,{id:"params-description-3",children:"Params description"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Param"}),(0,s.jsx)(l.th,{children:"Type"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"file"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"File | Blob | Array<File | Blob>"})}),(0,s.jsxs)(l.td,{children:["This can be of type ",(0,s.jsx)(l.code,{children:"Blob"})," or ",(0,s.jsx)(l.code,{children:"File"})," or ",(0,s.jsx)(l.code,{children:"array"})," of files"]})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"skip_file_check"})}),(0,s.jsx)(l.td,{children:(0,s.jsx)(l.code,{children:"boolean"})}),(0,s.jsxs)(l.td,{children:["If this is ",(0,s.jsx)(l.code,{children:"true"})," constraint checks will be skipped on the file or files"]})]})]})]}),"\n",(0,s.jsx)(l.h2,{id:"file-sources",children:"File sources"}),"\n",(0,s.jsx)(l.h3,{id:"record_video",children:"record_video"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the video recording UI to record video with user's Media Device."}),"\n",(0,s.jsx)(l.h3,{id:"record_audio",children:"record_audio"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the audio recording UI to record audio with user's Media Device."}),"\n",(0,s.jsx)(l.h3,{id:"capture_image",children:"capture_image"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the image capture UI to capture image with user's Media Device."}),"\n",(0,s.jsx)(l.h3,{id:"record_screen",children:"record_screen"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the screen recorder UI to record screen with user's Media Device."}),"\n",(0,s.jsx)(l.h3,{id:"launch_url_source",children:"launch_url_source"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the URL file source UI to add file from URL."}),"\n",(0,s.jsx)(l.h3,{id:"launch_dropbox_source",children:"launch_dropbox_source"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the Dropbox file source UI to add file from Dropbox."}),"\n",(0,s.jsx)(l.h3,{id:"launch_box_source",children:"launch_box_source"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the Box file source UI to add file from Box."}),"\n",(0,s.jsx)(l.h3,{id:"launch_dalle_source",children:"launch_dalle_source"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["Params:",(0,s.jsx)(l.br,{}),"\n","None"]}),"\n",(0,s.jsxs)(l.li,{children:["returns",(0,s.jsx)(l.br,{}),"\n",(0,s.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"This method launches the DALL.E file source UI to generate files with OpenAI DALL.E v3."})]})}function o(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,l,i)=>{i.d(l,{Z:()=>c,a:()=>r});var s=i(7294);const n={},d=s.createContext(n);function r(e){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);