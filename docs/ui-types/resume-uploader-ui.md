---
sidebar_position: 7
---

# Resume Upload UI

::::tip Note
This UI type does not have any tools, for example the upload button tool, because it was made for single file upload or combined file upload. so it is best to set the `single_upload` option to `true` or you can add your own custom tools/buttons functions.
::::

import React from 'react';
import CustUp from 'custup/src/custup.min.js';

The Resume/Curriculum Vitae (CV) Upload UI type is the type of uploader you see on most job application websites for uploading resumes, you can also customize it to the taste of your project.  
  
This UI type requires the `allowed_file_types` and the `maximumAllowedFileSize` options to be set.

export const ResumeUploader = ({}) => {
    React.useEffect(() => {
        const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            ui_type: 'resumeUploaderUI',
            allowed_file_types: ['pdf'],
            maximumAllowedFileSize: 10000000,
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
    }, [])
    return (<></>)
}

<div id="container-1" style={{marginBottom: 15}}></div>

<ResumeUploader />  
  
```js title="index.js"
const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            // ...
            ui_type: 'resumeUploaderUI',
            allowed_file_types: ['pdf'],
            maximumAllowedFileSize: 10000000
            // ...

        })
```
