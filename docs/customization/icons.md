---
sidebar_position: 7
---

# Icons

You can overide the icons or add your own programatically

You can override the icons or add your own icons with the `default_icons_override` option  
  
**For example**

```js
const options = {
    // ...
    default_icons_override: {
        send: '<div>S</div>',
        eye: '<div>E</div>'
    },
}

const uploader = new CustUp(options)
```

You can set either an SVG or an HTML element to override an icon or as a new icon.
