# Usage

## Create

Create an instance of lingo. lingo takes any input (number/string/etc) and tries to convert it into a string.

```js
var myLingo = lingo(1000);

var value = myLingo.value();
// 1000

var myLingo2 = lingo("With a number 1,000");

var value2 = myLingo2.value();
// With a number 1,000
```
