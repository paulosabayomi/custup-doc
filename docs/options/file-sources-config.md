---
sidebar_position: 3
---

# File Sources

This page contains the options for file sources configurations.  
  
::::tip Note
The external file sources are not pre-configured unlike other file uploaders that make it work out of the box preconfigured, unfortunately based on how CustUp was made they have to be configured for your projects, the full guides and relevant external links on how to set them up are on this page.
::::
  
The options on this page should be added under the `file_source_config` option.

#### Example

```js
const instance1 = new CustUp({
  // ...
  file_source_config: {
    // ...
    video_recording: {
      video_only: true,
      show_image_capture_btn: false
    }
    // ...
  }
})
```

## Media Sources

### video_recording

This option is for configuring the video recording source

#### Properties

```js
{
  video_only: boolean,
  show_image_capture_btn: boolean
}
```

#### Description

| Property | Type | Default | Description
| ---- | ---- | ---- | ---- |
`video_only` | `boolean` | `false` | Set this to `true` to record video only, audio will not be captured during video recording
`show_image_capture_btn` | `boolean` | `true` | By default on the video capture screen there is a image capture button to capture picture, set this to `false` to not include this button

## External sources

### google_drive_source

Currently the Google Drive has one property that takes the configurations for your project.
  
Check the Google Drive Picker API doc for how to setup your credentials, you only need to setup a project, enable the Google Picker API and then create credentials for your project.  
  
- To create a project on Google Cloud Platform
[https://developers.google.com/drive/picker/guides/overview#appreqs](https://developers.google.com/drive/picker/guides/overview#appreqs)  
  
- To Enable the Google Picker API
[https://developers.google.com/drive/picker/guides/overview#api](https://developers.google.com/drive/picker/guides/overview#api)  
  
- To create credentials  
[https://developers.google.com/drive/picker/guides/overview#api-key](https://developers.google.com/drive/picker/guides/overview#api-key)  
  
Then the `authConfig` should be updated with the credentials
  
```js
authConfig: {
  client_id: string;
  api_key: string;
  app_id: string;
  scopes: string;
}
```

**Full option**

```js
google_drive_source: {
  authConfig: {
    client_id: string;
    api_key: string;
    app_id: string;
    scopes: string;
  }
}
```

#### Example

```js
const instance1 = new CustUp({
  file_source_config: {

    google_drive_source: {
      authConfig: {
        client_id: 'client_id.apps.googleusercontent.com',
        api_key: 'api-key',
        app_id: 'app-id',
        scopes: 'https://www.googleapis.com/auth/drive.metadata.readonly', // optional
      }
    }

  }
})
```

The `scopes` option is optional but it can be set to other values.

### dropbox_source

For Dropbox only an `appKey` has to be created for your project.
  
To create an `appKey` on Dropbox you will have to create an app first, [follow this link to create an app on Dropbox](https://www.dropbox.com/developers/apps/create)  
  
Then under the App settings change your App status from development to production then copy the App key.
  
The you the App key can be provided to CustUp under the `authConfig` property.

```js
authConfig: {
   appKey: string;
}
```

**Full options**

```js
authConfig: {
   appKey: string
}
options: {
   cancel: Function
}
```

#### Example

```js
const instance1 = new CustUp({
  file_source_config: {
    // ...
    dropbox_source: {
        authConfig: {
           appKey: 'random-id'
        }
        options: {
           cancel: () => {/*Do something cool when user cancels the chooser*/} // optional
        }
    }

  }
})
```

The `options` property is totally optional and can be omited.

### box_source

To get Box up and running you only need to provide the developer token and optionally the folder id, `folder_id` is `'0'` by default which is full folder.  
  
To get a developer token on Box an app needs to be created, to create an app
- [https://app.box.com/developers/console/newapp](https://app.box.com/developers/console/newapp)
  
After creating the app on the app's page under configuration section scroll to the Developer Token section and generate the developer token.  
  
**Note:** The developer token by default only last for 60 minutes to create a production token request for Enterprise access and submit your app for authorization.  
  
**Full option**
  
```js
authConfig: {
    developerToken: string;
    folder_id: string;
}
```

#### Example

```js
const instance1 = new CustUp({
  // ...
  file_source_config: {
    // ...
    box_source: {
      authConfig: {
          developerToken: 'random-id',
          folder_id: '0', // optional
      }
    }
  }
})
```

To learn more about Box Picker API, [follow this link](https://developer.box.com/guides/embed/ui-elements/picker/)  
  
### openai_dalle_source

CustUp can also add image files from generated images using OpenAI DALL.E API, CustUp currently uses the DALL.E v3.
  
The API key is required to use DALL.E-3, you can generate an API key here
- [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

**Complete option properties**

```js
{
  api_key: string;
  size: "1024x1024" | "1024x1792" | "1792x1024";
  n: number;
  model: "dall-e-3" | "dall-e-2";
  quality: "standard" | "hd";
}
```

#### Example

```js
const instance1 = new CustUp({
  // ...
  file_source_config: {
    openai_dalle_source: {
         api_key: 'api-key-from-openai',
         size: "1792x1024",
         n: 1,
         model: "dall-e-3",
         quality: "hd"
    }
  }
})
```

#### Properties description

| Property | Type | Default | Description |
| ---- | ---- | ---- | ---- |
`api_key` | `string` | `<empty string>` | OpenAI API key is required to use DALL.E 3
`size` | `"1024x1024" \| "1024x1792" \| "1792x1024"` | `"1024x1024"` | The size of the image that will be generated by DALL.E
`n` | `number` | `1` | Number of images that will be generated by DALL.E
`model` | `"dall-e-3" \| "dall-e-2"` | `"dall-e-3"` | The DALL.E model that should be used, the default is `"dall-e-3"` note that though there is an option for the version 2 of DALL.E it may be buggy because CustUp has been optimized to use version 3
`quality` | `"standard" \| "hd"` | `"standard"` | The quality of the image that will be generated by DALL.E 3
  
To learn more about DALL.E 3 API [follow this link](https://platform.openai.com/docs/guides/images/introduction)  
