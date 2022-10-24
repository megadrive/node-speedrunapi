import { config } from "dotenv";
import type { EndpointConstructorOptions } from "./Endpoint";
import Games from "./endpoints/games";
import Notifications from "./endpoints/notifications";
config();

export class SpeedrunApi {
  // categories(idOrOpts) {
  //   const Categories = import("./endpoints/categories");
  //   return new Categories(idOrOpts);
  // }

  // developers(idOrOpts) {
  //   const Developers = require("./endpoints/developers");
  //   return new Developers(idOrOpts);
  // }

  // engines(idOrOpts) {
  //   const Engines = require("./endpoints/engines");
  //   return new Engines(idOrOpts);
  // }

  games(opts: EndpointConstructorOptions = {}) {
    return new Games(opts);
  }

  // gametypes(idOrOpts) {
  //   const Gametypes = require("./endpoints/gametypes");
  //   return new Gametypes(idOrOpts);
  // }

  // guests(idOrOpts) {
  //   const Guests = require("./endpoints/guests");
  //   return new Guests(idOrOpts);
  // }

  // leaderboards(game, category, level, opts) {
  //   const Leaderboards = require("./endpoints/leaderboards");
  //   return new Leaderboards(game, category, level, opts);
  // }

  // levels(idOrOpts) {
  //   const Levels = require("./endpoints/levels");
  //   return new Levels(idOrOpts);
  // }

  notifications(token: string) {
    return new Notifications(token);
  }

  // platforms(idOrOpts) {
  //   const Platforms = require("./endpoints/platforms");
  //   return new Platforms(idOrOpts);
  // }

  // profile(idOrOpts) {
  //   const Profile = require("./endpoints/profile");
  //   return new Profile(idOrOpts);
  // }

  // regions(idOrOpts) {
  //   const Regions = require("./endpoints/regions");
  //   return new Regions(idOrOpts);
  // }

  // runs(idOrOpts) {
  //   const Runs = require("./endpoints/runs");
  //   return new Runs(idOrOpts);
  // }

  // series(idOrOpts) {
  //   const Series = require("./endpoints/series");
  //   return new Series(idOrOpts);
  // }

  // users(idOrOpts) {
  //   const Users = require("./endpoints/users");
  //   return new Users(idOrOpts);
  // }

  // variables(idOrOpts) {
  //   const Variables = require("./endpoints/variables");
  //   return new Variables(idOrOpts);
  // }
}
