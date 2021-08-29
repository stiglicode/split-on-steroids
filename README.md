# Extended Split Function | Split on stroids

## Installation

Using npm:
```shell
$ npm i split-on-steroids
```

## Options

Split function can be returnded as string or as array,

| Method | Parent | Result |Description |
| --- | --- | --- | --- |
|.asArray| String.steroid_split(array) | `array`| Return going to be array 
|.asString| String.steroid_split(array) | `string`| Return going to be string

## Usage

>**NOTE #1**: If you pass string as argument | *exampleString.steroid_split(".")* | function behavior will the be same as the native | *String.prototype.split()* | function.

<!-- >**NOTE #2**: If you use only the function, without methods, function will return array. -->

<!-- Basic usage:
```js
// Load the function from node_modules.
import "split-on-steroids";

// Start using

let exampleString = "Hi, I am example string. And I have example sentence";

exampleString.steroid_split([",", "."]);

// Returns ["Hi", "I am example string", "And I have example sentence"]
``` -->

Return as array:
```js
import "split-on-steroids";

// Start using

let exampleString = "Hi, I am example string. And I have example sentence";
exampleString.steroid_split([",", "."]).asArray;

// Returns ["Hi", "I am example string", "And I have example sentence"]
```

Return as string:
```js
import "split-on-steroids";

// Start using

let exampleString = "Hi, I am example string. And I have example sentence";
exampleString.steroid_split([",", "."]).asString;

// Returns "HiI am example stringAnd I have example sentence"
```
