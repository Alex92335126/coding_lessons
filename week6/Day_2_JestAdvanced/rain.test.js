const weather = {
  weather: "Rain",
  city: "Hong Kong",
};
describe("Checking The Weather", () => {
  test("Check HK Weather Is Rainy Or Not", () => {
    expect(weather.weather).toBe("Rain");
  });
  test("Is the city Hong Kong", () => {
    expect(weather.city).toBe("Hong Kong");
  });
});
