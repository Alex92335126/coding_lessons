const can = {
  name: "pamplemousee",
  ounces: 12,
};
describe("The Can", () => {
  test("Has A Cool Name", () => {
    expect(can.name).toBe("pamplemousee");
  });
  test("Has 12 Oz", () => {
    expect(can.ounces).toBe(12);
  });
});
