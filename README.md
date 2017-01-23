# Utility-Tool
Logging utility tool

#installation
 ```
 $ npm install kb-loggertool
 ```
#Usage
enable debugging

```
DEBUG=true
```

disable debugging

```
DEBUG=false
```
#Require

```
const logging = require('kb-loggertool');
```

#How to use 

Throughout your code use

```
console.log();
```

Example

```
debug.debugSuccess('successful');
debug.debugError('error');
```

#Colors

This tool uses the colors package if you want to change the colors simply change the colors by editing the code to whatever color you choose:

```
color.setTheme({
  success: 'green',
  error: 'red',
});
```
