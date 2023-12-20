---
sidebar_position: 4
---

# React JS integration

Though the React JS version of CustUp is not yet available but it can work in your React JS applications and it has been tested, this documentation uses React JS and CustUp works in it :)  
  
## Installation

Install CustUp from npm

```bash
npm i custup
```

## Importing CustUp

Import CustUp like so

```jsx
import React from 'react';
import CustUp from "custup/src/custup.min";
```

Then import CustUp CSS files, the `all.min.css` is recommended as it includes all the CSS files of all the different UI types.  
  
In the `index.js` file of your React JS application import the CSS file

```jsx
import 'custup/src/all.min.css';
// ...
```

## Initializing CustUp

After importing CustUp you can initialize it like so

```jsx title="ExampleComponent.jsx"
const ExampleComponent = React.memo(({}) => {
    const [instance1, setInstance1] = React.useState({})
    // const [instance1, setInstance1] = React.useState<any>({}) // if using typescript

    React.useLayoutEffect(() => {
        const _inst1 = new CustUp({
            targetRootElement: "#container-1",
            // ...
        });

        setInstance1(_inst1);
    }, [])

    const exampleCustomSubmit = React.useCallback(() => {
        instance1.upload();
    }, [instance1]);

    return (
        <div>
            <div id="container-1"></div>
            <button onClick={exampleCustomSubmit}>Submit</button>
        </div>
    )
});

export default ExampleComponent;
```

## Everything altogether

```jsx title="index.js"
// ...
import 'custup/src/all.min.css';
// ...
```

```jsx title="ExampleComponent.jsx"
import React from 'react';
import CustUp from "custup/src/custup.min";

const ExampleComponent = React.memo(({}) => {
    const [instance1, setInstance1] = React.useState({});
    // const [instance1, setInstance1] = React.useState<any>({}); // if using typescript

    React.useLayoutEffect(() => {
        const _inst1 = new CustUp({
            targetRootElement: "#container-1",
            // ...
        });

        setInstance1(_inst1);
    }, [])

    const exampleCustomSubmit = React.useCallback(() => {
        instance1.upload();
    }, [instance1]);

    return (
        <div>
            <div id="container-1"></div>
            <button onClick={exampleCustomSubmit}>Submit</button>
        </div>
    )
});

export default ExampleComponent;
```
