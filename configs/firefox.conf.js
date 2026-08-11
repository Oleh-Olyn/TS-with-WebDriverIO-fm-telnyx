import { config as baseConfig } from "../wdio.conf.js";

export const config = {
  ...baseConfig,

  capabilities: [
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: process.env.HEADLESS === "true" ? ["-headless"] : [],
      },
    },
  ],
};
