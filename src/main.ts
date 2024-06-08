import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestApplicationOptions } from '@nestjs/common';
import { AppModule } from './app.module';

const appOptions: NestApplicationOptions = {
  logger: ['log', 'error', 'warn'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appOptions);

  const config = new DocumentBuilder()
    .setTitle('Test title')
    .setDescription('Test description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
  });

  await app.listen(3000);
}
bootstrap();
