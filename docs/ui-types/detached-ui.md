---
sidebar_position: 5
---

# Detached

import React from 'react';
import CustUp from 'custup/src/custup.min.js';

Detached UI type is the type that has the default UI and file display separately on the UI.

export const DetachedUI = ({}) => {
    React.useEffect(() => {
        const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            ui_type: 'detached',
            file_upload: {
                endpoint_url: 'https://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
    }, [])
    return (<></>)
}

<div id="container-1" style={{marginBottom: 15}}></div>

<DetachedUI />  
  
```js title="index.js"
const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            // ...
            ui_type: 'detached'
            // ...

        })
```
