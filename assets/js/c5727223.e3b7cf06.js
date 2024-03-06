"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[8150],{3812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(5893),i=t(1151);const r={sidebar_position:1},o="React JS",a={id:"frameworks/react-js",title:"React JS",description:"The React JS version of CustUp is written completely in TypeScript",source:"@site/docs/frameworks/react-js.md",sourceDirName:"frameworks",slug:"/frameworks/react-js",permalink:"/docs/frameworks/react-js",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/frameworks/react-js.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Frameworks",permalink:"/docs/category/frameworks"},next:{title:"Chunk Upload",permalink:"/docs/chunk-upload"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Basics",id:"basics",level:3},{value:"With TypeScript",id:"with-typescript",level:3},{value:"Using <code>ref</code>",id:"using-ref",level:3},{value:"Multiple Components",id:"multiple-components",level:3},{value:"Subscribing to Events",id:"subscribing-to-events",level:3},{value:"File Upload settings",id:"file-upload-settings",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"react-js",children:"React JS"}),"\n",(0,s.jsx)(n.p,{children:"The React JS version of CustUp is written completely in TypeScript"}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The React JS version of CustUp was built and tested with React JS version 18 and TypeScript version 4.9 so it may not be compatible with older versions of Node JS and browser, requirements are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Latest browser version"}),"\n",(0,s.jsx)(n.li,{children:"NodeJS >16"}),"\n",(0,s.jsx)(n.li,{children:"(Optionally) TypeScript >4.9"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"The CustUp main library needs to be installed with the React JS version because it depends on it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i custup @custup/react\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"basics",children:"Basics"}),"\n",(0,s.jsx)(n.p,{children:"Import it into your component like so"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// ...\nimport CustUp from "@custup/react"\n// ...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then add CustUp component to where you want CustUp to be created"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// ExampleComponent.jsx\n\nconst ExampleComponent = React.memo((props) => {\n    return (\n        <div>\n            <CustUp \n                id="first-example-instance" \n            />\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"with-typescript",children:"With TypeScript"}),"\n",(0,s.jsx)(n.p,{children:"If you're using TypeScript"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// ExampleComponent.tsx\n\nconst ExampleComponent = React.memo((props: any) => {\n    return (\n        <div>\n            <CustUp \n                id="first-example-instance" \n            />\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"using-ref",children:["Using ",(0,s.jsx)(n.code,{children:"ref"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"ref"})," to grab CustUp instance and access all CustUp properties, methods and events, to use ",(0,s.jsx)(n.code,{children:"ref"})," with CustUp, let's use the TypeScript ",(0,s.jsx)(n.code,{children:"ExampleComponent.tsx"})," component"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// ExampleComponent.tsx\n\n// ...\nimport { TCustUp } from "@custup/react";\n\nconst ExampleComponent = React.memo((props: any) => {\n    const ref1 = React.useRef<TCustUp | undefined>()\n\n    const exampleCustUpSubmit = React.useCallback(() => {\n        ref1.current?.upload();\n    }, [ref1.current])\n\n    return (\n        <div>\n            <CustUp \n                ref={ref1}\n                id="first-example-instance" \n            />\n\n            <button onClick={exampleCustUpSubmit}>Upload</button>\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"multiple-components",children:"Multiple Components"}),"\n",(0,s.jsxs)(n.p,{children:["And you can also have multiple CustUp components in the same component, only make sure the ",(0,s.jsx)(n.code,{children:"id"})," props are not the same"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// ExampleComponent.tsx\n\n// ...\nimport { TCustUp } from "@custup/react";\n\nconst ExampleComponent = React.memo((props: any) => {\n    const ref1 = React.useRef<TCustUp | undefined>()\n    const ref2 = React.useRef<TCustUp | undefined>()\n    const ref3 = React.useRef<TCustUp | undefined>()\n\n    const exampleCustUpSubmit = React.useCallback(() => {\n        ref1.current?.upload();\n    }, [ref1.current])\n\n    return (\n        <div>\n            <CustUp \n                ref={ref1}\n                id="first-example-instance" \n            />\n            <CustUp \n                ref={ref2}\n                id="second-example-instance" \n            />\n            <CustUp \n                ref={ref3}\n                id="third-example-instance" \n            />\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"subscribing-to-events",children:"Subscribing to Events"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"ref"})," to subscribe to CustUp events by calling the ",(0,s.jsx)(n.code,{children:"addEventListener"})," or the ",(0,s.jsx)(n.code,{children:"on"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// ExampleComponent.tsx\n\n// ...\nimport { TCustUp } from "@custup/react";\n\nconst ExampleComponent = React.memo((props: any) => {\n    const ref1 = React.useRef<TCustUp | undefined>()\n\n    React.useLayoutEffect(() => {\n\n        ref1.current?.on("file.afterAdded", (e) => {\n            console.log("file was added", e)\n        })\n\n    }, [ref1.current])\n\n\n    return (\n        <div>\n            <CustUp \n                ref={ref1}\n                id="first-example-instance" \n            />\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Events can also be subscribed to by using the  ",(0,s.jsx)(n.code,{children:"on"})," prop, this is useful for events that get triggered before the ",(0,s.jsx)(n.code,{children:"ref"})," gets updated, the ",(0,s.jsx)(n.code,{children:"on"})," method takes an array of objects which contains the type of the event and the callback function for the event listener, for example"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'\nimport { TCustUp } from "@custup/react";\n\nconst ExampleComponent = React.memo((props: any) => {\n    const ref1 = React.useRef<TCustUp | undefined>()\n\n    return (\n        <div>\n            <CustUp \n                ref={ref1}\n                id="first-example-instance" \n                on={[\n                    {\n                        type: \'library.init\',\n                        callbackFn(e) {\n                            console.log("Library has finished initialization", e);\n                        }\n                    },\n                    {\n                        type: \'file.afterAdded\',\n                        callbackFn: (e) => {\n                            console.log("File was added", e.detail)\n                        }\n                    }\n                ]}\n            />\n        </div>\n    )\n})\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"file-upload-settings",children:"File Upload settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="ExampleComponent.tsx"',children:"// ...\nimport { TCustUp } from \"@custup/react\";\n\nconst ExampleComponent = React.memo((props: any) => {\n    const ref1 = React.useRef<TCustUp | undefined>()\n\n    React.useLayoutEffect(() => {\n\n        ref1.current?.on(\"file.afterAdded\", (e) => {\n            console.log(\"file was added\", e)\n        })\n\n        // OR using setOptions\n\n        // ref1.current?.setOptions({\n        //     file_upload_settings={{\n        //         endpoint_url: 'http://localhost/fileupload',\n        //         files_field_name: 'profileImage', // field name of the files\n        //         form_field: '#form', // the id of the form element which will be serialized\n        //         additional_data: { // to pass additional data to the request\n        //             userid: 1234567890,\n        //             username: 'johndoe',\n        //         },\n        //         axios_settings: { // the axios settings\n        //             headers: {\n        //                 'Authorization': 'Bearer test_test_abcdefghijkl'\n        //             },\n        //             configs: {}\n        //         }\n        //     }} \n        // })\n\n    }, [ref1.current])\n\n\n    return (\n        <div>\n            <CustUp \n                ref={ref1}\n                id=\"first-example-instance\"\n                file_upload_settings={{\n                    endpoint_url: 'http://localhost/fileupload',\n                    files_field_name: 'profileImage', // field name of the files\n                    form_field: '#form', // the id of the form element which will be serialized\n                    additional_data: { // to pass additional data to the request\n                        userid: 1234567890,\n                        username: 'johndoe',\n                    },\n                    axios_settings: { // the axios settings\n                        headers: {\n                            'Authorization': 'Bearer test_test_abcdefghijkl'\n                        },\n                        configs: {}\n                    }\n                }} \n            />\n        </div>\n    )\n})\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All CustUp options can be passed as props to the CustUp component, all ",(0,s.jsx)(n.a,{href:"https://custup.pryxy.com/docs/category/options",children:"CustUp options can be seen here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);