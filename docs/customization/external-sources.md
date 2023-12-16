---
sidebar_position: 4
---

# External Sources Styles

Just like the Media sources element styles, external sources styles are not part of the default UI and they get created and appended to the 
default UI, they can also be customized by either adding to their class names or overriding their class names.  
  
## Element Styles

### container

The style of the external sources popup container wrapper

### url_source_container

The main container of the URL source

### url_source_inner_container_1

The style of the top inner container of the URL source

### url_source_inner_container_2

The style of the bottom inner container of the URL source

### url_source_input_container

The style of the input element wrapper container

### url_source_button_container

The style of the button element wrapper container

### dropbox_ui_container

The style of dropbox source main container

### dalleOuterContainer

The style of OpenAI Dall.E source wrapper container

### dalleInitialPageContainer

The style of the DALL.E source initial page container that holds the search box and button

### initialPageContentContainer

The style of the DALL.E initial page content wrapper

### dalleIntialPageSearchContainer

The style of the DALL.E initial page search box container wrapper

### dalleIntialPageButtonContainer

The style of the DALL.E initial page button wrapper

### dalleIntialPageTitleContainer

The style of the DALL.E title description container

### dallePreviewPageContainer

The style of the generated image page container wrapper

### image_preview_container

The style of the inner container of the image preview page

### utils_button_container

The style of the bottom buttons container

### accept_files_btn

The style of accept file button


### Setting a custom class name for External source styles

To set a custom class name for the External source styles use the `external_source_style_override`

### Example

```js
const instance1 = new CustUp({
    // ...
    external_source_style_override: {
        dalleIntialPageButtonContainer: ['custom_class_name', true]
    }
})
```
