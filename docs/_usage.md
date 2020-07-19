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

## NB: (Must Read)

Due to the nature of strings and for your convenience, most of the functions are made chainable. This means that they return the instance of the whole modified object. This can be a problem when lingo is not forced to return text after chaining.

In XML tags, such as HTML, lingo will return text as it is forced to do so.

In other cases however, such as usage in functions, you can do either of the following to ensure that the value returned is a string:

Using value(), valueOf() or toString() functions:

```js
lingo("Tanzania").add("the land").add("of Kilimanjaro and Zanzibar").value();
lingo("Tanzania").add("the land").add("of Kilimanjaro and Zanzibar").valueOf();
lingo("Tanzania").add("the land").add("of Kilimanjaro and Zanzibar").toString();
```

Wraping the whole instance with the JS String() constructor:

```js
String(lingo("Tanzania").add("the land").add("of Kilimanjaro and Zanzibar"));
```

Using the string concatenation operator (+):

```js
lingo("Tanzania").add("the land").add("of Kilimanjaro and Zanzibar") + "";
```
