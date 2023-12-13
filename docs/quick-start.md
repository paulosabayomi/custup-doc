---
sidebar_position: 2
---

# Quick Start

It is very easy to integrate CustUp in your web and mobile application

## Installed via NPM

if you install it through npm, you can import it directly

```js
import CustUp from "/path/to/custup/src/custup.min.js"

// OR the unminified version
// import CustUp from "/path/to/custup/src/custup.js"

const instance1 = new CustUp({
    targetRootElement: "#container"
})
```

Then add the CSS file to the header

```html
<!--All the CSS files combined together -->
<link rel="stylesheet" href="path/to/custup/src/all.min.css">

<!-- OR individual CSS files -->
<!-- Bare UI CSS file -->
<link rel="stylesheet" href="path/to/custup/src/bare.min.css">
<!-- CustUp default UI CSS file -->
<link rel="stylesheet" href="path/to/custup/src/custup.min.css">
<!-- Detached UI CSS file -->
<link rel="stylesheet" href="path/to/custup/src/detached.min.css">
<!-- ResumeUploader UI CSS file -->
<link rel="stylesheet" href="path/to/custup/src/resumeUploaderUI.min.css">
```

and that's all you need to get CustUp running, the only required option is the `targetRootElement` which is a CSS selector of the HTML element in which CustUp will be created into.

## UNPKG CDN option

```js
import CustUp from 'https://unpkg.com/custup@0.0.3/src/custup.min.js' 

// OR unminified version
import CustUp from 'https://unpkg.com/custup@0.0.3/src/custup.js' 

const instance1 = new CustUp({
    targetRootElement: "#container"
})
```

You can include the CSS files from UNPKG like

```html
<!--All the CSS files combined together -->
<link rel="stylesheet" href="https://unpkg.com/custup@0.0.3/src/all.min.css">

<!-- OR individual CSS files -->
<!-- Bare UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@0.0.3/src/bare.min.css">
<!-- CustUp default UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@0.0.3/src/custup.min.css">
<!-- Detached UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@0.0.3/src/detached.min.css">
<!-- ResumeUploader UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@0.0.3/src/resumeUploaderUI.min.css">
```
