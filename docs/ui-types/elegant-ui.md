---
sidebar_position: 4
---

# Elegant

import React from 'react';
import CustUp from 'custup/src/custup.min.js';

Elegant UI type is a beautiful and fully responsive UI type.

export const ElegantUI = ({}) => {
    React.useEffect(() => {
        const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            ui_type: 'elegant',
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
    }, [])
    return (<></>)
}

<div id="container-1" style={{marginBottom: 15}}></div>

<ElegantUI />  
  
```js title="index.js"
const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            // ...
            ui_type: 'elegant'
            // ...

        })
```
