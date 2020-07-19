# Installation

## Node.js

```bash
npm install --save lingojs
```

Or

```bash
yarn add lingojs
```

### Exposing lingo

```js
const lingo = require("lingojs"); // require
```

Or

```jsx
import lingo from "lingojs"; // ES6 syntax
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/gh/LarvenLLC/lingojs@latest/lingo.min.js"></script>
```

### Exposing lingo

`lingo` is global and accessible (global variable `lingo` is exposed). Therefore, it can be used directly after importing the script via CDN. See (CDN Usage Example)[https://codepen.io/BossBele/pen/KKVrGzz].

```html
<script>
  lingo().set("Adam's Apple");
</script>
```

## Download

[Download Latest Lingo](https://github.com/LarvenLLC/lingojs/releases/latest/download/lingojs.zip)

```html
<script src="path-to-/lingo.min.js"></script>
```
