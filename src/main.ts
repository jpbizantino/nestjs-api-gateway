import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcCustomExceptionFilter } from './shared/exceptions/rpc-custom-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Nest-API-Gateway');

  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  
  await app.listen(4000);

  logger.log(`Gateway running on port 4000`);
}

bootstrap();
