import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //setup
    setupSwagger(app);

    await app.listen(process.env.PORT || 3000);
    Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
