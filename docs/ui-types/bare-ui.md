---
sidebar_position: 3
---

# Bare

import React from 'react';
import CustUp from 'custup/src/custup.min.js';

Bare UI type is the simplest UI type.

export const BareUI = ({}) => {
    React.useEffect(() => {
        const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            ui_type: 'bare',
            file_upload: {
                endpoint_url: 'http://api.pryxy.com/fileupload',
                files_field_name: 'profileImage',
            }
        })
    }, [])
    return (<></>)
}

<div id="container-1" style={{marginBottom: 15}}></div>

<BareUI />  
  
```js title="index.js"
const instance1 = new CustUp({
            targetRootElement: "#container-1",
            default_styles_override: {
                outerContainer: ["custup_outer_contaner", true],
            },
            // ...
            ui_type: 'bare'
            // ...

        })
```
