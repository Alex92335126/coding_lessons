const video = require("./video");
afterEach(() => {
  jest.restoreAllMocks();
});
test("Plays Video", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();
  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
