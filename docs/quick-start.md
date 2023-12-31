---
sidebar_position: 3
---

# Quick Start

It is very easy to integrate CustUp in your web and mobile application

## Installed via NPM

CustUp should be imported like so

```js
import CustUp from "/path/to/custup/src/custup.min.js"

// OR the unminified version
// import CustUp from "/path/to/custup/src/custup.js"

const instance1 = new CustUp({
    targetRootElement: "#container"
})
```

if you get `Uncaught SyntaxError: import declarations may only appear at top level of a module` error add `type="module"` to the javascript file where CustUp was imported into, example below

```html
<!-- If CustUp was imported into a script name called index.js add type="module" -->
<!-- ... -->
<script type="module" src="./index.js"></script>
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
import CustUp from 'https://unpkg.com/custup@latest/src/custup.min.js' 

// OR unminified version
import CustUp from 'https://unpkg.com/custup@latest/src/custup.js' 

const instance1 = new CustUp({
    targetRootElement: "#container"
})
```

You can include the CSS files from UNPKG like

```html
<!--All the CSS files combined together -->
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/all.min.css">

<!-- OR individual CSS files -->
<!-- Bare UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/bare.min.css">
<!-- CustUp default UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/custup.min.css">
<!-- Detached UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/detached.min.css">
<!-- ResumeUploader UI CSS file -->
<link rel="stylesheet" href="https://unpkg.com/custup@latest/src/resumeUploaderUI.min.css">
```

## Using with React JS

CustUp can also work in React JS applications, check out the guide on how to [install and use CustUp in your React JS application here](/docs/guides/react-integration).
