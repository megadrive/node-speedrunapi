import { SpeedrunApi } from "../src";

const sr = new SpeedrunApi();

describe("build a game url", () => {
  it("should match", () => {
    expect(sr.games().id("sm64").build()).toEqual(
      "https://www.speedrun.com/api/v1/games/sm64"
    );
  });
});

describe("authenticated request", () => {
  it("should contain api headers", () => {
    const FAKE_API_KEY = "testApiKey";
    const authEndpoint = sr.notifications(FAKE_API_KEY);
    const builtEndpoint = authEndpoint.build();
    expect(builtEndpoint).toEqual(
      "https://www.speedrun.com/api/v1/notifications"
    );

    expect(authEndpoint.headers().headers["X-API-Key"]).toEqual<string>(
      FAKE_API_KEY
    );
  });
});
