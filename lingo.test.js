const lingo = require("./lingo");
test("Returns lingo version", () => {
  expect(lingo.version).toBeTruthy();
  expect(typeof lingo.version).toBe("string");
});
test("Converts string to title case", () => {
  console.log(lingo(), lingo().title());
  expect(typeof lingo().title()).toBe("string");
  expect(lingo("lingo  js-is cool").title()).toBe("Lingo  Js-is Cool");
});
