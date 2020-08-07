/*!
 * lingojs
 * version : 1.0.9
 * author : Adam (BossBele) Beleko
 * license : MIT
 * https://larven.github.io/lingojs/
 */

var Lingo = function (param) {
  var string = String(param) || "",
    self = this;
  string = string.trim();

  // Constants
  const VERSION = "1.0.9",
    defaultFormat = "sentence";

  var formatLingo = (format) => {
    switch (format) {
      case "sentence":
        string =
          string.split("")[0].toUpperCase() + string.substring(1).toLowerCase();
        break;
      case "pascal":
        string = string
          .split(" ")
          .map(
            (substr) => substr.split("")[0].toUpperCase() + substr.substring(1)
          )
          .toString()
          .replace(/\,/g, "");
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
          .split(" ")
          .map(
            (substr, i) =>
              (i > 0 &&
                i + 1 < string.split(" ").length &&
                substr.split("")[0].toUpperCase() + substr.substring(1)) ||
              substr
          )
          .toString()
          .replace(/\,/g, "");
        break;
      case "title":
        string = string
          .toLowerCase()
          .split(" ")
          .map((substr, i) => {
            return substr.split("")[0].toUpperCase() + substr.substring(1);
          })
          .toString()
          .replace(/\,/g, " ");
        break;
      default:
        string =
          string.split("")[0].toUpperCase() + string.substring(1).toLowerCase();
        break;
    }
  };

  var wrapLingo = (wrapper) => {
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
  };

  var makeSentence = (from) => {
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
    self.sentence;
  };

  var formatName = (format) => {
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
  };

  self.add = function (str) {
    string += " " + str;
    return self;
  };
  self.value = function () {
    return string;
  };
  self.convert = function (from = "", to = "") {
    makeSentence(from);
    formatLingo(to);
    return string;
  };
  self.format = function (format = defaultFormat) {
    formatLingo(format);
    return string;
  };
  self.sentence = self.format;
  self.pascal = function () {
    formatLingo("pascal");
    return string;
  };
  self.snake = function () {
    formatLingo("snake");
    return string;
  };
  self.kebab = function () {
    formatLingo("kebab");
    return string;
  };
  self.slug = self.kebab;
  self.camel = function () {
    formatLingo("camel");
    return string;
  };
  self.title = function () {
    formatLingo("title");
    return string;
  };
  self.name = function (format = "F M S") {
    formatName(format);
    return string;
  };
  self.reverse = function () {
    string = [...string].reverse().join("");
    return string;
  };
  self.reverseWords = function () {
    string = string.split(" ").reverse().join(" ");
    return string;
  };
  self.characters = function () {
    string = string.replace(/\s/g, "").split("").toString();
    return string;
  };
  self.words = function () {
    string = string.split(" ").toString();
    return string;
  };
  self.count = function () {
    return string.replace(/\s/g, "").split("").length;
  };
  self.countWords = function () {
    return string.split(" ").length;
  };
  self.chunk = function (length = 4, separator = "-") {
    string = string
      .match(new RegExp(".{1," + length + "}", "g"))
      .join(`${separator}`);
    return string;
  };
  self.wrap = function (wrapper) {
    wrapLingo(wrapper);
    return string;
  };
  self.singleQuote = function () {
    wrapLingo("''");
    return string;
  };
  self.quote = function () {
    wrapLingo('""');
    return string;
  };
  self.doubleQuote = self.quote;
  self.initials = function (separator = ".") {
    string = string
      .match(/\b(\w)/g)
      .join(separator)
      .toUpperCase();
    return string;
  };
  self.first = function (index = 1) {
    string = string.substring(0, index);
    return string;
  };
  self.last = function (index = 1) {
    string = string.substr(-index);
    return string;
  };
  self.ellipsis = function (index = 1) {
    string = string.split(" ").splice(0, Math.abs(index)).join(" ");
    string += "...";
    return string;
  };
  self.truncate = function (index = 1) {
    string = string.split(" ").splice(0, Math.abs(index)).join(" ");
    return string;
  };
  self.prune = self.truncate;
  self.decapitalize = function () {
    string = string.toLowerCase();
    return string;
  };
  self.capitalize = function () {
    string = string.toUpperCase();
    return string;
  };
  self.lowerCase = self.decapitalize;
  self.upperCase = self.capitalize;
  self.set = function (value) {
    string = String(value);
    return string;
  };
  // from JS
  self.length = string.length;

  return string;
};

function lingo(param) {
  return new Lingo(param);
}

/************************************
        Exposing Lingo
    ************************************/

// check for nodeJS
var hasModule = typeof module !== "undefined" && module.exports;

// CommonJS module is defined
if (hasModule) {
  module.exports = lingo;
}

/*global ender:false */
if (typeof ender === "undefined") {
  // here, `this` means `window` in the browser, or `global` on the server
  // add `lingo` as a global object via a string identifier,
  // for Closure Compiler 'advanced' mode
  this["lingo"] = lingo;
}

/*global define:false */
if (typeof define === "function" && define.amd) {
  define([], function () {
    return lingo;
  });
}
