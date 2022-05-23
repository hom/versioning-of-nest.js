import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request } from 'express';

// Example extractor that pulls out a list of versions from a custom header and turns it into a sorted array.
// This example uses Fastify, but Express requests can be processed in a similar way.
const extractor = (request: Request): string | string[] => {
  const version = request.headers['x-request-version'];
  console.log(version);
  if (!version) return [];
  // Array list version [1, 2, 3]
  if (Array.isArray(version)) {
    return version;
  }
  // Semver version: 1.1 2.1
  const isSemverVersion = /\d(\.\d+){0,}/g.test(version);
  if (isSemverVersion) return version;
  // Multiple version: 1,2,3
  const isMultipleVersion = /\,/g.test(version);
  if (isMultipleVersion)
    return version
      .split(',')
      .filter((v) => !!v)
      .sort()
      .reverse();
  // Single version: 1
  return version;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
  });
  await app.listen(3000);
}
bootstrap();
