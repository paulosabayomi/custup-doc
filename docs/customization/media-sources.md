---
sidebar_position: 3
---

# Media Source Styles

You can also customise the Media source UI styles, the media source elements are not part of the default UI elements, they gets added to the default UI as a popup and the main media sources container wrapper gets appended to the default UI's inner container.  

### Element Styles

| Style | Description |
| ---- | ---- |
container | the media source container wrapper
media_capture_main_container | the media source container main
media_capture_bottom_tools_container | the media sources bottom tools wrapper container

While these styles seems fews there are other inner elements that were not given class names, like the bottom tools, the were styled using css selector  
  
These are all the styles including the styles that were not exposed

```css
/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container {}

/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div {}

/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div svg {}

/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div._custup_m_add_media {}

/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div._custup_m_remove_media_popup {} /*Not implemented in the favour of CustUp's default popup close button*/

/*...*/ ._custup_media_capture_container ._custup_media_capture_bottom_tools_container div:active {}
```

### Setting custom CSS class names

The `media_capture_source_style_override` option is used for adding or overriding the element's class names

### Example

```js
const instance1 = new CustUp({
  media_capture_source_style_override: {
    container: ['custum_class_name_to_add_to_the_container_el', true]
  }
})
```
