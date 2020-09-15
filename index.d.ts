// Type definitions for lingojs
// Project: https://github.com/LarvenLLC/lingojs

interface Lingo {
  version: string;

  add(inputString: string): Lingo;
  value(): string;
  convert(from?: string, to?: string): string;
  format(format?: string): string;
  sentence(): string;
  pascal(): string;
  snake(): string;
  kebab(): string;
  slug(): string;
  camel(): string;
  title(): string;
  name(format?: string): string;
  reverse(): string;
  reverseWords(): string;
  characters(): string;
  words(): string;
  count(): number;
  countWords(): number;
  chunk(length?: number, separator?: string): string;
  wrap(wrapper?: string): string;
  quote(): string;
  singleQuote(): string;
  doubleQuote(): string;
  initials(separator?: string): string;
  first(index?: number): string;
  last(index?: number): string;
  ellipsis(index?: number): string;
  truncate(index?: number): string;
  decapitalize(): string;
  capitalize(): string;
  lowerCase(): string;
  upperCase(): string;
  set(): string;
}

declare function lingo(value?: any): Lingo;

/**
 * Usage: <code>import lingo from 'lingojs'</code>
 */
export default lingo;
