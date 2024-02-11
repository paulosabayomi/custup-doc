---
sidebar_position: 1
---

# General

The complete list of all the main options for customizing and configuring CustUp

## Main Options

### targetRootElement

- Required  
- **Type:** *`string`*
- Default: `<empty string>`

The CSS selector of the HTML element in which CustUp will be created, this is the only **required** option

### autoInitialize

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

This option is for setting whether CustUp should be auto initialized or not

### position_container

- *Optional*
- **Type:** *`string | Object`*
- Default: `undefined`

This option is for specifying how CustUp should be added to the target container, by default CustUp will overwrite the target container.

#### Example

```js
const instance1 = new CustUp({
    position_container: {"beforeEl": '#position-before-this-el'},
    // position_container: "after",
})
```

#### Available options

| Option | Description |
| ---- | ---- |
`"overwrite"` | CustUp will remove all the elements in the container  
`"after"` | CustUp will be added as the last element in the target container without overwriting the elements in the container
`"before"` | CustUp will be added as the first element in the target container without overwriting elements in the container
`{"beforeEl": string}` | CustUp will be added before the specified element in the target container, the privided `string` must the CSS selector of the target element.

### ui_type

- *Optional*
- **Type:** *`string`*
- Default: `'default'`

This option is for selecting a UI type, the default UI type is used by default.
  
The list of all the current available UI types can be seen on the [UI type page](/docs/types/ui-type)

### use_default_file_display_ui

::::tip Note
This option only applies to the default UI type
::::

- Required  
- **Type:** *`boolean`*
- Default: `true`

Whether to use the CustUp's default container that lists out the files on the UI, if sets to `false` added files will not be listed on the UI

### allowed_file_types

- *Optional*
- **Type:** *`Array` of `keyof` [File Types](/docs/types/file-types)*
- Default: All file types

This is for setting the file types that you want to allow for upload, any file type that's not in the `array` will not be allowed and will not be added to the list of selected files.

The file type can be added in the form of the file type like `jpeg`, `png`, `pdf`

#### Example

```js
const instance1 = new CustUp({
    allowed_file_types: ['jpeg', 'pdf', 'mp3', 'mp4', 'png']
})
```

### maxNumberOfFiles

- *Optional*
- **Type:** *`number`*
- Default: `Infinity`

This is useful for restricting the number of files that can be added for upload

### minNumberOfFiles

- *Optional*
- **Type:** *`number`*
- Default: None

For setting the minimum number of files that must be selected before upload

### maximumAllowedFileSize

- *Optional*
- **Type:** *`number`*
- Default: `Infinity`

The maximum file size that should be allowed

### minimumAllowedFileSize

- *Optional*
- **Type:** *`number`*
- Default: None

The minimum file size that should be allowed

### disable_drag_n_drop

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

Whether drag and drop feature should be enabled, set to `true` to disable the drag and drop feature.

### disable_select_files_from_device

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

To disable the clicking on the default UI to select files from user's device

### file_preview_animation_types

- *Optional*
- **Type:** *`Array` of [File preview animation](/docs/types/file-preview-anim) | `null`*
- Default: All animations

You can also set the animations you want in CustUp, by default CustUp randomly choose among the list of current animations when previewing a file. The animation has both entrance and exit for an animation type.

To disable the file preview animation, set this option to `null`.

You can also specify which animations you want or if you want on one animation specify one of the types of animations in the array, if the specifies animations are more than one they will be randomized when previewing a file.

#### Example

```js
const instance1 = new CustUp({
    file_preview_animation_types: ['slideInRight', 'fadeIn']
})
```

### allowMultipleUpload

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

The name of this option might seems confusing, it just the option that sets the `multiple` attribute for the file select input.  
  
**More context:** it is used for specifying if user can select multiple files at once from the user's device.

### upload_automatically

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

To set if files should be uploaded automatically immediately they have been added to the UI, set this option to `true` to allow it.

