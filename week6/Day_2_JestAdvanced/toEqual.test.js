const can1 = {
  flavour: "grapefruit",
  ounces: 12,
};
const can2 = {
  flavour: "grapefruit",
  ounces: 12,
};
describe("The Two Cans On My Desk", () => {
  test("Both Cans Have The Same Properties", () => {
    expect(can1).toEqual(can2);
  });
  test("Both Cans Are Not The Same", () => {
    expect(can1).not.toBe(can2);
  });
});
