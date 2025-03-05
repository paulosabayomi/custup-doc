"use strict";(self.webpackChunkcustup_doc=self.webpackChunkcustup_doc||[]).push([[46],{3829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const r={sidebar_position:14},o="Chunk Upload",l={id:"chunk-upload",title:"Chunk Upload",description:"Currently Chunk upload is only available for serial file upload and not for combined file upload which is uploading files together with form field on submit or together with other CustUp instances, chunk upload may be available for combined upload in the future.",source:"@site/docs/chunk-upload.md",sourceDirName:".",slug:"/chunk-upload",permalink:"/custup-doc/docs/chunk-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/custup-doc/tree/main/docs/chunk-upload.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"React JS",permalink:"/custup-doc/docs/frameworks/react-js"},next:{title:"Contributing",permalink:"/custup-doc/docs/contributing"}},a={},c=[{value:"Example",id:"example",level:2},{value:"Server-side implementation",id:"server-side-implementation",level:2},{value:"Express JS",id:"express-js",level:3},{value:"PHP",id:"php",level:3},{value:"Laravel",id:"laravel",level:3},{value:"Django",id:"django",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"chunk-upload",children:"Chunk Upload"}),"\n",(0,i.jsx)(n.admonition,{title:"Info",type:"warning",children:(0,i.jsx)(n.p,{children:"Currently Chunk upload is only available for serial file upload and not for combined file upload which is uploading files together with form field on submit or together with other CustUp instances, chunk upload may be available for combined upload in the future."})}),"\n",(0,i.jsxs)(n.p,{children:["CustUp supports uploading files to the server in chunks, to specify that files should be uploaded in chunks set the ",(0,i.jsx)(n.code,{children:"should_chunk"})," option to ",(0,i.jsx)(n.code,{children:"true"})," and you can also specify the size of the chunk."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"const instance1 = new CustUp({\n    file_upload: {\n        endpoint_url: 'http://localhost',\n        additional_data: {\n            user_id: 798756789976\n        },\n        axios_settings: {\n            config: {\n                timeout: 20000000,\n            }\n        },\n        should_chunk: true,\n        chunk_size: 1024 * 1024 * 5, // 5MB\n    },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then CustUp will upload the files in chunks with the specified chunks size."}),"\n",(0,i.jsx)(n.h2,{id:"server-side-implementation",children:"Server-side implementation"}),"\n",(0,i.jsx)(n.p,{children:"The server can be implemented as you wish but to get you started quickly, I have provided the following working examples on how to implement the server-side using different server-side technologies."}),"\n",(0,i.jsx)(n.h3,{id:"express-js",children:"Express JS"}),"\n",(0,i.jsxs)(n.p,{children:["For this working example ",(0,i.jsx)(n.code,{children:"formidable"})," package is required and you can install it with"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i formidable\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="server.js"',children:"\nconst express = require('express')\nconst app = express()\nvar formidable = require('formidable'); \nvar fs = require('fs');\nconst cors = require('cors');\nconst path = require('path')\nconst bodyParser = require('body-parser');\n\napp.use(express.static('public'))\napp.get('/', (req, res) => {\n  res.send('hello world')\n})\napp.use(cors())\n\n\napp.post('/fileupload', (req, res) => {\n\n    var form = new formidable.IncomingForm();\n    form.parse(req, function (err, fields, files) {\n       \n       // the main code for writing the uploaded files in chunks\n       // Because the files being sent from the front-end is an array,\n       // then it loops through each items in the array and write\n       // them by creating a new file if they don't already exist and \n       // appending the chunks to their respective files if they \n       // already exist, and finally it deletes the chunks from\n       // the temp dir to save disk.\n        for (const key in files) {\n            if (Object.hasOwnProperty.call(files, key)) {\n                const file = files[key];\n                const fileWrite = fs.createWriteStream(`uploads/${file[0].originalFilename}`, { flags: 'a' }); // Append mode\n                const readFile = fs.readFileSync(file[0].filepath)\n                fileWrite.write(readFile)\n                fileWrite.close()\n                fs.unlinkSync(file[0].filepath)\n            }\n        }\n\n        res.end();\n    });\n\n})\n\napp.listen(6000)\nconsole.log(\"server running on port:6000\");\n"})}),"\n",(0,i.jsx)(n.h3,{id:"php",children:"PHP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="example-api.php"',children:"<?php\n\n// ...\n\nheader(\"Access-Control-Allow-Origin: *\");\nheader(\"Access-Control-Allow-Headers: *\");\n\n// ...\n\nif (isset($_FILES)) {\n    foreach ($_FILES as $file => $file_object) {\n        $cur_file_name = './'.$file_object['name'];\n        $tmp_file = file_get_contents($file_object['tmp_name']);\n        file_put_contents($cur_file_name, $tmp_file, FILE_APPEND | LOCK_EX);\n        unlink($file_object['tmp_name']);\n    }\n}\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"laravel",children:"Laravel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="RandomController.php"',children:"<?php\n\nnamespace App\\Http\\Controllers;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Illuminate\\Http\\Request;\n\nclass RandomController extends Controller\n{\n    public function uploadFile (Request $request) {\n        foreach ($request->files as $key => $file_object) {\n            Storage::append($file_object->getClientOriginalName(), file_get_contents($file_object->getPathName()));\n            unlink($file_object->getPathName());\n        }\n    }\n}\n\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"django",children:"Django"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:'title="views.py"',children:'from django.http import HttpResponse\nfrom django.views.decorators.csrf import csrf_exempt, csrf_protect\nimport os\n\n#...\n\n@csrf_exempt # just for this use case\ndef upload_file(request):\n    for file in request.FILES:\n        with open(request.FILES[file].name, "ab") as destination:\n            for chunk in request.FILES[file].chunks():\n                destination.write(chunk)\n        if \'temporary_file_path\' in request.FILES[file]:\n            os.unlink(request.FILES[file].temporary_file_path())\n    return HttpResponse("Done uploading the chunk")\n\n#...\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"These methods of implementing server-side chunk upload may not be the best implementation but they are enough to get you started to quickly implement CustUp chunk upload on the server-side."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);