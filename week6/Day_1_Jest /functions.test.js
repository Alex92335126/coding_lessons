const sum = require("./functions").sum;
const doubler = require("./functions").doubler;
const area = require("./functions").area;
describe("My first Jest Test specification,sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 5 + 5 to equal 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});
describe("My second Jest Test specification,doubler", () => {
  test("doubles 4 to equal 8", () => {
    expect(doubler(4)).toBe(8);
  });
  test("doubles 5 to equal 10", () => {
    expect(doubler(5)).toBe(10);
  });
});
describe("My third Jest Test specification, area", () => {
  test("calculate area, height 2 and width 4 to equal to 8", () => {
    expect(area(2, 4)).toBe(8);
  });
  test("calculate area, height 4 and width 4 to equal to 16", () => {
    expect(area(4, 4)).toBe(16);
  });
});
