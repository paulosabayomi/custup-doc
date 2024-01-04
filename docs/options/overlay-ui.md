---
sidebar_position: 2
---

# Default overlay UI

The UI that displays over the default UI type when no files has been selected or when CustUp just finished initializing.

## persist_default_ui

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

Whether to hide the overlay default UI after file(s) has been added to CustUp

## _custupDefaultUploadSentence

- *Optional*
- **Type:** *`string | HTMLElement`*
- Default: `"Drag files to upload or Click to select file from device"`

Don't mind the name it is just the hint text that displays on the default UI overlay, and it can be set to anything between a `string` or an `HTMLElement`.

## file_source_icons

- *Optional*
- **Type:** *`Object` of [File source icons](/docs/types/file-source-icons)*
- Default: All sources

This option is for customizing the file source icon HTML elements, that is, if you would like to change the way the file source icons look on the UI by setting another HTML element in place of any file source.

### Example

```js
const instance1 = new CustUp({
    file_source_icons: {
        record_screen: `<div>I am a custom source record screen icon</div>`
    }
})
```

To further customize it better you may have to use style override to add or override the current file source icons container style

## show_preview_file_btn

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

Whether to show the file preview button, this is the button that launches the preview popup for the file, currently only image, video and audio files can be previewed.

## show_file_remove_btn

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

Whether to show file remove button or not.

## show_file_details_container

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`boolean`*
- Default: `true`

Whether to show the container that displays file name, file size and file preview button below the file display element.

## allowed_sources

::::tip Note
This option only applies to the default UI type
::::

- *Optional*
- **Type:** *`Array` of [Allowed sources](/docs/types/allowed-sources)*
- Default: All sources

For choosing which file sources you want to allow on the UI and their order, the file sources will be listed on the UI according to their order in the `allowed_sources` array.

### Example

```js
const instance1 = new CustUp({
    allowed_sources: ['record_video', 'record_screen', 'dropbox_source']
})
```
