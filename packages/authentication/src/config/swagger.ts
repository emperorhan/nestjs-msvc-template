import { SwaggerOptions } from "fastify-swagger";
import { FastifyRegisterOptions } from "fastify";

export const swaggerOpt: FastifyRegisterOptions<SwaggerOptions> = {
    routePrefix: "/docs",
    exposeRoute: true,
    swagger: {
        info: {
            title: "BLOCKCHAIN JOIN SERVICE",
            description: "ledgis enterprise blockchain join microservice",
            version: "0.1.0",
        },
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        },
        tags: [
            {
                name: "Healthcheck",
                description: "health check related endpoints",
            },
            { name: "Blockchain", description: "blockchain related endpoints" },
        ],
        securityDefinitions: {
            Authorization: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },
};
