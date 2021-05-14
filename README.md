# lingojs

> A javascript library for formatting and manipulating text (strings)

[![NPM](https://img.shields.io/npm/v/lingojs.svg)](https://www.npmjs.com/package/lingojs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm](https://img.shields.io/npm/dt/lingojs)

## Node

### Install

```bash
npm install --save lingojs
```

Or

```bash
yarn add lingojs
```

### Usage

```jsx
import lingo from "lingojs";
```

Or

```js
const lingo = require("lingojs");
```

## CDN

### Install

```html
<script src="https://cdn.jsdelivr.net/gh/LarvenLLC/lingojs@latest/lingo.min.js"></script>
```

### Usage

`lingo` is global and accessible. Therefore, it can be used directly after importing the script via CDN. See [CDN Usage Example](https://codepen.io/BossBele/pen/KKVrGzz).

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

## Functions

### value

Function to get the (real, final & primitive) value of the manipulated string.

```js
lingo("Tanzania").value();

// Tanzania
```

### add

Function to concatenate words (add a word with a space infront of the string).

```js
lingo("Tanzania")
  .add("the")
  .add("land")
  .add("of")
  .add("Kilimanjaro")
  .add("and")
  .add("Zanzibar")
  .value();

// Tanzania the land of Kilimanjaro and Zanzibar
```

| Parameter (Data Type) |   Explanation    |             (Sample) Values              | Default |
| --------------------- | :--------------: | :--------------------------------------: | :-----: |
| string (String)       | text to be added | _ `"Tanzania"`<br/>_ `"234^12 USD"`<br/> |   ``    |

### convert

Function to convert a string from one naming convention to another.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").convert(
  "sentence",
  "kebab"
);

// tanzania,-the-land-of-kilimanjaro-and-zanzibar
```

| Parameter (Data Type) |        Explanation        |                                                 Values                                                  |   Default    |
| --------------------- | :-----------------------: | :-----------------------------------------------------------------------------------------------------: | :----------: |
| from (String)         | current naming convention | _ `"sentence"`<br/> _ `"pascal"`<br/> _ `"snake"`<br/> _ `"kebab"`<br/>_ `"camel"`<br/>_ `"title"`<br/> |      ``      |
| to (String)           | desired naming convention | _ `"sentence"`<br/> _ `"pascal"`<br/> _ `"snake"`<br/> _ `"kebab"`<br/>_ `"camel"`<br/>_ `"title"`<br/> | `"sentence"` |

### format

Function to format a string into a certain naming convention.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").format();

// Tanzania, the land of kilimanjaro and zanzibar

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").format("kebab");

// tanzania,-the-land-of-kilimanjaro-and-zanzibar
```

| Parameter (Data Type) |        Explanation        |                                                 Values                                                  |   Default    |
| --------------------- | :-----------------------: | :-----------------------------------------------------------------------------------------------------: | :----------: |
| format (String)       | desired naming convention | _ `"sentence"`<br/> _ `"pascal"`<br/> _ `"snake"`<br/> _ `"kebab"`<br/>_ `"camel"`<br/>_ `"title"`<br/> | `"sentence"` |

### sentence

Function to format a string into the sentence naming convention (sentence case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").sentence();

// Tanzania, the land of kilimanjaro and zanzibar
```

### pascal

Function to format a string into the pascal naming convention (pascal case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").pascal();

// Tanzania,TheLandOfKilimanjaroAndZanzibar
```

### snake

Function to format a string into the snake naming convention (snake case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").snake();

// tanzania,_the_land_of_kilimanjaro_and_zanzibar
```

### kebab | slug

Function to format a string into the kebab/slug naming convention (kebab/slug case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").kebab();
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").slug();

// tanzania,-the-land-of-kilimanjaro-and-zanzibar
```

### camel

Function to format a string into the camel naming convention (camel case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").camel();

// tanzania,TheLandOfKilimanjaroAndZanzibar
```

### title

Function to format a string into the title naming convention (title case).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").title();

// Tanzania, The Land Of Kilimanjaro And Zanzibar
```

### name

Function to format a string into desired human names convention.

```js
lingo("John Doe Nairobi").name();

// John Doe Nairobi

lingo("John Doe Nairobi").name("fms");

// JDN

lingo("John Doe Nairobi").name("S, F M");

// Nairobi, John Doe

lingo("John Doe Nairobi").name("f.m.s.");

// J.D.N.

lingo("John Doe Nairobi").name("F M");

// John Doe

lingo("John Doe Nairobi").name("F m.s.");

// John D.N.
```

- F - first name
- M - second/middle name
- S - last name
- f - first name initial
- m - second/middle name initial
- s - last name initial

### reverse

Function to reverse the characters in a string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").reverse();

// rabiznaZ dna orajnamiliK fo dnal eht ,ainaznaT
```

### reverseWords

Function to reverse the words in a string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").reverseWords();

// Zanzibar and Kilimanjaro of land the Tanzania,
```

### characters

Function that returns all the characters of a string, separated by commas.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").characters();

// T,a,n,z,a,n,i,a,,,t,h,e,l,a,n,d,o,f,K,i,l,i,m,a,n,j,a,r,o,a,n,d,Z,a,n,z,i,b,a,r
```

### words

Function that returns all the words of a string, separated by commas.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").words();

// Tanzania,,the,land,of,Kilimanjaro,and,Zanzibar
```

### count

Function that returns the number of characters in a string (minus spaces).

For full count with spaces use the 'length' property

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").count();

// 40
```

### countWords

Function that returns the number of words in a string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").countWords();

// 7
```

### chunk

Function that divides a string into segments of equal lengths.

```js
lingo("A89f45eR8dd73Q1T").chunk();

// A89f-45eR-8dd7-3Q1T

lingo("A89f45eR8dd73Q1T").chunk(4, " ");

// A89f 45eR 8dd7 3Q1T

lingo("A89f45eR8dd73Q1T").chunk(2, "/");

// A8/9f/45/eR/8d/d7/3Q/1T
```

| Parameter (Data Type) |            Explanation             |                 (Sample) Values                 | Default |
| --------------------- | :--------------------------------: | :---------------------------------------------: | :-----: |
| length (Number)       |        length of each chunk        |              _ `2`<br/>_ `10`<br/>              |   `4`   |
| separator (String)    | separator character between chunks | _ `"/"`<br/>_ `"#"`<br/>_ `""`<br/>_ `" "`<br/> |  `"-"`  |

### wrap

Function that wraps the string by specified character(s).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").wrap();

// (Tanzania, the land of Kilimanjaro and Zanzibar)

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").wrap("{}");

// {Tanzania, the land of Kilimanjaro and Zanzibar}

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").wrap("''");

// 'Tanzania, the land of Kilimanjaro and Zanzibar'

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").wrap('""');

// "Tanzania, the land of Kilimanjaro and Zanzibar"

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").wrap("#");

// #Tanzania, the land of Kilimanjaro and Zanzibar#
```

| Parameter (Data Type) |                                        Explanation                                         |                  (Sample) Values                  | Default |
| --------------------- | :----------------------------------------------------------------------------------------: | :-----------------------------------------------: | :-----: |
| wrapper (String)      | character(s) to wrap text. max two characters: one at the start and one at the end of text | _ `"/"`<br/>_ `"#"`<br/>_ `"*"`<br/>_ `"{}"`<br/> | `"()"`  |

### singleQuote

Function that wraps the string by single quotation marks.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").singleQuote();

// 'Tanzania, the land of Kilimanjaro and Zanzibar'
```

### quote | doubleQuote

Function that wraps the string by double quotation marks.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").quote();
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").doubleQuote();

// "Tanzania, the land of Kilimanjaro and Zanzibar"
```

### initials

Function that returns the initials of the string.

Accepts separator.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").initials();

// T.T.L.O.K.A.Z

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").initials("-");

// T-T-L-O-K-A-Z

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").initials("");

// TTLOKAZ
```

| Parameter (Data Type) |             Explanation              |                 (Sample) Values                 | Default |
| --------------------- | :----------------------------------: | :---------------------------------------------: | :-----: |
| separator (String)    | separator character between initials | _ `"/"`<br/>_ `"-"`<br/>_ `""`<br/>_ `" "`<br/> |  `"."`  |

### first

Function that returns the first n characters of the string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").first(8);

// Tanzania

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").first();

// T
```

| Parameter (Data Type) |                          Explanation                           |    (Sample) Values    | Default |
| --------------------- | :------------------------------------------------------------: | :-------------------: | :-----: |
| length (Number)       | number of characters from the beginning of text to be returned | _ `2`<br/>_ `10`<br/> |   `1`   |

### last

Function that returns the last n characters of the string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").last(8);

// Zanzibar

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").last();

// r
```

| Parameter (Data Type) |                       Explanation                        |    (Sample) Values    | Default |
| --------------------- | :------------------------------------------------------: | :-------------------: | :-----: |
| length (Number)       | number of characters from the end of text to be returned | _ `2`<br/>_ `10`<br/> |   `1`   |

### truncate | prune

Function that truncates/clips the string to return the first n characters of the string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").truncate();

// Tanzania,

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").truncate(3);

// Tanzania, the land
```

| Parameter (Data Type) |                        Explanation                        |    (Sample) Values    | Default |
| --------------------- | :-------------------------------------------------------: | :-------------------: | :-----: |
| length (Number)       | number of words from the beginning of text to be returned | _ `2`<br/>_ `10`<br/> |   `1`   |

### ellipsis

Function that truncates the string to return the first n characters of the string with a set of dots (…) at the end.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").ellipsis();

// Tanzania,...

lingo("Tanzania, the land of Kilimanjaro and Zanzibar").ellipsis(3);

// Tanzania, the land...
```

| Parameter (Data Type) |                        Explanation                        |    (Sample) Values    | Default |
| --------------------- | :-------------------------------------------------------: | :-------------------: | :-----: |
| length (Number)       | number of words from the beginning of text to be returned | _ `2`<br/>_ `10`<br/> |   `1`   |

### decapitalize | lowerCase

Function to convert the whole string to lower case (small letters).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").decapitalize();
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").lowerCase();

// tanzania, the land of kilimanjaro and zanzibar
```

### capitalize | upperCase

Function to convert the whole string to upper case (capital letters).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").capitalize();
/* is same as */
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").upperCase();

// TANZANIA, THE LAND OF KILIMANJARO AND ZANZIBAR
```

### set

Function that overrides the string with a new value.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").set("Lingo");

// Lingo
```

| Parameter (Data Type) |         Explanation         |              (Sample) Values               | Default |
| --------------------- | :-------------------------: | :----------------------------------------: | :-----: |
| string (String)       | new text to override string | _ `"Lingo"`<br/>_ `"1000 Tanzanians"`<br/> |   ``    |

## Properties

### length

Function to return the number of characters in a string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").length;

// 46
```