### show_upload_error_overlay

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

This option controls the visibility of the upload error overlay. The overlay displays the retry button for files that failed to upload.

### alert_timeout_time

- *Optional*
- **Type:** *`number`*
- Default: `300 ms`

You can change the duration of the message alerts by setting this option to your desired time in `milliseconds`

## Scrollbar

### disable_scrollbar

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

Because CustUp container scrolling is custom made so the scrollbar can also be customized, and to set whether to show the scrollbar or not set this option to `true` or `false`

## Default UI tools

### display_ui_tools

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

If you want to hide or you don't want the default UI tools container to show set this option to `false`

### allowed_tools

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`Array` of [Allowed tools](/docs/types/allowed-tools)*
- Default: All default tools

This option is for setting which tools to be displayed on the default UI, and if provided only the tools provided in the array will be included in the tools container on the UI and according to their position in the `array`.

#### Example

```js
const instance1 = new CustUp({
    allowed_tools: ['tools_dragger', 'upload', 'add_file'] // and this will be their order on the UI
})
```

### show_ui_tools_on_mobile_devices

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

For specifying if the header container should be filled with tools on mobile devices or not. It is useful if you want to use the header container for a different thing, set it to `false` in that case.

## Font

### css_font_link

::::tip Note
Only Google Fonts links are currently supported out of the box, other font links may not work as expected
::::

- *Optional*
- **Type:** *`string`*
- Default: `https://fonts.googleapis.com/css2?family=Lato&display=swap`

To change CustUp's font set this to a link to a Google Font you want to use

### css_font_name

::::tip Tip
If you want to use the name of the Font that has already been loaded in your project you can only set the `css_font_name` option to the name of the font
::::

- *Optional*
- **Type:** *`string`*
- Default: `Lato`

