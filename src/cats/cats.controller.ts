import { Controller, Get, Req, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { Request } from 'express';

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

  @Version('1.1')
  @Get()
  findOfV1Dot1(@Req() req: Request): string {
    const version = req.headers['x-request-version'];
    return `This api is route level version of ${version}`;
  }

  @Version('2')
  @Get()
  findOfV2(): string {
    return 'This api is route level version of v2';
  }
}
