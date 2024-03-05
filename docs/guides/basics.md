---
sidebar_position: 1
---

# Basics

First of all import CustUp

```js
import CustUp from "/path/to/custup/src/custup.min.js"
```

Add the `all.min.css` CSS file

```html
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/all.min.css">
```

Basic options

```js
const options = {
    targetRootElement: "#container",
    allowed_file_types: ['mp3', "mp4", "jpg", "png", "jpeg","pdf"],
    maxNumberOfFiles: 5,
    minNumberOfFiles: 3,
    maximumAllowedFileSize: 10000000,
}

const uploader = new CustUp(options)
```

To change UI type

```js
const options = {
    // ...
    ui_type: 'detached', // the detached UI type, see more in Options sections below
}

const uploader = new CustUp(options)
```

To change font style set the `css_font_link` to the link to the Google Font you would like CustUp to use, and or only set `css_font_name` to your application's font name if you want to use the application's font name.

**Note:** CustUp currently only supports Google Fonts

```js
const options = {
    // ...
    css_font_link: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    css_font_name: "Dancing Script",
}

const uploader = new CustUp(options)
```

To customise the CSS styles of any element you can either override or add to the css class name of the element

```js
 const options = {
        // ...
        default_styles_override: {
            remove_file_btn: ['close_btn', true],
            fileDisplayUI: ['custup_inner_container', true],
            fileUIOuterContainer: ['custup_file_display_outer', true],
            fileUI: ['custup_file_ui_outer', true],
            file_wrapper_el: ['file_wrapper', true],
            fileDetailsContainer: ['file_details', true],
            UITool: ['tool_container', true],
            custupInnerContainerWrapperEl: ['inner_container_wrapper', true],
            headerContainer: 'header_cont',
            footerContainer: 'footer_container'
        },
    }

const uploader = new CustUp(options)
```

All CustUp styles are exposed with the `default_styles_override` option and you can add a css class name to each element or override their styles, to add a class name to the list of class names of an element you should provide an `array` which take the class name(s) you would like to add to the element and `true` which indicates that the class name should be added to the element's class list.  
To override the element's class list you should either profile the new class name in a `string` format or pass an array with `false` as the second item.

For file upload settings, you can also add additional data that should be sent along the files, and/or a form field data to be sent along with the upload and you can also set the axios settings

```js
const options = {
    // ...
    file_upload: {
        endpoint_url: 'http://localhost/fileupload', // endpoint
        additional_data: { // additional data to be sent along with the 
            user_id: 123456789,
            username: 'johndoe'
        },
        form_field: '#form', // HTMLFormElement
        axios_settings: {
            headers: {}, // configure the axios header, like add a Bearer token
            configs: {}, // add a configuration to axios
        }
    },
}

const uploader = new CustUp(options)
```

To set CustUp to automatically upload files immediately after files has been added to the UI set the `upload_automatically` to `true`

```js
const options = {
    // ...
    upload_automatically: true,
}

const uploader = new CustUp(options)
```

If you wants to use another HTML elements to control the upload, you can set the UI tools to not display on the default UI.

```js
const options = {
    // ...
    display_ui_tools: false,
}

const uploader = new CustUp(options)
```

Even the CustUp scrolling and scrollbar are custom made so you can also customize them, to not show the scrollbar set `disable_scrollbar` to `false`

```js
const options = {
    // ...
    disable_scrollbar: false
}
const uploader = new CustUp(options)
```

When previewing a file there are in and out animations, by default the animations are randomized but you can set which animations to use or you can also disable the animations

```js
const options = {
    // ...
    file_preview_animation_types: ['slideInLeft'], // the animation previewer will only use `slideInLeft` animation type

    // file_preview_animation_types: ['slideInRight', 'zoomIn', 'slideInLeft'], // this will randomly choose between the array of the animations when displaying files

    // file_preview_animation_types: null, // to disable file preview animation set it to null
}
const uploader = new CustUp(options)
```
