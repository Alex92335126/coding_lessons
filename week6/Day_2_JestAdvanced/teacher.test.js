const person = {
  name: "Samson",
  age: 29,
  teacher: true,
};
describe("Check For Teacher", () => {
  test("Is Samson A Teacher?", () => {
    expect(person.teacher).toBeTruthy();
  });
  test("Is The Teacher Called Samson", () => {
    expect(person.name).toBe("Samson");
  });
});
