const assert = require("chai").assert;
// const { sayHello, addNumbers } = require("../app");
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");
//results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(8, 5);

describe("App", () => {
  describe("sayHello()", () => {
    it("sayHello should return hello", () => {
      // let result = sayHello();
      assert.equal(sayHelloResult, "hello");
    });
    it("sayHello should return type String", () => {
      // let result = sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers()", () => {
    it("addNumbers should be above 5", () => {
      // let result = addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers should return type number", () => {
      // let result = addNumbers(5, 5);
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
