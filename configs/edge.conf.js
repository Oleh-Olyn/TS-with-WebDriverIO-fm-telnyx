import { config as baseConfig } from "../wdio.conf.js";

export const config = {
  ...baseConfig,

  capabilities: [
    {
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args:
          process.env.HEADLESS === "true"
            ? ["--headless=new", "--window-size=1920,1080"]
            : ["--window-size=1920,1080"],
      },
    },
  ],
};
