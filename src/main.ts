import { NestFactory } from '@nestjs/core';
import * as process from 'process';

import { AppModule } from './app.module';

const { PORT } = process.env;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT || 8080);
}
bootstrap();
