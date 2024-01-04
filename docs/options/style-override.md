---
sidebar_position: 4
---

# Style override

The options for overriding CustUp element styles or for adding to the elements' classnames.

## external_source_style_override

- *Optional*
- **Type:** *`Object` of [External sources UI styles](/docs/customization/external-sources)*
- Default: `{}`

This option is used for adding a class name or overriding the external sources elements' class name.

### Example

```js
const instance1 = new CustUp({
    external_source_style_override: {
        url_source_container: ['random_class_name', true],
        // url_source_container: 'random_class_name', // to override the current class name
    }
})
```

## media_capture_source_style_override

- *Optional*
- **Type:** *`Object` of [Media sources UI styles](/docs/customization/media-sources)*
- Default: `{}`

This option is used for adding a class name or overriding the media sources elements' class name.

### Example

```js
const instance1 = new CustUp({
    media_capture_source_style_override: {
        media_capture_main_container: ['random_class_name', true],
        // media_capture_main_container: 'random_class_name', // to override the current class name
    }
})
```

## default_styles_override

- *Optional*
- **Type:** *`Object` of [Main UI styles](/docs/customization/main-ui)*
- Default: `{}`

This option is used for adding a class name or overriding the default/main ui elements' class name.

### Example

```js
const instance1 = new CustUp({
    default_styles_override: {
        outerContainer: ['random_class_name', true],
        // outerContainer: 'random_class_name', // to override the current class name
    }
})
```

## persist_styles_override_across_instances

- *Optional*
- **Type:** *`boolean`*
- Default: `false`

Sometimes you may want to apply the style that you applied to an instance to other instances too, to achieve that just set `persist_styles_override_across_instances` to `true` then the styles that were set to the instance will also be applied to other instances after the instance.  
  
The best way to implement this is to set this option in the instance before other instances that you want the customized style to span.

## default_icons_override

- *Optional*
- **Type:** *`Object` of [Icons](/docs/types/icons)*
- Default: All icons

This option is for overriding an icon or adding new icons on the fly, you can provide an HTMLElement or SVG to it.

### Example

```js
const instance1 = new CustUp({
    default_icons_override: {
        add_file: `<div>File</div>`, // overrides the `add_file` icon
        new_icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g id="Interface / Line_L"> 
                <path id="Vector" d="M12 19V5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g> </g>
        </svg>` // adds a vertical line svg icon
    }
})
```
