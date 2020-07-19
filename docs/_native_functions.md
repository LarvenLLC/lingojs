# Functions from JavaScript String methods

### toString

Function that extracts parts of a string and returns the extracted parts in a new string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").toString();

// Tanzania, the land of Kilimanjaro and Zanzibar
```

### concat

Function to concatenate strings (add a word/text infront of the string).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").concat("AAAA");

// Tanzania, the land of Kilimanjaro and ZanzibarAAAA
```

| Parameter (Data Type) |   Explanation    |             (Sample) Values              | Default |
| --------------------- | :--------------: | :--------------------------------------: | :-----: |
| string (String)       | text to be added | _ `"Tanzania"`<br/>_ `"234^12 USD"`<br/> |   ``    |

### toLowerCase

Function to convert the whole string to lower case (small letters).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").toLowerCase();

// tanzania, the land of kilimanjaro and zanzibar
```

### toUpperCase

Function to convert the whole string to upper case (capital letters).

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").toUpperCase();

// TANZANIA, THE LAND OF KILIMANJARO AND ZANZIBAR
```

### substring

Function that extracts the characters from a string, between two specified indices, and returns the new sub string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").substring(10, 36);

// the land of Kilimanjaro an
```

| Parameter (Data Type) |                           Explanation                           |    (Sample) Values    | Default |
| --------------------- | :-------------------------------------------------------------: | :-------------------: | :-----: |
| start (Number)        |             position where to start the extraction              | _ `10`<br/>_ `2`<br/> |   `0`   |
| end (Number)          | position (up to, but not including) where to end the extraction | _ `20`<br/>_ `5`<br/> |   ``    |

### slice

Function that extracts parts of a string and returns the extracted parts in a new string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").slice(10, 36);

// the land of Kilimanjaro an
```

| Parameter (Data Type) |                           Explanation                           |    (Sample) Values    | Default |
| --------------------- | :-------------------------------------------------------------: | :-------------------: | :-----: |
| start (Number)        |             position where to start the extraction              | _ `10`<br/>_ `2`<br/> |   `0`   |
| end (Number)          | position (up to, but not including) where to end the extraction | _ `20`<br/>_ `5`<br/> |   ``    |

### substr

Function that extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").substr(10, 36);

// the land of Kilimanjaro and Zanzibar
```

| Parameter (Data Type) |              Explanation               |    (Sample) Values    | Default |
| --------------------- | :------------------------------------: | :-------------------: | :-----: |
| start (Number)        | position where to start the extraction | _ `10`<br/>_ `2`<br/> |   `0`   |
| end (Number)          |    number of characters to extract     | _ `20`<br/>_ `5`<br/> |   ``    |

### replace

Function that searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

It currently does not support Regular Expressions (RegEx).
It is case sensitive.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").replace("the", "da");

// Tanzania, da land of Kilimanjaro and Zanzibar
```

| Parameter (Data Type) |         Explanation         |             (Sample) Values              | Default |
| --------------------- | :-------------------------: | :--------------------------------------: | :-----: |
| searchValue (String)  |     text to be replaced     | _ `"Tanzania"`<br/>_ `"234^12 USD"`<br/> |   ``    |
| newValue (String)     | text to replace searchValue |       _ `"I am"`<br/>_ `"B"`<br/>        |   ``    |

### valueOf

Function to get the (real, final & primitive) value of the manipulated string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").valueOf();

// Tanzania, the land of Kilimanjaro and Zanzibar
```

### charAt

Function that returns the character at the specified index in a string.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").charAt(22);

// K
```

| Parameter (Data Type) |             Explanation             |    (Sample) Values    | Default |
| --------------------- | :---------------------------------: | :-------------------: | :-----: |
| index (Number)        | position of character starting at 0 | _ `2`<br/>_ `10`<br/> |   `0`   |

### indexOf

Function that returns the position of the first occurrence of a specified value in a string.

It is case-sensitive.

```js
lingo("Tanzania, the land of Kilimanjaro and Zanzibar").indexOf("K");

// 22
```

| Parameter (Data Type) |           Explanation           |       (Sample) Values        | Default |
| --------------------- | :-----------------------------: | :--------------------------: | :-----: |
| character(s) (String) | character(s) to be searched for | _ `"Great"`<br/>_ `"B"`<br/> |   ``    |
