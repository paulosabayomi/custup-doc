---
sidebar_position: 14
---

# Chunk Upload

::::warning Info
Currently Chunk upload is only available for serial file upload and not for combined file upload which is uploading files together with form field on submit or together with other CustUp instances, chunk upload may be available for combined upload in the future.
::::

CustUp supports uploading files to the server in chunks, to specify that files should be uploaded in chunks set the `should_chunk` option to `true` and you can also specify the size of the chunk.

## Example

```js title="index.js"
const instance1 = new CustUp({
    file_upload: {
        endpoint_url: 'http://localhost',
        additional_data: {
            user_id: 798756789976
        },
        axios_settings: {
            config: {
                timeout: 20000000,
            }
        },
        should_chunk: true,
        chunk_size: 1024 * 1024 * 5, // 5MB
    },
});
```
  
Then CustUp will upload the files in chunks with the specified chunks size.

## Server-side implementation

The server can be implemented as you wish but to get you started quickly, I have provided the following working examples on how to implement the server-side using different server-side technologies.

### Express JS

For this working example `formidable` package is required and you can install it with

```bash
npm i formidable
```

```js title="server.js"

const express = require('express')
const app = express()
var formidable = require('formidable'); 
var fs = require('fs');
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(cors())


app.post('/fileupload', (req, res) => {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
       
       // the main code for writing the uploaded files in chunks
       // Because the files being sent from the front-end is an array,
       // then it loops through each items in the array and write
       // them by creating a new file if they don't already exist and 
       // appending the chunks to their respective files if they 
       // already exist, and finally it deletes the chunks from
       // the temp dir to save disk.
        for (const key in files) {
            if (Object.hasOwnProperty.call(files, key)) {
                const file = files[key];
                const fileWrite = fs.createWriteStream(`uploads/${file[0].originalFilename}`, { flags: 'a' }); // Append mode
                const readFile = fs.readFileSync(file[0].filepath)
                fileWrite.write(readFile)
                fileWrite.close()
                fs.unlinkSync(file[0].filepath)
            }
        }

        res.end();
    });

})

app.listen(6000)
console.log("server running on port:6000");
```

### PHP

```php title="example-api.php"
<?php

// ...

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// ...

if (isset($_FILES)) {
    foreach ($_FILES as $file => $file_object) {
        $cur_file_name = './'.$file_object['name'];
        $tmp_file = file_get_contents($file_object['tmp_name']);
        file_put_contents($cur_file_name, $tmp_file, FILE_APPEND | LOCK_EX);
        unlink($file_object['tmp_name']);
    }
}

```

### Laravel

```php title="RandomController.php"
<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class RandomController extends Controller
{
    public function uploadFile (Request $request) {
        foreach ($request->files as $key => $file_object) {
            Storage::append($file_object->getClientOriginalName(), file_get_contents($file_object->getPathName()));
            unlink($file_object->getPathName());
        }
    }
}


```

### Django

```py title="views.py"
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
import os

#...

@csrf_exempt # just for this use case
def upload_file(request):
    for file in request.FILES:
        with open(request.FILES[file].name, "ab") as destination:
            for chunk in request.FILES[file].chunks():
                destination.write(chunk)
        if 'temporary_file_path' in request.FILES[file]:
            os.unlink(request.FILES[file].temporary_file_path())
    return HttpResponse("Done uploading the chunk")

#...

```

These methods of implementing server-side chunk upload may not be the best implementation but they are enough to get you started to quickly implement CustUp chunk upload on the server-side.
