---
sidebar_position: 1
---

# React JS

The React JS version of CustUp is written completely in TypeScript

## Requirements

The React JS version of CustUp was built and tested with React JS version 18 and TypeScript version 4.9 so it may not be compatible with older versions of Node JS and browser, requirements are as follows:

- Latest browser version
- NodeJS >16
- (Optionally) TypeScript >4.9

## Installation

The CustUp main library needs to be installed with the React JS version because it depends on it.

```bash
npm i custup @custup/react
```

## Usage

### Basics

Import it into your component like so

```jsx
// ...
import CustUp from "@custup/react"
// ...
```

Then add CustUp component to where you want CustUp to be created

```jsx
// ExampleComponent.jsx

const ExampleComponent = React.memo((props) => {
    return (
        <div>
            <CustUp 
                id="first-example-instance" 
            />
        </div>
    )
})

```

### With TypeScript

If you're using TypeScript

```tsx
// ExampleComponent.tsx

const ExampleComponent = React.memo((props: any) => {
    return (
        <div>
            <CustUp 
                id="first-example-instance" 
            />
        </div>
    )
})

```

### Using `ref`

You can use `ref` to grab CustUp instance and access all CustUp properties, methods and events, to use `ref` with CustUp, let's use the TypeScript `ExampleComponent.tsx` component

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    const exampleCustUpSubmit = React.useCallback(() => {
        ref1.current?.upload();
    }, [ref1.current])

    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />

            <button onClick={exampleCustUpSubmit}>Upload</button>
        </div>
    )
})

```

### Multiple Components

And you can also have multiple CustUp components in the same component, only make sure the `id` props are not the same

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()
    const ref2 = React.useRef<TCustUp | undefined>()
    const ref3 = React.useRef<TCustUp | undefined>()

    const exampleCustUpSubmit = React.useCallback(() => {
        ref1.current?.upload();
    }, [ref1.current])

    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />
            <CustUp 
                ref={ref2}
                id="second-example-instance" 
            />
            <CustUp 
                ref={ref3}
                id="third-example-instance" 
            />
        </div>
    )
})

```

### Subscribing to Events

You can use `ref` to subscribe to CustUp events by calling the `addEventListener` or the `on` method.

```tsx
// ExampleComponent.tsx

// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    React.useLayoutEffect(() => {

        ref1.current?.on("file.afterAdded", (e) => {
            console.log("file was added", e)
        })

    }, [ref1.current])


    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
            />
        </div>
    )
})

```

Events can also be subscribed to by using the  `on` prop, this is useful for events that get triggered before the `ref` gets updated, the `on` method takes an array of objects which contains the type of the event and the callback function for the event listener, for example

```tsx

import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance" 
                on={[
                    {
                        type: 'library.init',
                        callbackFn(e) {
                            console.log("Library has finished initialization", e);
                        }
                    },
                    {
                        type: 'file.afterAdded',
                        callbackFn: (e) => {
                            console.log("File was added", e.detail)
                        }
                    }
                ]}
            />
        </div>
    )
})

```

### File Upload settings

```tsx title="ExampleComponent.tsx"
// ...
import { TCustUp } from "@custup/react";

const ExampleComponent = React.memo((props: any) => {
    const ref1 = React.useRef<TCustUp | undefined>()

    React.useLayoutEffect(() => {

        ref1.current?.on("file.afterAdded", (e) => {
            console.log("file was added", e)
        })

        // OR using setOptions

        // ref1.current?.setOptions({
        //     file_upload_settings={{
        //         endpoint_url: 'http://localhost/fileupload',
        //         files_field_name: 'profileImage', // field name of the files
        //         form_field: '#form', // the id of the form element which will be serialized
        //         additional_data: { // to pass additional data to the request
        //             userid: 1234567890,
        //             username: 'johndoe',
        //         },
        //         axios_settings: { // the axios settings
        //             headers: {
        //                 'Authorization': 'Bearer test_test_abcdefghijkl'
        //             },
        //             configs: {}
        //         }
        //     }} 
        // })

    }, [ref1.current])


    return (
        <div>
            <CustUp 
                ref={ref1}
                id="first-example-instance"
                file_upload_settings={{
                    endpoint_url: 'http://localhost/fileupload',
                    files_field_name: 'profileImage', // field name of the files
                    form_field: '#form', // the id of the form element which will be serialized
                    additional_data: { // to pass additional data to the request
                        userid: 1234567890,
                        username: 'johndoe',
                    },
                    axios_settings: { // the axios settings
                        headers: {
                            'Authorization': 'Bearer test_test_abcdefghijkl'
                        },
                        configs: {}
                    }
                }} 
            />
        </div>
    )
})

```

All CustUp options can be passed as props to the CustUp component, all [CustUp options can be seen here](https://custup.pryxy.com/docs/category/options).
