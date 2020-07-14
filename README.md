# lingojs

> A javascript library for formatting and manipulating text (strings)

[![NPM](https://img.shields.io/npm/v/lingojs.svg)](https://www.npmjs.com/package/lingojs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lingojs
```

Or

```bash
yarn add lingojs
```

## Usage

```jsx
import lingo from "lingojs";
```

Or

```js
const lingo = require("lingojs");

console.log(lingo("Any Text"))
```

## Create
Create an instance of lingo. lingo takes any input (number/string/etc) and tries to convert it into a string.
```js
var myLingo = lingo(1000);

var value = myLingo.value();
// 1000

var myLingo2 = lingo("With a number 1,000");

var value2 = myNumeral2.value();
// With a number 1,000
```

## Functions

### value
Function to get the (real, final & primitive) value of the manipulated string.
```js
lingo("Tanzania").value();
// Tanzania
```

### add
Function to concatenate strings (add a word/text infront of the string).
```js
, the land of Kilimanjaro and Zanzibar
```

### convert
Function to convert a string from one naming convention to another.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### format
Function to format a string into a certain naming convention.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### sentence
Function to format a string into the sentence naming convention (sentence case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### pascal
Function to format a string into the pascal naming convention (pascal case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### snake
Function to format a string into the snake naming convention (snake case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### kebab
Function to format a string into the kebab naming convention (kebab case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### slug
Function to format a string into the slug naming convention (slug case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### camel
Function to format a string into the camel naming convention (camel case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### title
Function to format a string into the title naming convention (title case).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### reverse
Function to reverse the characters in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### characters
Function that returns all the characters of a string, separated by commas.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### words
Function that returns all the words of a string, separated by commas.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### count
Function that returns the number of characters in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### countWords
Function that returns the number of words in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### chunk*
Function that returns the number of characters in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### wrap
Function that wraps the string by specified character(s).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### initials*
Function that returns the initials of the string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### first
Function that returns the first n characters of the string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### last
Function that returns the last n characters of the string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### truncate | prune*
Function that truncates/clips the string to return the first n characters of the string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### ellipsis*
Function that truncates the string to return the first n characters of the string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### decapitalize | lowerCase
Function to convert the whole string to lower case (small letters).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").decapitalize()
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").lowerCase()
// tanzania, the land of kilimanjaro and zanzibar
```

### capitalize | upperCase
Function to convert the whole string to upper case (capital letters).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").capitalize()
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").upperCase()
// TANZANIA, THE LAND OF KILIMANJARO AND ZANZIBAR
```

### set
Function that overrides the string with a new value.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

##  Functions from JavaScript String methods
### toString
Function that extracts parts of a string and returns the extracted parts in a new string.

### concat
Function to concatenate strings (add a word/text infront of the string).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar")
```

### toLowerCase
Function to convert the whole string to lower case (small letters).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").toLowerCase()
// tanzania, the land of kilimanjaro and zanzibar
```

### toUpperCase
Function to convert the whole string to upper case (capital letters).
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").toUpperCase()
// TANZANIA, THE LAND OF KILIMANJARO AND ZANZIBAR
```

### substring
Function that extracts the characters from a string, between two specified indices, and returns the new sub string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").substring(10, 36)
// the land of Kilimanjaro an
```

### slice
Function that extracts parts of a string and returns the extracted parts in a new string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").slice(10, 36)
// the land of Kilimanjaro an
```

### substr
Function that extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").substr(10, 36)
// the land of Kilimanjaro and Zanzibar
```

### replace
Function that searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

It currently does not support Regular Expressions (RegEx).
It is case sensitive.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").replace("the", "da")
// Tanzania, da land of Kilimanjaro and Zanzibar
```

### valueOf
Function to get the (real, final & primitive) value of the manipulated string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").valueOf()
// Tanzania, the land of Kilimanjaro and Zanzibar
```

### charAt
Function that returns the character at the specified index in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").charAt(22)
// K
```

### indexOf
Function that returns the position of the first occurrence of a specified value in a string.

It is case-sensitive.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").indexOf("K")
// 22
```

## Properties

### length
Function to return the number of characters in a string.
```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").length
// 46
```
