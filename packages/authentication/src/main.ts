import { NestFactory } from "@nestjs/core";
import {
    FastifyAdapter,
    NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppService } from "./app.service";
import { AppModule } from "./app.module";
import { config } from "@config";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: config.logger,
            bodyLimit: 10485760, // 10MiB
        })
    );

    AppService.setupMiddleware(app);
    AppService.setupSwagger(app);
    await app.listen(AppService.port());
}
bootstrap();
