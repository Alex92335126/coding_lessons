const myBeverage = {
  delicious: true,
  sour: false,
};
describe(" Testing my beverage", () => {
  test("Is Delicious True?", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });
  test("Is Sour False?", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
