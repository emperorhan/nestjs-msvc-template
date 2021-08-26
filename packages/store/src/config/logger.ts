import { FastifyLoggerOptions } from "fastify";

export const loggerConfig: FastifyLoggerOptions = {
    prettyPrint: {
        translateTime: true,
        ignore: "pid,hostname",
    },
};
