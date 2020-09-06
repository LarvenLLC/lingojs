/*!
 * lingo.js
 * version : 2.0.1
 * author : Adam (BossBele) Beleko
 * license : MIT
 * https://larven.github.io/lingo-js/
 */

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    global.lingo = factory();
  }
})(this, function () {
  /************************************
      Variables
  ************************************/

  var lingo,
    VERSION = "2.0.1";

  this.string = "";

  /************************************
      Constructors
  ************************************/

  // Lingo prototype object
  function Lingo(input) {
    (this.string = String(input) || ""), (this.string = this.string.trim());
  }

  lingo = function (input) {
    return new Lingo(input);
  };

  // version number
  lingo.version = VERSION;

  var formatLingo = (format) => {
    switch (format) {
      case "sentence":
        this.string =
          this.string.split("")[0].toUpperCase() +
          this.string.substring(1).toLowerCase();
        break;
      case "pascal":
        this.string = this.string
          .split(" ")
          .map(
            (substr) => substr.split("")[0].toUpperCase() + substr.substring(1)
          )
          .toString()
          .replace(/\,/g, "");
        break;
      case "snake":
        this.string = this.string.toLowerCase().replace(/\s/g, "_");
        break;
      case "kebab":
        this.string = this.string.toLowerCase().replace(/\s/g, "-");
        break;
      case "camel":
        this.string = this.string
          .toLowerCase()
          .split(" ")
          .map(
            (substr, i) =>
              (i > 0 &&
                i + 1 < this.string.split(" ").length &&
                substr.split("")[0].toUpperCase() + substr.substring(1)) ||
              substr
          )
          .toString()
          .replace(/\,/g, "");
        break;
      case "title":
        this.string = this.string
          .toLowerCase()
          .split(" ")
          .map((substr, i) => {
            return substr.split("")[0].toUpperCase() + substr.substring(1);
          })
          .toString()
          .replace(/\,/g, " ");
        break;
      default:
        this.string =
          this.string.split("")[0].toUpperCase() +
          this.string.substring(1).toLowerCase();
        break;
    }
  };

  var wrapLingo = (wrapper) => {
    wrapper = (wrapper && String(wrapper)) || "()";
    switch (wrapper) {
      case "()":
        this.string = `(${this.string})`;
        break;
      case '""':
        this.string = `"${this.string}"`;
        break;
      case "''":
        this.string = `'${this.string}'`;
        break;
      case "[]":
        this.string = `[${this.string}]`;
        break;
      case "{}":
        this.string = `{${this.string}}`;
        break;
      case "``":
        this.string = `\`${this.string}\``;
        break;
      default:
        this.string = `${wrapper[0]}${this.string}${
          wrapper[wrapper.length - 1]
        }`;
        break;
    }
  };

  var makeSentence = (from) => {
    switch (from) {
      case "pascal":
        this.string = this.string.replace(/([A-Z])/g, " $1").toLowerCase();
        break;
      case "snake":
        this.string = this.string.toLowerCase().replace(/\_/g, " ");
        break;
      case "kebab":
        this.string = this.string.toLowerCase().replace(/\-/g, " ");
        break;
      case "camel":
        this.string = this.string.replace(/([A-Z])/g, " $1").toLowerCase();
        break;
      case "title":
        this.string = this.string.toLowerCase();
        break;
      default:
        this.string = this.string.toLowerCase();
        break;
    }
    this.sentence;
  };

  var formatName = (format) => {
    let tempStr = this.string.split(" ");
    this.string = "";
    for (var i = 0; i < format.length; i++) {
      if (format.charAt(i) === "F") {
        this.string += tempStr[0];
        continue;
      }
      if (format.charAt(i) === "M") {
        this.string += tempStr[1];
        continue;
      }
      if (format.charAt(i) === "S") {
        this.string += tempStr[tempStr.length - 1];
        continue;
      }
      if (format.charAt(i) === "f") {
        this.string += tempStr[0].match(/\b\w/).join("").toUpperCase();
        continue;
      }
      if (format.charAt(i) === "m") {
        this.string += tempStr[1].match(/\b\w/).join("").toUpperCase();
        continue;
      }
      if (format.charAt(i) === "s") {
        this.string += tempStr[tempStr.length - 1]
          .match(/\b\w/)
          .join("")
          .toUpperCase();
        continue;
      }
      this.string += format.charAt(i);
    }
  };

  /************************************
      Lingo Prototype
  ************************************/

  lingo.fn = Lingo.prototype = {
    add: function (str) {
      this.string += " " + str;
      return this;
    },
    value: function () {
      return this.string;
    },
    convert: function (from = "", to = "") {
      makeSentence(from);
      formatLingo(to);
      return this.string;
    },
    format: function (format = defaultFormat) {
      formatLingo(format);
      return this.string;
    },
    sentence: this.format,
    pascal: function () {
      formatLingo("pascal");
      return this.string;
    },
    snake: function () {
      formatLingo("snake");
      return this.string;
    },
    kebab: function () {
      formatLingo("kebab");
      return this.string;
    },
    slug: this.kebab,
    camel: function () {
      formatLingo("camel");
      return this.string;
    },
    title: function () {
      formatLingo("title");
      return this.string;
    },
    name: function (format = "F M S") {
      formatName(format);
      return this.string;
    },
    reverse: function () {
      this.string = [...this.string].reverse().join("");
      return this.string;
    },
    reverseWords: function () {
      this.string = this.string.split(" ").reverse().join(" ");
      return this.string;
    },
    characters: function () {
      this.string = this.string.replace(/\s/g, "").split("").toString();
      return this.string;
    },
    words: function () {
      this.string = this.string.split(" ").toString();
      return this.string;
    },
    count: function () {
      return this.string.replace(/\s/g, "").split("").length;
    },
    countWords: function () {
      return this.string.split(" ").length;
    },
    chunk: function (length = 4, separator = "-") {
      this.string = this.string
        .match(new RegExp(".{1," + length + "}", "g"))
        .join(`${separator}`);
      return this.string;
    },
    wrap: function (wrapper) {
      wrapLingo(wrapper);
      return this.string;
    },
    singleQuote: function () {
      wrapLingo("''");
      return this.string;
    },
    quote: function () {
      wrapLingo('""');
      return this.string;
    },
    doubleQuote: this.quote,
    initials: function (separator = ".") {
      this.string = this.string
        .match(/\b(\w)/g)
        .join(separator)
        .toUpperCase();
      return this.string;
    },
    first: function (index = 1) {
      this.string = this.string.substring(0, index);
      return this.string;
    },
    last: function (index = 1) {
      this.string = this.string.substr(-index);
      return this.string;
    },
    ellipsis: function (index = 1) {
      this.string = this.string.split(" ").splice(0, Math.abs(index)).join(" ");
      this.string += "...";
      return this.string;
    },
    truncate: function (index = 1) {
      this.string = this.string.split(" ").splice(0, Math.abs(index)).join(" ");
      return this.string;
    },
    prune: this.truncate,
    decapitalize: function () {
      this.string = this.string.toLowerCase();
      return this.string;
    },
    capitalize: function () {
      this.string = this.string.toUpperCase();
      return this.string;
    },
    lowerCase: this.decapitalize,
    upperCase: this.capitalize,
    set: function (value) {
      this.string = String(value);
      return this.string;
    },
    // from JS
    length: this.string.length,
  };

  return lingo;
});
