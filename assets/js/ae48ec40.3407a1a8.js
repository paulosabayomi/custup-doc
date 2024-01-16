"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[7971],{6905:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(5893),s=t(1151);const a={sidebar_position:4},o="React JS integration",c={id:"guides/react-integration",title:"React JS integration",description:"React JS version of CustUp is now available and the complete setup guide can be found in the frameworks section.",source:"@site/docs/guides/react-integration.md",sourceDirName:"guides",slug:"/guides/react-integration",permalink:"/docs/guides/react-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/guides/react-integration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Attaching instances",permalink:"/docs/guides/attaching-instances"},next:{title:"Types",permalink:"/docs/category/types"}},r={},l=[{value:"Installation",id:"installation",level:2},{value:"Importing CustUp",id:"importing-custup",level:2},{value:"Initializing CustUp",id:"initializing-custup",level:2},{value:"Everything altogether",id:"everything-altogether",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"react-js-integration",children:"React JS integration"}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.p,{children:["React JS version of CustUp is now available and the complete setup guide can be found ",(0,i.jsx)(e.a,{href:"/docs/frameworks/react-js",children:"in the frameworks section."})]})}),"\n",(0,i.jsx)(e.p,{children:"Though the React JS version of CustUp is not yet available but it can work in your React JS applications and it has been tested, this documentation uses React JS and CustUp works in it :)"}),"\n",(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.p,{children:"Install CustUp from npm"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm i custup\n"})}),"\n",(0,i.jsx)(e.h2,{id:"importing-custup",children:"Importing CustUp"}),"\n",(0,i.jsx)(e.p,{children:"Import CustUp like so"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:"import React from 'react';\nimport CustUp from \"custup\";\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Then import CustUp CSS files, the ",(0,i.jsx)(e.code,{children:"all.min.css"})," is recommended as it includes all the CSS files of all the different UI types."]}),"\n",(0,i.jsxs)(e.p,{children:["In the ",(0,i.jsx)(e.code,{children:"index.js"})," file of your React JS application import the CSS file"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:"import 'custup/src/all.min.css';\n// ...\n"})}),"\n",(0,i.jsx)(e.h2,{id:"initializing-custup",children:"Initializing CustUp"}),"\n",(0,i.jsx)(e.p,{children:"After importing CustUp you can initialize it like so"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:'title="ExampleComponent.jsx"',children:'const ExampleComponent = React.memo(({}) => {\n    const [instance1, setInstance1] = React.useState({})\n    // const [instance1, setInstance1] = React.useState<any>({}) // if using typescript\n\n    React.useLayoutEffect(() => {\n        const _inst1 = new CustUp({\n            targetRootElement: "#container-1",\n            // ...\n        });\n\n        setInstance1(_inst1);\n    }, [])\n\n    const exampleCustomSubmit = React.useCallback(() => {\n        instance1.upload();\n    }, [instance1]);\n\n    return (\n        <div>\n            <div id="container-1"></div>\n            <button onClick={exampleCustomSubmit}>Submit</button>\n        </div>\n    )\n});\n\nexport default ExampleComponent;\n'})}),"\n",(0,i.jsx)(e.h2,{id:"everything-altogether",children:"Everything altogether"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:'title="index.js"',children:"// ...\nimport 'custup/src/all.min.css';\n// ...\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:'title="ExampleComponent.jsx"',children:'import React from \'react\';\nimport CustUp from "custup";\n\nconst ExampleComponent = React.memo(({}) => {\n    const [instance1, setInstance1] = React.useState({});\n    // const [instance1, setInstance1] = React.useState<any>({}); // if using typescript\n\n    React.useLayoutEffect(() => {\n        const _inst1 = new CustUp({\n            targetRootElement: "#container-1",\n            // ...\n        });\n\n        setInstance1(_inst1);\n    }, [])\n\n    const exampleCustomSubmit = React.useCallback(() => {\n        instance1.upload();\n    }, [instance1]);\n\n    return (\n        <div>\n            <div id="container-1"></div>\n            <button onClick={exampleCustomSubmit}>Submit</button>\n        </div>\n    )\n});\n\nexport default ExampleComponent;\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>o});var i=t(7294);const s={},a=i.createContext(s);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);