If you set the [css_font_link](#css_font_link) option then you must also set this option to the font name of the Google Font link you provided.

## File upload

### file_upload

- *Optional - but required for upload*

This option is used for configuring file upload settings, all the file upload network configurations including axios settings can be done with this option.

#### Example

```js
const instance1 = new CustUp({
    file_upload: {
        endpoint_url: 'http://localhost/fileupload',
        files_field_name: 'profileImage',
        form_field: '#form',
        additional_data: {
            userid: 1234567890,
            username: 'johndoe',
        },
        axios_settings: {
            headers: {
                'Authorization': 'Bearer test_test_abcdefghijkl'
            },
            configs: {}
        }
    }
})
```

#### Description

| Option | Type | Description |
| ---- | ---- | ---- |
`endpoint_url` | `string` | The URL of the file upload endpoint
`files_field_name` | `string` | The uploaded files field name, default is `file`
`form_field` | `HTMLFormElement \| string` | The form field you will like to attach to the upload request, the field names in the form will be serialized and added to the request
`additional_data` | `Object` | For sending additional data with the upload request, like current user's `userId`, `username` or related data.
`axios_settings` | `{headers: {}; configs: {}}` | The configurations for `axios`, you can provide an header that will be sent along the request with the `headers` option, and you can add new or override the default `axios` configurations with the `configs` option.

### single_upload

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

This option is for specifying whether all the files should be uploaded at once or if they should be uploaded one after the other or simply orderly, if sets to `true` when the upload function is triggered all the files will be uploaded at once and the CustUp's `onprogress` event will be fired for the combined upload.  
  
**Use Case:** When there is a need to upload all files together with the form field when the form submit button is clicked.

### should_chunk

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

This option is for specifying if the files should be uploaded in chunks, default is `false`, it is useful in the case of large file upload which is above the server limit, this option is completely ignored if `single_upload` option is set to true because chunk upload is not available for combined file upload, the default chunk size for each files is `1024 * 1024` and you can adjust it to your need with the `chunk_size` option.  

### chunk_size

- *Optional*
- **Type:** *`number`*
- Default: `1024 * 1024`

This option is for specifying the chunk upload size, if `should_chunk` option was set to `true`, if `single_upload` option is set to `true` this option is completely ignored because chunk upload is currently not available for combined or single upload, it is only available for serial upload.  

### show_upload_progress_bar

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

This option when set to `false` will hide the progress bar that is displayed on the default UI file display element when files are being uploaded to the server.  

## Default files

### default_files

- *Optional*
- **Type:** *`Array` of `{file: string | File | Blob; isUploadable: boolean; headers: {}}`*
- Default: `false`

This option is for providing files that should be added automatically after initialization, the file format can be a `URL` or base64 `string`, `File` or `Blob` format, and you can also set if the file should be uploadable or not, if you provide an endpoint that returns a `Blob` and that for instance requires an `Authorization` header you can provide it in the headers option in the object

#### Example

```js
const instance1 = new CustUp({
    default_files: [
        {file: 'http://localhost/example_API_that_returns_blob_or_file', isUploadable: false, headers: {
            'Authorization': 'Bearer abcdefghijklm...'
        }},
        {file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2...', isUploadable: false}, // Note this is an incomplete base64 string
        {file: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2014/05/luvisi16.jpg?resize=600%2C600&ssl=1', isUploadable: true}, // URL for a file that is uploadable
    ]
})
```

If `isUploadable` is set to `true` the file will be uploadable and will not be uploadable otherwise.

#### Object Description

| Option | Type | Description |
| ---- | ---- | ---- |
`file` | `string \| File \| Blob` | The file that should be added to CustUp, it can either be a `URL`, `base64`, `File` or `Blob` format
`isUploadable` | `boolean` | If the file should be uploadable or not, if sets to `false` it will not be uploaded
`headers` | `Object` | For adding additional header option like `Authorization` if the file's endpoint requires it

### count_default_files

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

If you don't want the default files to be counted as part of the selected files set this option to `false`.

## Instances

### instance_attach

- *Optional*
- **Type:** *`Array` of CustUp instances*
- Default: `[]`

This option is for attaching one or more CustUp instances to a CustUp instance mainly for combined file upload.  
  
This option works with the [single_upload](#single_upload) option, if the `single_upload` option is `false` when the upload function is called other files in other instances will not be submitted along with the files of the current instance that they were attached to.  
  
#### Example

```js
const instance1 = new CustUp({
    // ...
})
const instance2 = new CustUp({
    // ...
})
const instance3 = new CustUp({
    // ...
})
const instance4 = new CustUp({
    // ...
    instance_attach: [instance1, instance2, instance3]
})

document.querySelector("#random-btn").onclick = () => instance4.upload()
```

## Persisting Files

### persist_files

::::tip Note
This feature uses the CSS selector of the `targetRootElement` as the key name to store files in the browser storage.
::::

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

Set this option to `true` to temporarily store selected files in the browser storage, it will restore the files back if user refreshes the page or if the user closes the browser in the case of `hard` persist type.  
  
#### Example

```js
const instance1 = new CustUp({
    targetRootElement: "#example-container",
    // ...
    persist_files: true
})
```

### persist_type

- *Optional*
- **Type:** *`'soft' \| 'hard'`*
- Default: `'soft'`

This option is for setting the file storage type, when sets to `'soft'` CustUp will use `sessionStorage` and `localStorage` when sets to `'hard'`.
  
#### Example

```js
const instance1 = new CustUp({
    targetRootElement: "#example-container",
    // ...
    persist_files: true,
    persist_type: 'hard'
})
```

## Notification

### messages

- *Optional*
- **Type:** *`Object`*

This option is for configuring notification options like message timeout.

### timeout

- *Optional*
- **Type:** *`number`*
- Default: `4000`

This option is for specifying the timeout for hiding messages, note this option is ignored for async messages, the default is 4000ms or 4 seconds.
