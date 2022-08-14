import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('origin'),
  });

  await app.listen(configService.get<number>('port'));
}

bootstrap();
