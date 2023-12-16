---
sidebar_position: 5
---

# Using Custom Font

You can also provide another Font to be used within CustUp

::::warning Warning

**Note:** CustUp currently only supports Google Fonts, so only Google Fonts link may work as it is only Google Fonts has been tested but you can also try other fonts but it is not guaranteed if they will work

::::

To use a font provide the link or the route to the font if the font is within the project and also the name of the font provided

```js
const options = {
    // ...
    css_font_link: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    css_font_name: "Dancing Script",
}

const uploader = new CustUp(options)
```

If you would like to use the already loaded font in the project then you only need to set the `css_font_name` to the font name.
