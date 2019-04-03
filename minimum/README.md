## Extremely minimum app

### Install necessary npm modules
```
$ npm install
```

### Start web server for debug
```
$ npm start
```

### Building APK
```
$ ionic integrations enable cordova --add
$ cordova platform add android
$ cordova build android
```

### Installing APK
```
$ adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```
