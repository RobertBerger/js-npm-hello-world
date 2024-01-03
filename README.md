# js-npm-hello-world

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Npm package to append "This is a sample message" message to "Hello World" text

#### Implementation 

index.js
```javascript
const HelloWorld = require('javascript-hello-world/helloworld');

const obj = new HelloWorld("This is a sample message");

console.log(obj.getMessage());
```

#### Output
Execution : node /usr/lib/node_modules/javascript-hello-world/index.js
````
Hello world!! This is a sample message
