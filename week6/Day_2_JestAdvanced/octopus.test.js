const OctopusCard = require("./octopus").OctopusCard;
/**********************************************
 * Mock
 * ==================================
 * Mocks are simulated objects that mimic the behavior of real objects in controlled ways. You can test the code, without having actually execute it.
 * Mock for API calls, database queries.
 *
 * The goal for mocking is to replace something we don't control with something that we do.
 * jest.fn = mock a function
 * jest.mock = mock a module
 * jest.spyOn = spy or mock a function
 ***********************************************/

describe("Testing Octopus Card Functions", () => {
  let octopusInstance;

  beforeEach(() => {
    octopusInstance = new OctopusCard();
  });

  test("octopus card should subtract value accordingly", () => {
    // First add money
    octopusInstance.addMoney(100);

    expect(octopusInstance.amount).toEqual(100);
    // Use 10 dollars
    let subtract = octopusInstance.useMoney(10);
    // Should have 90 dollars left
    expect(subtract).toBe(90);
  });
  test("it should add value accordingly", () => {
    // The spy on method allows us to restore the initial implemented with the mockRestore method
    let spy = jest.spyOn(octopusInstance, "addMoney");
    // Apply the value to the octopus card
    const isAdded = octopusInstance.addMoney(100);
    // Expect the method to have been called
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(100);
    // Expect the method to return 100
    expect(isAdded).toBe(100);
  });
  test("should not be able to buy product if octopus doesn't have enough", () => {
    const spy = jest.spyOn(octopusInstance, "useMoney");
    // Use 3100
    const result = octopusInstance.useMoney(3100);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(3100);
    expect(spy).not.toHaveBeenCalledWith(100);

    // Should be not enough
    expect(result).toBe("You do not have enough money on your octopus card");
  });
  test("should not be able to add more than 3000 dollars", () => {
    const spy = jest.spyOn(octopusInstance, "addMoney");
    // Add 3100
    expect(() => {
      octopusInstance.addMoney(3100);
    }).toThrow("You cannot exceed more than 3000 on your octopus card");
    expect(spy).toHaveBeenCalled();
    // toHaveBeenCalledWith
    expect(spy).toHaveBeenCalledWith(3100);
    expect(spy).toHaveBeenCalledTimes(1);
    // Should not be able to add more than 3000
  });
  // describe("testing mock implementation", () => {
  //   let octopusInstance;
  //   beforeEach(() => {
  //     octopusInstance = new OctopusCard();
  //   });
  //   test("it should add value accordingly", () => {
  //     let spy = jest
  //       .spyOn(octopusInstance, "addMoney")
  //       .mockImplementation(() => {
  //         console.log("MOCK MOCK MOCK");
  //         return 100;
  //       });
  //     const isAdded = octopusInstance.addMoney(100);
  //     // Expect the method to have been called
  //     expect(spy).toHaveBeenCalled();
  //     expect(spy).toHaveBeenCalledWith(100);
  //     // Expect the method to return 100
  //     expect(isAdded).toBe(100);
  //   });
  // });
});
