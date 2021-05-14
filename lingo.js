/*!
 * lingo.js
 * version : 2.0.7
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
    defaultFormat = "sentence",
    VERSION = "2.0.7";

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

  var formatLingo = (format, string) => {
    switch (format) {
      case "sentence":
        string = string.replace(/(^\s*\w{1}|\.\s*\w{1})/gi, function (match) {
          return match.toUpperCase();
        });
        break;
      case "pascal":
        string = string.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
          return g1.toUpperCase() + g2.toLowerCase();
        });
        break;
      case "snake":
        string = string.toLowerCase().replace(/\s/g, "_");
        break;
      case "kebab":
        string = string.toLowerCase().replace(/\s/g, "-");
        break;
      case "camel":
        string = string
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, function (match, character) {
            return character.toUpperCase();
          });
        break;
      case "title":
        string = string.replace(/\w\S*/g, function (match) {
          return match[0].toUpperCase() + match.substr(1).toLowerCase();
        });
        break;
      default:
        string = string.replace(/(^\s*\w{1}|\.\s*\w{1})/gi, function (match) {
          return match.toUpperCase();
        });
        break;
    }
    return string;
  };

  var wrapLingo = (wrapper, string) => {
    wrapper = (wrapper && String(wrapper)) || "()";
    switch (wrapper) {
      case "()":
        string = `(${string})`;
        break;
      case '""':
        string = `"${string}"`;
        break;
      case "''":
        string = `'${string}'`;
        break;
      case "[]":
        string = `[${string}]`;
        break;
      case "{}":
        string = `{${string}}`;
        break;
      case "``":
        string = `\`${string}\``;
        break;
      default:
        string = `${wrapper[0]}${string}${wrapper[wrapper.length - 1]}`;
        break;
    }
    return string;
  };

  var makeSentence = (from, string) => {
    switch (from) {
      case "pascal":
        string = string.replace(/([A-Z])/g, " $1").toLowerCase();
        break;
      case "snake":
        string = string.toLowerCase().replace(/\_/g, " ");
        break;
      case "kebab":
        string = string.toLowerCase().replace(/\-/g, " ");
        break;
      case "camel":
        string = string.replace(/([A-Z])/g, " $1").toLowerCase();
        break;
      case "title":
        string = string.toLowerCase();
        break;
      default:
        string = string.toLowerCase();
        break;
    }
    return string;
  };

  var formatName = (format, string) => {
    let tempStr = string.split(" ");
    string = "";
    for (var i = 0; i < format.length; i++) {
      if (format.charAt(i) === "F") {
        string += tempStr[0];
        continue;
      }
      if (format.charAt(i) === "M") {
        string += tempStr[1];
        continue;
      }
      if (format.charAt(i) === "S") {
        string += tempStr[tempStr.length - 1];
        continue;
      }
      if (format.charAt(i) === "f") {
        string += tempStr[0].match(/\b\w/).join("").toUpperCase();
        continue;
      }
      if (format.charAt(i) === "m") {
        string += tempStr[1].match(/\b\w/).join("").toUpperCase();
        continue;
      }
      if (format.charAt(i) === "s") {
        string += tempStr[tempStr.length - 1]
          .match(/\b\w/)
          .join("")
          .toUpperCase();
        continue;
      }
      string += format.charAt(i);
    }
    return string;
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
      this.string = makeSentence(from, this.string);
      this.string = formatLingo(to, this.string);
      return this.string;
    },
    format: function (format = defaultFormat) {
      this.string = formatLingo(format, this.string);
      return this.string;
    },
    sentence: function () {
      return this.format();
    },
    pascal: function () {
      this.string = formatLingo("pascal", this.string);
      return this.string;
    },
    snake: function () {
      this.string = formatLingo("snake", this.string);
      return this.string;
    },
    kebab: function () {
      this.string = formatLingo("kebab", this.string);
      return this.string;
    },
    slug: function () {
      return this.kebab();
    },
    camel: function () {
      this.string = formatLingo("camel", this.string);
      return this.string;
    },
    title: function () {
      this.string = formatLingo("title", this.string);
      return this.string;
    },
    name: function (format = "F M S") {
      this.string = formatName(format, this.string);
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
      this.string = wrapLingo(wrapper, this.string);
      return this.string;
    },
    singleQuote: function () {
      this.string = wrapLingo("''", this.string);
      return this.string;
    },
    quote: function () {
      this.string = wrapLingo('""', this.string);
      return this.string;
    },
    doubleQuote: function () {
      return this.quote();
    },
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
    prune: function (index = 1) {
      return this.truncate(index);
    },
    decapitalize: function () {
      this.string = this.string.toLowerCase();
      return this.string;
    },
    capitalize: function () {
      this.string = this.string.toUpperCase();
      return this.string;
    },
    lowerCase: function () {
      return this.decapitalize();
    },
    upperCase: function () {
      return this.capitalize();
    },
    set: function (value) {
      this.string = String(value);
      return this.string;
    },
    // from JS
    length: this.string.length,
  };
  return lingo;
});
