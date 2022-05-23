import { Controller, Get, Version } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Version('1')
  @Get()
  findOfV1(): string {
    return 'This api is route level version of v1';
  }

  @Version('2')
  @Get()
  findOfV2(): string {
    return 'This api is route level version of v2';
  }
}
