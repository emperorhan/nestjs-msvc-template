import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

import { serverConfig } from "./server";

import { loggerConfig } from "./logger";

import { swaggerOpt } from "./swagger";

const config = {
    server: serverConfig,
    logger: loggerConfig,
};

export { config, swaggerOpt };
