import { SpeedrunApi } from "../";
import { expect } from "chai";

describe("build a game url", () => {
  it("should match", () => {
    const sr = new SpeedrunApi();

    expect(sr.games({ short: "sm64" }).build()).to.equal(
      "https://www.speedrun.com/api/v1/games/sm64"
    );

    sr.games({ id: "ajkfa" }).param("short", 123).build();
  });
});
