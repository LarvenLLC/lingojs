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
```

## Functions

### value
Function to get the (real, final & primitive) value of the manipulated string.

### add
Function to concatenate strings (add a word/text infront of the string).

### convert
Function to convert a string from one naming convention to another.

### format
Function to format a string into a certain naming convention.

### sentence
Function to format a string into the sentence naming convention (sentence case).

### pascal
Function to format a string into the pascal naming convention (pascal case).

### snake
Function to format a string into the snake naming convention (snake case).

### kebab
Function to format a string into the kebab naming convention (kebab case).

### slug
Function to format a string into the slug naming convention (slug case).

### camel
Function to format a string into the camel naming convention (camel case).

### title
Function to format a string into the title naming convention (title case).

### reverse
Function to reverse the characters in a string.

### characters
Function that returns all the characters of a string, separated by commas.

### words
Function that returns all the words of a string, separated by commas.

### count
Function that returns the number of characters in a string.

### countWords
Function that returns the number of words in a string.

### chunk*
Function that returns the number of characters in a string.

### wrap
Function that wraps the string by specified character(s).

### initials*
Function that returns the initials of the string.

### first
Function that returns the first n characters of the string.

### last
Function that returns the last n characters of the string.

### truncate | prune*
Function that truncates/clips the string to return the first n characters of the string.

### ellipsis*
Function that truncates the string to return the first n characters of the string.

### decapitalize | lowerCase
Function to convert the whole string to lower case (small letters).

### capitalize | upperCase
Function to convert the whole string to upper case (capital letters).

### set
Function that overrides the string with a new value.

##  Functions from JavaScript String methods
### toString
Function that extracts parts of a string and returns the extracted parts in a new string.

### concat
Function to concatenate strings (add a word/text infront of the string).

### toLowerCase
Function to convert the whole string to lower case (small letters).

### toUpperCase
Function to convert the whole string to upper case (capital letters).

### substring
Function that extracts the characters from a string, between two specified indices, and returns the new sub string.

### slice
Function that extracts parts of a string and returns the extracted parts in a new string.

### substr
Function that extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

### replace
Function that searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

### valueOf
Function to get the (real, final & primitive) value of the manipulated string.

### charAt
Function that returns the character at the specified index in a string.

### indexOf
Function that returns the position of the first occurrence of a specified value in a string.

## Properties

### length
Function to return the number of characters in a string.
