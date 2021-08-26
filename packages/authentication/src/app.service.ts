import {
    OnModuleDestroy,
    OnModuleInit,
    INestApplication,
} from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { config } from "@config";
// import { Connection, createConnection } from "typeorm";

// import { AccountEntity } from "@infrastructure/models/entities/";

// class DBConfig {
//     readonly host: string;
//     readonly port: number;
//     readonly database: string;
//     readonly username: string;
//     readonly password: string;
//     readonly synchronize: boolean;
//     readonly logging: boolean;
// }

// class RedisConfig {
//     readonly host: string;
//     readonly port: number;
// }

// class RedisClusterConfig {
//     readonly master: RedisConfig;
//     readonly slave: RedisConfig;
// }

// export class RabbitMQConfig {
//     readonly exchange: string;
//     readonly hostname: string;
//     readonly username: string;
//     readonly password: string;
// }

export class AppService implements OnModuleInit, OnModuleDestroy {
    // private databaseConnection?: Connection | void;

    static port(): number {
        return config.server.port;
    }

    static setupSwagger(app: INestApplication): void {
        const documentBuilder = new DocumentBuilder()
            .setTitle("Nest.js example")
            .setDescription("This is example for nest.js")
            .setVersion("1.0")
            .build();

        const document = SwaggerModule.createDocument(app, documentBuilder);
        SwaggerModule.setup("api", app, document);
    }

    // static redisClusterConfig(): RedisClusterConfig {
    //     const { REDIS_MASTER_PORT, REDIS_MASTER_HOST } = process.env;
    //     const masterHost = REDIS_MASTER_HOST ? REDIS_MASTER_HOST : "localhost";
    //     const masterPort = Number(REDIS_MASTER_PORT)
    //         ? Number(REDIS_MASTER_PORT)
    //         : 6379;
    //     const master: RedisConfig = { host: masterHost, port: masterPort };

    //     const { REDIS_SLAVE_HOST, REDIS_SLAVE_PORT } = process.env;
    //     const slaveHost = REDIS_SLAVE_HOST ? REDIS_SLAVE_HOST : "localhost";
    //     const slavePort = Number(process.env.REDIS_SLAVE_PORT)
    //         ? Number(REDIS_SLAVE_PORT)
    //         : 6379;
    //     const slave: RedisConfig = { host: slaveHost, port: slavePort };

    //     return { master, slave };
    // }

    // static rabbitMQConfig(): RabbitMQConfig {
    //     return {
    //         exchange: process.env.RABBIT_MQ_EXCHANGE || "example-exchange",
    //         hostname: process.env.RABBIT_MQ_HOSTNAME || "localhost",
    //         username: process.env.RABBIT_MQ_USER_NAME || "root",
    //         password: process.env.RABBIT_MQ_PASSWORD || "test",
    //     };
    // }

    // private loadDBConfig(): DBConfig {
    //     return {
    //         host: process.env.DATABASE_HOST || "localhost",
    //         port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    //         database: process.env.DATABASE_NAME || "nest",
    //         username: process.env.DATABASE_USER || "root",
    //         password: process.env.DATABASE_PASSWORD || "test",
    //         synchronize: "true" === process.env.DATABASE_SYNC || true,
    //         logging: "true" === process.env.DATABASE_LOGGING || true,
    //     };
    // }

    // private failToConnectDatabase(error: Error): void {
    //     console.error(error);
    //     process.exit(1);
    // }

    async onModuleInit(): Promise<void> {
        // const entities = [AccountEntity];
        // this.databaseConnection = await createConnection({
        //     ...this.loadDBConfig(),
        //     type: "mysql",
        //     entities,
        // }).catch((error: Error) => this.failToConnectDatabase(error));
    }

    async onModuleDestroy(): Promise<void> {
        // if (this.databaseConnection) await this.databaseConnection.close();
    }
}
