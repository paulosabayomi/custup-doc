---
sidebar_position: 11
---

# Events

CustUp has events that for file and media activities.  
  
CustUp events can be subscribed to by calling the `on` method and passing the event category followed by `.` and the event name and also the callback function as the second argument.  
  
**Example**

```js
const instance1 = new CustUp({
    // ...
})

// To subscribe to an event
// instance1.on('event-category.event-name', callback_fn)

const callback_fn = () => {
    console.log('CustUp has been initialized')
};
instance1.on('library.init', callback_fn);
```

## Library Events

Currently there's only one event that triggers for the library activities and it is the initialization event.

### library.init

This event is called when the library has finished initialization and has been painted on the UI.

## File Events

### file.beforeAdded

- returns  
  `{file: File}`

This event is triggered before a file gets added and processed.

#### Example

```js
const instance1 = new CustUp({
  // ...
});

instance1.on('file.beforeAdded', ({file}) => {
  console.log(file)
  // do something with the returned file before it gets added to the memory and UI
})
```

### file.afterAdded

- returns  
  `{file: File, element: HTMLElement, count: number}`

This event is triggered after a file has been processed, that is it has been added to the memory and/or browser storage and the UI.

#### Example

```js
const instance1 = new CustUp({
  // ...
})

instance1.on('file.afterAdded', ({file, element, count}) => {
  console.log(file, element, count)
})
```

#### Retuned properties description

| Property | Type | Description |
| ---- | ---- | ---- |
`file` | `File` | The file that just got added.
`element` | `HTMLElement` | The wrapper element of the file on the UI
`count` | `number` | The total number of added files

### file.beforePassedChecks

- returns  
  `File`

This event should be used to add checks for files before being added and before the `file.beforeAdded` event gets triggered.  
  
**Note:** The callback function of this event should either returns `true` or `false` or returns an `array` in which the first item should be `true` or `false`, `true` if the check passed and `false` if it does not, if it returns void the checks will not be effective, the second item in the `array` should be the error message that should be displayed to the user.

#### Example

```js
const instance1 = new CustUp({
  // ...
})

instance1.on('file.beforePassedChecks', (file) => {
  if (file.name.includes('test')) {
    return [false, "files that have 'test' in their file name are not allowed"];
  }else{
    return [true]; // or can also return void
  }
})
```

### file.removed

- returns  
  `{file: File, files_count: number}`

This event is triggered after a file has been removed.

#### Example

```js
const instance1 = new CustUp({
  // ...
})

instance1.on('file.removed', ({file, files_count}) => {
  console.log(file, files_count)
  // do something like make an API Delete request to remove the file from the server and the database
})
```

#### Returned properties description

| Property | Type | Description |
| ---- | ---- | ---- |
`file` | `File` | The file that was removed
`files_count` | `number` | The remaining number of files

### file.defaultFileRemoved

- returns  
  `File`

This event is triggered when a default file is removed.

### file.all_removed

- returns  
  `Array<File>`

This event is triggered when all the added files including the default files has been removed.

## Media sources

### video.recordingStarted

- returns  
    `{media_recorder: MediaRecorder, media_devices: MediaDevice, display_el: HTMLElement}`

This event is triggered at the start of video recording and it returns useful things that can be used to create a custom video recorder.

#### Returned properties descriptions

| Property | Type | Description |
| ---- | ---- | ---- |
`media_recorder` | `MediaRecorder` | The media recorder instance
`media_devices` | `MediaDevice` | The media device instance
`display_el` | `HTMLElement` | The HTMLElement of the video recorder UI

### video.recording

- returns
    `MediaRecorder`

This event is triggered when video recording is ongoing, and this event gets triggered every seconds during the video recording. It returns the `MediaRecorder` instance.

### video.recordStop

- returns  
    `{data: Array<Blob>, display_el: HTMLElement}`

This event is triggered after video recording has stopped.

### video.recordSaved

- returns  
    `{data: Array<Blob>}`

This event is triggered after video recording has been added to the list of selected files.

### video.recordCancel

- returns  
    `{data: Array<Blob>}`

This event is triggered when video recording is cancelled

### image.captured

- returns  
    `{data: Array<Blob>}`

This event is triggered immediately after image has been captured.

### audio.recordingStarted

- returns  
    `{media_recorder: MediaRecorder, media_devices: MediaDevice, display_el: HTMLElement}`

This event is triggered at the start of audio recording and it returns useful things that can be used to create a custom audio recorder.

#### Returned properties descriptions

| Property | Type | Description |
| ---- | ---- | ---- |
`media_recorder` | `MediaRecorder` | The media recorder instance
`media_devices` | `MediaDevice` | The media device instance
`display_el` | `HTMLElement` | The HTMLElement of the audio recorder UI

### audio.recording

- returns
    `MediaRecorder`

This event is triggered when audio recording is ongoing, and this event gets triggered every seconds during the audio recording. It returns the `MediaRecorder` instance.

### audio.recordStop

- returns  
    `{data: Array<Blob>, display_el: HTMLElement}`

This event is triggered after audio recording has stopped.

### audio.recordSaved

- returns  
    `{data: Array<Blob>}`

This event is triggered after audio recording has been added to the list of selected files.

### audio.recordCancel

- returns  
    `{data: Array<Blob>}`

