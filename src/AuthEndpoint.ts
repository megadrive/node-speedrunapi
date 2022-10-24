import axios from "axios";
import { Endpoint, EndpointCommonOptions } from "./Endpoint";

type Token = { token: string };

type HeaderOptions = Parameters<typeof axios>["1"] & {
  token: string;
};

/**
 * AuthEndpoint is an Endpoint that requires Authentication for its API requests.
 */
export class AuthEndpoint extends Endpoint<Partial<EndpointCommonOptions>> {
  apiKey: string;

  constructor(endpoint: string, opts: Partial<EndpointCommonOptions> & Token) {
    super(endpoint, opts);

    this.apiKey = opts.token;
  }

  /**
   * Gets the headers required for an authenticated request.
   */
  headers() {
    return {
      headers: {
        Host: "www.speedrun.com",
        Accept: "application/json",
        "X-API-Key": this.apiKey,
      },
    };
  }

  exec(opts: Partial<HeaderOptions> = {}) {
    opts = Object.assign(opts, this.headers());
    return super.exec(opts);
  }
}

export default AuthEndpoint;
