---
sidebar_position: 2
---

# Main UI Styles

The main UI elements styles are as follows

## Element styles

The main ui styles or classnames override should be provided to the `default_styles_override` option.

### Example

```js
const instance1 = new CustUp ({
    default_styles_override: {
        outerContainer: ['custom_outer_container_class', true]
    }
})
```

### outerContainer

The style of CustUp's wrapper container

### innerContainer

The style of the middle container wrapper

### sidebarLeftContainer

The style of the left container

### sidebarRightContainer

The style of the right container

### custupInnerContainerWrapperEl

The style of the  innerContainer's inner container that wraps the middle container elements

### headerContainer

The style of the header container

### footerContainer

The style of the footer container

### close_popup_btn

The style of CustUp's native popup's Close button

### scrollBarEl

The style of the custom scroll bar

### defaultUI

The style of the default UI wrapper, the default UI is the UI that displays the file source icons

### defaultUIInnerContentEl

The style of the default UI inner content main container

### defaultUIUploadSentenceContainer

The style of the upload description element that hints users on how to add new files to the UI

### defaultUIUploadIconsContainer

The style of the file select sources

### fileDisplayUI

The style of the default file list container wrapper

### fileUIOuterContainer

The style of the file display element wrapper

### file_wrapper_el

Ttyle of the element that wraps the file display inner element

### fileUI

The style of the element that hold the file display

### fileDetailsContainer

The style of the container that holds file details like file name, size and file preview

### custup_fileName

The style of file name container

### custup_fileSize

The style of file size container

### fileBottomDetails

The style  _custup_file_detail_bottom_details_container

### fileUIBottomToolsContainer

The style of the bottom layer in the `fileDetailsContainer` that holds the file size and file preview icon in the default UI

### remove_file_btn

The style of the remove file button

### file_upload_overlay_ui

The style of the overlay that shows upload progress

### file_upload_overlay_inner_container

The style of the inner container of the overlay that shows upload progress

### upload_progress_container

The style of the upload progress element container

### file_upload_progress_inner

The style of the upload progress inner container that hold the upload progress element and other items

### file_upload_progress

The style of the upload progress main element

### retry_upload_overlay_ui

The style of the default UI's upload retry element container

### retry_upload_button

The style of the default UI upload retry button element

### message_container

The style of CustUp notification message container

### filePreviewer

The style of CustUp's file previewer overlay container wrapper

### filePreviewerInnerContainer

The style of the inner container of file display element

The above Style column holds the key of the class names of all the default UI element styles which can be customized by either overriden or new classes can be added to them to customize them to suit any project's design.  
  
This styles can be set in the option with the `default_styles_override` option  
