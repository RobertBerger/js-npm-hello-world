# js-npm-hello-world

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Npm package to append message to "Hello World" text

#### Implementation 

test.js
```javascript
const HelloWorld = require('javascript-hello-world/helloworld');

const obj = new HelloWorld("This is a sample message");

console.log(obj.getMessage());
```

#### Output
Execution : node test
````
Hello world!! This is a sample message