"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[6838],{9955:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var l=s(5893),n=s(1151);const d={sidebar_position:9},r="Methods",c={id:"methods",title:"Methods",description:"This page consists of all the CustUp methods for interacting with CustUp instances.",source:"@site/docs/methods.md",sourceDirName:".",slug:"/methods",permalink:"/docs/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/methods.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/docs/properties"},next:{title:"Events",permalink:"/docs/events"}},t={},o=[{value:"Event method",id:"event-method",level:2},{value:"on",id:"on",level:3},{value:"Example",id:"example",level:4},{value:"File Upload",id:"file-upload",level:2},{value:"upload",id:"upload",level:3},{value:"Example",id:"example-1",level:4},{value:"Params Description",id:"params-description",level:4},{value:"retry_upload",id:"retry_upload",level:3},{value:"Example",id:"example-2",level:4},{value:"Params description",id:"params-description-1",level:4},{value:"get_upload_unsuccessful_files_count",id:"get_upload_unsuccessful_files_count",level:3},{value:"get_successfully_uploaded_files_count",id:"get_successfully_uploaded_files_count",level:3},{value:"get_upload_unsuccessful_files",id:"get_upload_unsuccessful_files",level:3},{value:"get_successfully_uploaded_files",id:"get_successfully_uploaded_files",level:3},{value:"File handling",id:"file-handling",level:2},{value:"show_add_file_ui",id:"show_add_file_ui",level:3},{value:"hide_add_file_ui",id:"hide_add_file_ui",level:3},{value:"is_add_file_ui_shown",id:"is_add_file_ui_shown",level:3},{value:"preview_file",id:"preview_file",level:3},{value:"Example",id:"example-3",level:4},{value:"Param Description",id:"param-description",level:4},{value:"get_selected_files",id:"get_selected_files",level:3},{value:"get_default_files",id:"get_default_files",level:3},{value:"get_all_files",id:"get_all_files",level:3},{value:"clear_files",id:"clear_files",level:3},{value:"get_total_file_count",id:"get_total_file_count",level:3},{value:"remove_file",id:"remove_file",level:3},{value:"Example",id:"example-4",level:4},{value:"Params description",id:"params-description-2",level:4},{value:"add_file",id:"add_file",level:3},{value:"Example",id:"example-5",level:4},{value:"Params description",id:"params-description-3",level:4},{value:"clear_persisted_files",id:"clear_persisted_files",level:3},{value:"select_file_from_device",id:"select_file_from_device",level:3},{value:"is_file_previewable",id:"is_file_previewable",level:3},{value:"Options",id:"options",level:2},{value:"setOptions",id:"setoptions",level:3},{value:"File sources",id:"file-sources",level:2},{value:"record_video",id:"record_video",level:3},{value:"record_audio",id:"record_audio",level:3},{value:"capture_image",id:"capture_image",level:3},{value:"record_screen",id:"record_screen",level:3},{value:"launch_url_source",id:"launch_url_source",level:3},{value:"launch_dropbox_source",id:"launch_dropbox_source",level:3},{value:"launch_box_source",id:"launch_box_source",level:3},{value:"launch_dalle_source",id:"launch_dalle_source",level:3},{value:"get_file_sources",id:"get_file_sources",level:3},{value:"Params description",id:"params-description-4",level:4},{value:"Example",id:"example-6",level:4},{value:"close_file_source_popup",id:"close_file_source_popup",level:3},{value:"Notification",id:"notification",level:2},{value:"display_message",id:"display_message",level:3},{value:"Params description",id:"params-description-5",level:4},{value:"Example",id:"example-7",level:4}];function h(e){const i={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(i.p,{children:"This page consists of all the CustUp methods for interacting with CustUp instances."}),"\n",(0,l.jsx)(i.h2,{id:"event-method",children:"Event method"}),"\n",(0,l.jsx)(i.h3,{id:"on",children:"on"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"eventName: string"})," - required",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"callbackFn: Function"})," - required"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This method can be used to subscribe to CustUp events, it serves as an alternative to ",(0,l.jsx)(i.code,{children:"addEventListener"}),"."]}),"\n",(0,l.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({...});\n\ninstance1.on('file.beforeAdded', (e) => {\n    console.log(e.detail)\n});\n"})}),"\n",(0,l.jsx)(i.h2,{id:"file-upload",children:"File Upload"}),"\n",(0,l.jsx)(i.h3,{id:"upload",children:"upload"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"file_id: string | undefined"})," - Optional"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"The method to upload file(s) to the endpoint"}),"\n",(0,l.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n});\n\ninstance1.upload(); // this will upload all files\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.upload(file_id);\n"})}),"\n",(0,l.jsx)(i.h4,{id:"params-description",children:"Params Description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"file_id"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string | undefined"})}),(0,l.jsx)(i.td,{children:"the id of the file to upload in the case of a single file, all the files will be uploaded serially if not provided"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"retry_upload",children:"retry_upload"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"file_id: string"})," - Required"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"To retry file upload for a file that couldn't be uploaded because of an error."}),"\n",(0,l.jsx)(i.h4,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n});\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.retry_upload(file_id)\n"})}),"\n",(0,l.jsx)(i.h4,{id:"params-description-1",children:"Params description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"file_id"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsxs)(i.td,{children:["The ",(0,l.jsx)(i.code,{children:"id"})," of the file to upload"]})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"get_upload_unsuccessful_files_count",children:"get_upload_unsuccessful_files_count"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns the total number of files that could not be uploaded due to an error."}),"\n",(0,l.jsx)(i.h3,{id:"get_successfully_uploaded_files_count",children:"get_successfully_uploaded_files_count"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns the total number of files that were successfully uploaded."}),"\n",(0,l.jsx)(i.h3,{id:"get_upload_unsuccessful_files",children:"get_upload_unsuccessful_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns all files that were not uploaded due to an error."}),"\n",(0,l.jsx)(i.h3,{id:"get_successfully_uploaded_files",children:"get_successfully_uploaded_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns all the files that were successfuly uploaded."}),"\n",(0,l.jsx)(i.h2,{id:"file-handling",children:"File handling"}),"\n",(0,l.jsx)(i.h3,{id:"show_add_file_ui",children:"show_add_file_ui"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for programmatically opening the UI for adding new files which is also called default UI overlay"}),"\n",(0,l.jsx)(i.h3,{id:"hide_add_file_ui",children:"hide_add_file_ui"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for programmatically hiding the UI for adding new files which is also called default UI overlay."}),"\n",(0,l.jsx)(i.h3,{id:"is_add_file_ui_shown",children:"is_add_file_ui_shown"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for checking if the add file UI or the default UI has been hidden or shown."}),"\n",(0,l.jsx)(i.h3,{id:"preview_file",children:"preview_file"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"file_id: string"})," - Required"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"To preview a file programmatically"}),"\n",(0,l.jsx)(i.h4,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.preview_file(file_id)\n"})}),"\n",(0,l.jsx)(i.h4,{id:"param-description",children:"Param Description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"file_id"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsxs)(i.td,{children:["the method to preview a file, when this method is called with the ",(0,l.jsx)(i.code,{children:"file_id"})," param the file preview UI will open and preview the file, currently only image, video and audio files can be previewed"]})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"get_selected_files",children:"get_selected_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns all selected files excluding the default files, that is, excluding the files that were passed to CustUp and that were loaded immediately after initialization."}),"\n",(0,l.jsx)(i.h3,{id:"get_default_files",children:"get_default_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This method returns all the default files i.e all the files that were passed to CustUp through the ",(0,l.jsx)(i.code,{children:"default_files"})," option and that were loaded immediately after initialization."]}),"\n",(0,l.jsx)(i.h3,{id:"get_all_files",children:"get_all_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<File>"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method returns all selected files including the default files that were automatically loaded at initialization."}),"\n",(0,l.jsx)(i.h3,{id:"clear_files",children:"clear_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This method when called will clear all files including the files that were automatically loaded at initialization also called default files, the UI will also be cleared (If default UI type is used) and the ",(0,l.jsx)(i.code,{children:"file.all_removed"})," event will be raised."]}),"\n",(0,l.jsx)(i.h3,{id:"get_total_file_count",children:"get_total_file_count"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This method returns the number of all added files including the default files if the ",(0,l.jsx)(i.code,{children:"count_default_files"})," option is not set to ",(0,l.jsx)(i.code,{children:"false"})," else default files will be excluded from the count."]}),"\n",(0,l.jsx)(i.h3,{id:"remove_file",children:"remove_file"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"file_id: string"})," - Required",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"callback_fn: Function"})," - Optional"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This method is for removing a file from the memory and/or the browser storage if ",(0,l.jsx)(i.code,{children:"persist_files"})," is ",(0,l.jsx)(i.code,{children:"true"})," and it will remove the file from the UI if any of CustUp UI is used, this method is also going to trigger the ",(0,l.jsx)(i.code,{children:"file.removed"})," event after the file has been removed"]}),"\n",(0,l.jsx)(i.h4,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file_id = instance1.get_all_files()[0].id;\n\ninstance1.remove_file(file_id, () => make_random_api_call(file_id));\n"})}),"\n",(0,l.jsx)(i.h4,{id:"params-description-2",children:"Params description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"file_id"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsxs)(i.td,{children:["The ",(0,l.jsx)(i.code,{children:"id"})," of the file that should be removed"]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"callback_fn"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"Function"})}),(0,l.jsx)(i.td,{children:"The callback function that will be called after the file has been removed"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"add_file",children:"add_file"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"file: File | Blob | Array<File | Blob>"})," - Required",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"skip_file_check: boolean"})," - Optional",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"index: null"})," - Optional"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for adding files to CustUp programmatically after CustUp has been initialized."}),"\n",(0,l.jsx)(i.h4,{id:"example-5",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:"const instance1 = new CustUp({\n    // ...\n})\n\nconst file = new File(...); // for example\n\ninstance1.add_file(file, false, 3); // it will be added in the third position and shift the former 3rd to the fourth position\n\ninstance1.add_file(file, true);\n\ninstance1.add_file([file1, file2, file3]);\n"})}),"\n",(0,l.jsx)(i.h4,{id:"params-description-3",children:"Params description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"file"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"File | Blob | Array<File | Blob>"})}),(0,l.jsxs)(i.td,{children:["This can be of type ",(0,l.jsx)(i.code,{children:"Blob"})," or ",(0,l.jsx)(i.code,{children:"File"})," or ",(0,l.jsx)(i.code,{children:"array"})," of files"]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"skip_file_check"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"boolean"})}),(0,l.jsxs)(i.td,{children:["If this is ",(0,l.jsx)(i.code,{children:"true"})," constraint checks will be skipped on the file or files"]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"index"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsx)(i.td,{children:"Specify this if you want to add the new file to a particular position in the file list and on the UI, if the provided file is an array all the files in the array will be added from the specified position both in the file storage in the memory and on the UI."})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"clear_persisted_files",children:"clear_persisted_files"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for programatically clearing the persisted files from the browser storage."}),"\n",(0,l.jsx)(i.h3,{id:"select_file_from_device",children:"select_file_from_device"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for programatically launching the user's device file picker to choose files."}),"\n",(0,l.jsx)(i.h3,{id:"is_file_previewable",children:"is_file_previewable"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"File"})]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for checking if the provided file is among the CustUp supported file types for preview."}),"\n",(0,l.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(i.h3,{id:"setoptions",children:"setOptions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Object"})," - The options to set"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for setting options dynamically, options set with this method will be overriden."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:'const instance1 = new CustUp({...});\n\ninstance1.setOptions({\n    allowed_file_types: [\'mp3\', "mp4", "jpg", "png", "jpeg", "webp", "gif", "javascript"],\n    file_preview_animation_types: [\'slideInLeft\'],\n})\n'})}),"\n",(0,l.jsx)(i.h2,{id:"file-sources",children:"File sources"}),"\n",(0,l.jsx)(i.h3,{id:"record_video",children:"record_video"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the video recording UI to record video with user's Media Device."}),"\n",(0,l.jsx)(i.h3,{id:"record_audio",children:"record_audio"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the audio recording UI to record audio with user's Media Device."}),"\n",(0,l.jsx)(i.h3,{id:"capture_image",children:"capture_image"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the image capture UI to capture image with user's Media Device."}),"\n",(0,l.jsx)(i.h3,{id:"record_screen",children:"record_screen"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the screen recorder UI to record screen with user's Media Device."}),"\n",(0,l.jsx)(i.h3,{id:"launch_url_source",children:"launch_url_source"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the URL file source UI to add file from URL."}),"\n",(0,l.jsx)(i.h3,{id:"launch_dropbox_source",children:"launch_dropbox_source"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the Dropbox file source UI to add file from Dropbox."}),"\n",(0,l.jsx)(i.h3,{id:"launch_box_source",children:"launch_box_source"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the Box file source UI to add file from Box."}),"\n",(0,l.jsx)(i.h3,{id:"launch_dalle_source",children:"launch_dalle_source"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n","None"]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method launches the DALL.E file source UI to generate files with OpenAI DALL.E v3."}),"\n",(0,l.jsx)(i.h3,{id:"get_file_sources",children:"get_file_sources"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"{iconsContainer: HTMLElement | null, allElOnClick: Function | null, additionalElOnClickEv: Object}"})]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Array<HTMLDivElement>"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for getting all the allowed file sources, if none is specified in the option all the file sources will be returned."}),"\n",(0,l.jsx)(i.h4,{id:"params-description-4",children:"Params description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Default"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"iconsContainer"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"HTMLElement | null"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"null"})}),(0,l.jsx)(i.td,{children:"The HTML element in which the file source HTML elements will be appended to automatically when passed to the method"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"allElOnClick"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"Function | null"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"null"})}),(0,l.jsxs)(i.td,{children:["This is to pass a function that will be added to ",(0,l.jsx)(i.code,{children:"onClick"})," event of all the file source elements"]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"additionalElOnClickEv"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"Object"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"{}"})}),(0,l.jsxs)(i.td,{children:["This is to pass specific additional ",(0,l.jsx)(i.code,{children:"onClick"})," event to a specific file source element, example below."]})]})]})]}),"\n",(0,l.jsx)(i.h4,{id:"example-6",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:'const instance1 = new CustUp({});\n\n// Example 1\nconst custum_file_sources_el_container = document.querySelector(\'.random_container\');\nconst additionalOnClickEv = (e) => alert(e);\ninstance1.get_file_sources(custum_file_sources_el_container, additionalOnClickEv); // it returns an array of file source DIV elements\n\n// Example 2\nconst spec_callback_fns = {\n    link_source: (e) => alert("Hey!, I am the link source"),\n    record_screen: (e) => alert("Hey!, I am about to record the screen!!")\n}\n\nconst all_file_sources = instance1.get_file_sources(null, null, spec_callback_fns); // it returns an array of file source DIV elements\n\nall_file_sources.forEach(el => {\n    /* Do something with each elements */\n    custum_file_sources_el_container.append(el);\n})\n'})}),"\n",(0,l.jsx)(i.h3,{id:"close_file_source_popup",children:"close_file_source_popup"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"None"})]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is for programatically closing the file source overlay UI popup."}),"\n",(0,l.jsx)(i.h2,{id:"notification",children:"Notification"}),"\n",(0,l.jsx)(i.h3,{id:"display_message",children:"display_message"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Params:",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:'{msg: string; type: "error" | "success" | "info"; async: boolean; timeout: number}'})]}),"\n",(0,l.jsxs)(i.li,{children:["returns",(0,l.jsx)(i.br,{}),"\n",(0,l.jsx)(i.code,{children:"Function | void"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This method is used for displaying messages programatically and dynamically on the CustUp UI."}),"\n",(0,l.jsx)(i.h4,{id:"params-description-5",children:"Params description"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Param"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Default"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"msg"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"string"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"<empty string>"})}),(0,l.jsx)(i.td,{children:"The message that should be displayed"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"type"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:'"error" | "success" | "info"'})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"undefined"})}),(0,l.jsx)(i.td,{children:"The type of the message that will be displayed"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"async"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"boolean"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"false"})}),(0,l.jsxs)(i.td,{children:["Whether the message is asynchronous or not, asynchronous messages are for displaying messages for async requests and Promises, if set to ",(0,l.jsx)(i.code,{children:"true"})," an infinite round loading indicator will be displayed in the shown message and the shown message will not hide until the returned hide function has been expicitly called by after the Promise has been resolved, see example below."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"timeout"})}),(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"number"})}),(0,l.jsxs)(i.td,{children:["The ",(0,l.jsx)(i.code,{children:"timeout"})," option which is 4000ms or 4s by default"]}),(0,l.jsx)(i.td,{children:"The timeout for the message, it doesn't have any effect if the notification is async."})]})]})]}),"\n",(0,l.jsx)(i.h4,{id:"example-7",children:"Example"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-js",children:'const instance1 = new CustUp({});\n\nconst request_notification = instance1.display_message("Fetching files from the server", "info", true);\n\nawait some_async_requests();\n\nrequest_notification(); // after gets called here the async message will hide or be removed from the DOM (with animation) immediately, if not called the async message will not be hidden\n'})})]})}function a(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>r});var l=s(7294);const n={},d=l.createContext(n);function r(e){const i=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(d.Provider,{value:i},e.children)}}}]);