This event is triggered when audio recording is cancelled

### screen.recordingStarted

- returns  
    `{media_recorder: MediaRecorder, media_devices: MediaDevice, display_el: HTMLElement}`

This event is triggered at the start of screen recording and it returns useful things that can be used to create a custom screen recorder.

#### Returned properties descriptions

| Property | Type | Description |
| ---- | ---- | ---- |
`media_recorder` | `MediaRecorder` | The media recorder instance
`media_devices` | `MediaDevice` | The media device instance
`display_el` | `HTMLElement` | The HTMLElement of the screen recorder UI

### screen.recording

- returns
    `MediaRecorder`

This event is triggered when screen recording is ongoing, and this event gets triggered every seconds during the screen recording. It returns the `MediaRecorder` instance.

### screen.recordStop

- returns  
    `{data: Array<Blob>, display_el: HTMLElement}`

This event is triggered after screen recording has stopped.

### screen.recordSaved

- returns  
    `{data: Array<Blob>}`

This event is triggered after screen recording has been added to the list of selected files.

### screen.recordCancel

- returns  
    `{data: Array<Blob>}`

This event is triggered when screen recording is cancelled.

## File Upload

### upload.beforeStart

- returns  
    `{files: Array<File>, formData: FormData, form: HTMLFormElement | undefined}`

This event is triggered before file upload starts.

#### Returned properties description

| Property | Type | Description |
| ---- | ---- | ---- |
`files` | `Array<File>` | Array of all the files that will be uploaded
`formData` | `FormData` | The `FormData` containing the data that will be uploaded to the endpoint
`form` | `HTMLFormElement \| undefined` | The provided form element, it is `undefined` if no form element was provided

### upload.progress

- returns  
    `{progressEvent: ProgressEvent; all_files: Array<File> | undefined; file: File | undefined; upload_element: HTMLElement | undefined}`

This event is triggered during upload and it returns the progress event and upload progress data.  
  
For `single_upload` upload progress is only broadcasted through the `upload_progress` event and not indicated on the UI, so if you want to display the upload progress you have to subscribe to the `upload_progress` event.

#### Properties descriptions

| Property | Type | Description |
| ---- | ---- | ---- |
`progressEvent` | `ProgressEvent` | The upload progress event
`all_files` | `Array<File> \| undefined` | This is the `array` of all the files that will be uploaded for combined upload and it is `undefined` for single file upload
`file` | `File \| undefined` | The file that is currently uploading for single file upload and `undefined` when uploading all files at the same time
`upload_element` | `HTMLElement | undefined` | The wrapper element of the upload progress display element it is `undefined` if the upload is not single file upload or if the UI type is not default UI type

### upload.success

- returns  
    `{data: Object; files: Array<File> | undefined; file: File | undefined; formData: FormData; upload_element: HTMLElement | undefined, file_container: HTMLElement | undefined}`

This event is triggered after all files has been uploaded for combined file upload and for single file upload.

#### Properties description

| Property | Type | Description |
| ---- | ---- | ---- |
`data` | `Object` | The data returned from the endpoint if any, it is going to be `{}` if no data was returned from the endpoint
`files` | `Array<File> \| undefined` | All the files that were uploaded, it is `undefined` for single file upload
`file` | `File \| undefined` | The file that was uploaded, it is `undefined` for combined file upload
`upload_element` | `HTMLElement \| undefined` | The wrapper container of the progress HTML element that contains the progress indicator, this is `undefined` for combined file upload and if the UI type used is not default UI type
`file_container` | `HTMLElement \| undefined` | The wrapper container element of the file on the UI, it is `undefined` if the UI type used is not default UI type

### upload.error

- returns  
    `{err: HTTPError, file: File | undefined, upload_element: HTMLElement | undefined; file_container: HTMLElement | undefined; files: Array<File>, formData: FormData | undefined}`

This event is triggered when a file or all files could not be uploaded due to an error for combined file upload and single file upload.

#### Properties description

| Property | Type | Description |
| ---- | ---- | ---- |
`err` | `HTTPError` | The HTTP error returned by axios
`file` | `File \| undefined` | The file that could not be uploaded due to an error
`upload_element` | `HTMLElement \| undefined` | The wrapper container of the progress HTML element that contains the progress indicator, this is `undefined` for combined file upload and if the UI type used is not default UI type
`file_container` | `HTMLElement \| undefined` | The wrapper container element of the file on the UI, it is `undefined` if the UI type used is not default UI type.

### upload.retry

- returns  
    `{file: File; file_container: HTMLElement}`

This event is triggered before retrying to upload a file.

### upload.all_finished

- returns  
    `{not_uploaded_files: Array<File>; uploaded_files: Array<File>}`

This event is triggered after all the files has been uploaded to the server.

## Others

### file_source.closed

- returns  
    `void`

This event is triggered when the file source (i.e the overlay that displays file sources like Video Camera, Link source, Google Drive and others) popup is closed.

### default_ui.shown

- returns  
    `void`

This event is triggered when the default UI overlay (i.e the initial UI that get displayed when no files has been added to the UI) is shown.

### default_ui.closed

- returns  
    `void`

This event is triggered when the default UI overlay (i.e the initial UI that get displayed when no files has been added to the UI) has been closed.
