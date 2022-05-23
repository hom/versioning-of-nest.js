import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Version(VERSION_NEUTRAL)
  @Get()
  find(): string {
    return 'This api is route level version of neutral type';
  }

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
