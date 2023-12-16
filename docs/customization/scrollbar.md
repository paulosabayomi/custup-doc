---
sidebar_position: 7
---

# Scrollbar

Even CustUp's container scrolling is custom made including the scroll bar, though I have not yet made the container scrolling to be customizable but the scrollbar is customizable and can even be set to not display.  
  
To hide the scrollbar or simply to not show the scrollbar at all set `disable_scrollbar` to `true`

```js
const instance1 = new CustUp({
    // ...
    disable_scrollbar: true
})
```

The scrollbar can also be styled to your taste, to style the scrollbar you can either add a new class name to the scrollbar element or override the scrollbar class names, the `scrollBarEl` style override option in `default_styles_override` is the scrollbar element style and you can override or add new class name(s) to it like below  
  
```js
const instance1 = new CustUp({
    default_styles_override: {
        scrollBarEl: ['random_scrollbar_el', true],
        // scrollBarEl: "random_scrollbar_el", // to override the current scrollbar element class name
    }
})
```
