import { Controller, Get, Req, Version } from '@nestjs/common';
import { Request } from 'express';

@Controller('pigs')
export class PigsController {
  @Version('1.1')
  @Get()
  find(@Req() req: Request): string {
    const version = req.headers['x-request-version'];
    return `This api is requested from version: ${version}`;
  }
}
