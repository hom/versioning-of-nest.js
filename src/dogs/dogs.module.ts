import { Module } from '@nestjs/common';
import { DogsControllerV1, DogsControllerV2 } from './dogs.controller';

@Module({
  controllers: [DogsControllerV1, DogsControllerV2],
})
export class DogsModule {}
