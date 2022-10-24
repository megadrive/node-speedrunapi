import { Endpoint, EndpointCommonOptions } from "../Endpoint";

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/games.md
 */

type GamesConstructorOptions = Partial<
  {
    /** when given, performs a fuzzy search across game names and abbreviations */
    name: string;
    /** when given, performs an exact-match search for this abbreviation */
    abbreviation: string;
    /** when given, restricts to games released in that year */
    released: number;
    /** 	game type ID; when given, restricts to that game type */
    gametype: string;
    /**platform ID; when given, restricts to that platform */
    platform: string;
    /**region ID; when given, restricts to that region */
    region: string;
    /**genre ID; when given, restricts to that genre */
    genre: string;
    /**engine ID; when given, restricts to that engine */
    engine: string;
    /** developer ID; when given, restricts to that developer */
    developer: string;
    //	publisher ID; when given, restricts to that publisher
    publisher: string;
    //moderator ID; when given, only games moderated by that user will be returned
    moderator: string;
    //legacy parameter, do not use this in new code; whether or not to include games with game types (if this parameter is not set, game types are included; if it is set to a true value, only games with game types will be returned, otherwise only games without game types are returned)
    romhack: boolean;
    /** Include miscellaneous items. */
    miscellaneous: boolean;
    /** Skip empty items. */
    "skip-empty": boolean;
  } & EndpointCommonOptions
>;

class Games extends Endpoint<GamesConstructorOptions> {
  constructor(opts: GamesConstructorOptions = {}) {
    super("games", opts);
    return this;
  }

  categories(
    opts: {
      miscellaneous: boolean;
    } = { miscellaneous: false }
  ) {
    this._method = "categories";

    this.param("miscellaneous", opts.miscellaneous);
    return this;
  }

  levels() {
    this._method = "levels";
    return this;
  }

  derivedGames() {
    this._method = "derived-games";
    return this;
  }

  records(
    opts: {
      top?: number;
      "skip-empty": boolean;
    } = {
      "skip-empty": false,
    }
  ) {
    this._method = "records";

    if (opts.top) this.param("top", opts.top);
    if (opts["skip-empty"]) this.param("skip-empty", opts["skip-empty"]);

    return this;
  }

  variables() {
    this._method = "variables";
    return this;
  }
}

export default Games;
