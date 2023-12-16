---
sidebar_position: 8
---

# Methods

This page consists of all the CustUp methods for interacting with CustUp instances.

## File Upload

### upload

- Params:  
    `file_id: string | undefined` - Optional
- returns  
    `void`

The method to upload file(s) to the endpoint

#### Example

```js
const instance1 = new CustUp({
    // ...
});

instance1.upload(); // this will upload all files

const file_id = instance1.get_all_files()[0].id;

instance1.upload(file_id);
```

#### Params Description

| Param | Type | Description |
| ---- | ---- | ---- |
`file_id` | `string \| undefined` | the id of the file to upload in the case of a single file, all the files will be uploaded serially if not provided

### retry_upload

- Params:  
    `file_id: string` - Required
- returns  
    `void`

To retry file upload for a file that couldn't be uploaded because of an error.

#### Example

```js
const instance1 = new CustUp({
    // ...
});

const file_id = instance1.get_all_files()[0].id;

instance1.retry_upload(file_id)
```

#### Params description

| Param | Type | Description |
| ---- | ---- | ---- |
`file_id` | `string` | The `id` of the file to upload

### get_upload_unsuccessful_files_count

- Params:  
    None
- returns  
    `number`

This method returns the total number of files that could not be uploaded due to an error.

### get_successfully_uploaded_files_count

- Params:  
    None
- returns  
    `number`

This method returns the total number of files that were successfully uploaded.

### get_upload_unsuccessful_files

- Params:  
    None
- returns  
    `Array<File>`

This method returns all files that were not uploaded due to an error.

### get_successfully_uploaded_files

- Params:  
    None
- returns  
    `Array<File>`

This method returns all the files that were successfuly uploaded.

## File handling

### show_add_file_ui

- Params:  
    None
- returns  
    `void`

This method is for programmatically opening the UI for adding new files which is also called default UI overlay

### preview_file

- Params:  
    `file_id: string` - Required
- returns  
    `void`

To preview a file programmatically

#### Example

```js
const instance1 = new CustUp({
    // ...
})

const file_id = instance1.get_all_files()[0].id;

instance1.preview_file(file_id)
```

#### Param Description

| Param | Type | Description |
| ---- | ---- | ---- |
`file_id` | `string` | the method to preview a file, when this method is called with the `file_id` param the file preview UI will open and preview the file, currently only image, video and audio files can be previewed

### get_selected_files

- Params:  
    None
- returns  
    `Array<File>`

This method returns all selected files excluding the default files, that is, excluding the files that were passed to CustUp and that were loaded immediately after initialization.

### get_all_files

- Params:  
    None
- returns  
    `Array<File>`

This method returns all selected files including the default files that were automatically loaded at initialization.

### clear_files

- Params:  
    None
- returns  
    `void`

This method when called will clear all files including the files that were automatically loaded at initialization also called default files, the UI will also be cleared (If default UI type is used) and the `file.all_removed` event will be raised.

### get_total_file_count

- Params:  
    None
- returns  
    `number`

This method returns the number of all added files including the default files if the `count_default_files` option is not set to `false` else default files will be excluded from the count.

### remove_file

- Params:  
    `file_id: string` - Required  
    `callback_fn: Function` - Optional
- returns  
    `void`

This method is for removing a file from the memory and/or the browser storage if `persist_files` is `true` and it will remove the file from the UI if any of CustUp UI is used, this method is also going to trigger the `file.removed` event after the file has been removed

#### Example

```js
const instance1 = new CustUp({
    // ...
})

const file_id = instance1.get_all_files()[0].id;

instance1.remove_file(file_id, () => make_random_api_call(file_id));
```

#### Params description

| Param | Type | Description |
| ---- | ---- | ---- |
`file_id` | `string` | The `id` of the file that should be removed
`callback_fn` | `Function` | The callback function that will be called after the file has been removed

### add_file

- Params:  
    `file: File | Blob | Array<File | Blob>` - Required  
    `skip_file_check: boolean` - Optional
- returns  
    `void`

This method is for adding files to CustUp programmatically after CustUp has been initialized.

#### Example

```js
const instance1 = new CustUp({
    // ...
})

const file = new File(...); // for example

instance1.add_file(file, skip_file_check);

instance1.add_file([file1, file2, file3]);
```

#### Params description

| Param | Type | Description |
| ---- | ---- | ---- |
`file` | `File \| Blob \| Array<File \| Blob>` | This can be of type `Blob` or `File` or `array` of files
`skip_file_check` | `boolean` | If this is `true` constraint checks will be skipped on the file or files

## File sources

### record_video

- Params:  
    None
- returns  
    `void`

This method launches the video recording UI to record video with user's Media Device.

### record_audio

- Params:  
    None
- returns  
    `void`

This method launches the audio recording UI to record audio with user's Media Device.

### capture_image

- Params:  
    None
- returns  
    `void`

This method launches the image capture UI to capture image with user's Media Device.

### record_screen

- Params:  
    None
- returns  
    `void`

This method launches the screen recorder UI to record screen with user's Media Device.

### launch_url_source

- Params:  
    None
- returns  
    `void`

This method launches the URL file source UI to add file from URL.

### launch_dropbox_source

- Params:  
    None
- returns  
    `void`

This method launches the Dropbox file source UI to add file from Dropbox.

### launch_box_source

- Params:  
    None
- returns  
    `void`

This method launches the Box file source UI to add file from Box.

### launch_dalle_source

- Params:  
    None
- returns  
    `void`

This method launches the DALL.E file source UI to generate files with OpenAI DALL.E v3.
