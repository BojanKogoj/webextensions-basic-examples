## Background script

Rewrites user agent on [httpbin.org/user-agent](https://httpbin.org/user-agent) and [facebook.com](https://facebook.com)

This is meant for mobile devices, it will allow you to have Facebook chat in Firefox

### To make it work:

 - Zip content of this folder and rename it to `bbfb@adev.si.xpi` (it must match gecko id in manifest.json)
 - In `about:config` set `xpinstall.signatures.required` to `true`
 - Upload file to your device, for example `Download` folder
 - Go to `file:///storage/emulated/0/Download` (path might be different)
 - Click on the fille and allow it to install

It should be working in the background, and using BlackBerry 10 user-agent for httpbin.org and facebook.com
