import { API_VERSION, SpeedrunAPIError } from "./constants";
import axios from "axios";
import { URLSearchParams } from "url";
const speedrunApi = `https://www.speedrun.com/api/${API_VERSION}/`;

export type EndpointCommonOptions = {
  max: number;
  orderby: "name" | "mandatory" | "user-defined" | "pos" | "miscellaneous";
  direction: "asc" | "desc";
  offset: number;
  method: string;
  embed: string;
  id: string;
  short: string;
  _bulk: boolean;
  top: number;
};

export interface EndpointParameter {
  name: keyof EndpointCommonOptions;
  value: EndpointCommonOptions[keyof EndpointCommonOptions];
}

export type EndpointConstructorOptions = Partial<EndpointCommonOptions>;

export class Endpoint<T extends EndpointConstructorOptions> {
  protected _id?: string;
  protected _endpoint: string;
  protected _method?: string;
  protected _params: Map<keyof T, string | number | boolean> = new Map();

  constructor(endpoint: string, opts: T) {
    opts = opts ?? {};

    this._id = opts.id || undefined;
    this._endpoint = endpoint;
    this._method = undefined;
    this.handleCommonOpts(opts);
  }

  /**
   * Sets the ID of the resource to fetch.
   */
  id(id: string) {
    this._id = id;
    return this;
  }

  /**
   * Adds a SINGLE param to the request.
   */
  param(
    param: keyof T,
    value: EndpointCommonOptions[keyof EndpointCommonOptions]
  ) {
    this._params.set(param, value);

    return this;
  }

  /**
   * Adds a set of parameters to the request.
   */
  params(
    params: Record<keyof T, EndpointCommonOptions[keyof EndpointCommonOptions]>
  ) {
    for (const k in params) {
      this._params.set(k, params[k]);
    }

    return this;
  }

  /**
   * Sets the method.
   */
  method(method: string) {
    this._method = method;
    return this;
  }

  /**
   * Embeds other resources. See: https://github.com/speedruncom/api/blob/master/version1/embedding.md
   */
  embed(embed: string[]) {
    this.param("embed", embed.join(","));
    return this;
  }

  /**
   * Get info in bulk, less is returned for large datasets.
   */
  bulk() {
    this.param("_bulk", true);
    return this;
  }

  /**
   * Build the URL string.
   */
  build() {
    let url = speedrunApi + this._endpoint;
    if (this._id) url += "/" + this._id;
    if (this._method) url += "/" + this._method;
    const searchParams = new URLSearchParams(Array.from<any>(this._params));

    url += searchParams.toString();

    return url;
  }

  /**
   * Executes a chain. Must be the last thing called.
   * NOTE: Any invalid parameters will be included in the API call but will get
   * ignored server-side.
   */
  async exec(axiosOpts: Parameters<typeof axios>["1"] = {}) {
    // Ensure JSON
    axiosOpts.headers = {
      "Content-Type": "application/json",
    };
    const url = this.build();

    try {
      const res = await axios(url, axiosOpts);
      return res.data;
    } catch (err) {
      throw new SpeedrunAPIError(err);
    }
  }

  /**
   * Handles common options that occur regularly in methods.
   */
  handleCommonOpts(opts: Partial<EndpointCommonOptions>) {
    if (opts.orderby) {
      switch (opts.orderby) {
        case "name":
        case "mandatory":
        case "user-defined":
        case "pos":
        case "miscellaneous":
          this.param("orderby", opts.orderby);
          break;
      }
    }

    if (opts.direction) {
      switch (opts.direction) {
        case "asc":
        case "desc":
          this.param("direction", opts.direction);
          break;
      }
    }

    if (opts.max) {
      this.param("max", opts.max);
    }
    if (opts.offset) {
      this.param("offset", opts.offset);
    }
  }
}
