---
sidebar_position: 7
---

# Tools

::::tip Note
This page only applies when you're using the default UI type, the tools on the default UI type can be set to not display on the UI and in which case the settings on this page will not be effective
::::

The tools on the default UI type can be rearranged and styles, and you can also set which tools you want to be displayed

To achieve this you will use the `allowed_tools` option which takes an array of tools for the default UI type  
  
**For example**

```js
const options = {
    // ...
    allowed_tools: ['tools_dragger', 'add_file', 'upload', 'added_files_count', 'clear_files'],
}

const uploader = new CustUp(options)
```

The tools will be displayed according to their order in the array, and the ones that are not in the array will not be included on the UI, to not show the tools on the default UI type at all set `allowed_tools` to `null`
  
**Example**

```js
const options = {
    // ...
    allowed_tools: null,
}

const uploader = new CustUp(options)
```
