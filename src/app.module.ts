import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { PigsModule } from './pigs/pigs.module';

@Module({
  imports: [DogsModule, CatsModule, PigsModule],
  providers: [],
})
export class AppModule {}
