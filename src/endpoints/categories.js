let Endpoint = require("../Endpoint");

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/categories.md
 */
class Categories extends Endpoint {
  constructor(opts) {
    opts = opts || {};

    super("categories", opts);
  }

  /**
   * Gets records for the category.
   * @param {object} opts Options to pass.
   * @return {this}
   */
  records(opts) {
    this.method = "records";

    opts = opts || {};
    this.handleCommonOpts(opts);
    if (opts.top) this.param(["top", Number(opts.top)]);
    if (opts["skip-empty"]) this.param(["skip-empty", true]);

    return this;
  }

  /**
   * Gets variables for the category.
   * @param {object} opts Options to pass.
   * @return {this}
   */
  variables(opts) {
    this.method = "variables";

    opts = opts || {};
    this.handleCommonOpts(opts);
    if (opts["per-level"]) this.param(["per-level", opts["per-level"]]);
    if (opts["per-game"]) this.param(["per-game", opts["per-game"]]);

    return this;
  }
}

module.exports = Categories;
