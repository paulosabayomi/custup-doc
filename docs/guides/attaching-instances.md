---
sidebar_position: 3
---

# Attaching instances

Guess the maximum number of CustUp instances that can be on a single page, `Infinity`, and up to the maximum capacity of the user's device memory, so also it is also possible to attach one or more CustUp instances to another instance basically for collective file upload, that is if you have more than one CustUp instances on a single page and you would like to upload all the files added to all the instances together in a single upload.  
**For Example**

```js
const instance1 = new CustUp({...});
const instance2 = new CustUp({...});
const instance3 = new CustUp({...});
const instance4 = new CustUp({
    //...
    instance_attach: [instance1, instance2, instance3],
    single_upload: true, // required
});
instance4.upload();
```

`single_upload` is required to be set to `true`, because currently the main purpose of instance attachment is for combined file upload for single upload. Read more on `single_upload` [here](/docs/options/main#single_upload).
