"use strict";

import { AuthEndpoint } from "../AuthEndpoint";

/**
 * Refer to SpeedrunAPI docs for more information
 * https://github.com/speedruncom/api/blob/master/version1/notifications.md
 *
 * NOTE: This class requires authentication.
 */
class Notifications extends AuthEndpoint {
  constructor(token: string) {
    super("notifications", { token });
  }
}

export default Notifications;
