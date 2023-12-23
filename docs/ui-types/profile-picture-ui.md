---
sidebar_position: 5
---

# Profile Picture

import React from 'react';
import CustUp from 'custup/src/custup.min.js';

The profile picture UI type is the type for creating a profile picture file uploader, it accepts single file and only image files.

export const ProfilePictureUI = ({}) => {
    React.useEffect(() => {
        const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            ui_type: 'profilePicture',
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
    }, [])
    return (<></>)
}

<div id="container-1" style={{marginBottom: 15}}></div>

<ProfilePictureUI />  
  
```js title="index.js"
const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            // ...
            ui_type: 'profilePicture'
            // ...

        })
```
