/*!
 * lingo.js
 * version : 1.0.0
 * author : Adam (BossBele) Beleko
 * license : MIT
 * https://larven.github.io/lingo-js/
 */

var Lingo = function (param) {
  var string = String(param) || "",
    self = this;
  string = string.trim();

  // Constants
  const VERSION = "1.0.0",
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
    return self;
  };
  self.format = function (format = defaultFormat) {
    formatLingo(format);
    return self;
  };
  self.sentence = self.format;
  self.pascal = function () {
    formatLingo("pascal");
    return self;
  };
  self.snake = function () {
    formatLingo("snake");
    return self;
  };
  self.kebab = function () {
    formatLingo("kebab");
    return self;
  };
  self.slug = self.kebab;
  self.camel = function () {
    formatLingo("camel");
    return self;
  };
  self.title = function () {
    formatLingo("title");
    return self;
  };
  self.reverse = function () {
    string = [...string].reverse().join("");
    return self;
  };
  self.characters = function () {
    string = string.replace(/\s/g, "").split("").toString();
    return self;
  };
  self.words = function () {
    string = string.split(" ").toString();
    return self;
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
    return self;
  };
  self.wrap = function (wrapper) {
    wrapLingo(wrapper);
    return self;
  };
  self.initials = function (separator = ".") {
    string = string
      .match(/\b(\w)/g)
      .join(separator)
      .toUpperCase();
    return self;
  };
  self.first = function (index = 1) {
    string = string.substring(0, index);
    return self;
  };
  self.last = function (index = 1) {
    string = string.substr(-index);
    return self;
  };
  self.ellipsis = function (index = 1) {
    string = string.split(" ").splice(0, Math.abs(index)).join(" ");
    string += "...";
    return self;
  };
  self.truncate = function (index = 1) {
    string = string.split(" ").splice(0, Math.abs(index)).join(" ");
    return self;
  };
  self.prune = self.truncate;
  self.decapitalize = function () {
    string = string.toLowerCase();
    return self;
  };
  self.capitalize = function () {
    string = string.toUpperCase();
    return self;
  };
  self.lowerCase = self.decapitalize;
  self.upperCase = self.capitalize;
  self.set = function (value) {
    string = String(value);
    return self;
  };
  // from JS
  self.toString = function () {
    return string;
  };
  self.concat = self.add;
  self.toLowerCase = self.decapitalize;
  self.toUpperCase = self.capitalize;
  self.substring = function (start = 0, end = string.length) {
    string = string.substring(start, Math.abs(end));
    return self;
  };
  self.slice = function (start = 0, end) {
    if (end) {
      string = string.slice(start, end);
    } else {
      string = string.slice(start);
    }
    return self;
  };
  self.substr = function (start = 0, end) {
    if (end) {
      string = string.substr(start, end);
    } else {
      string = string.substr(start);
    }
    return self;
  };
  self.replace = function (search, str) {
    try {
      string = string.replace(search, str);
    } catch (error) {
      console.error(error);
    }
    return self;
  };
  self.valueOf = self.value;
  self.charAt = function (index = 0) {
    string = string.charAt(index);
    return self;
  };
  self.indexOf = function (character) {
    return string.indexOf(character);
  };
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
