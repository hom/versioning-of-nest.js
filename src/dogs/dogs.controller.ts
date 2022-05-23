import { Controller, Get, Version } from '@nestjs/common';

/**
 * Controller level version prefix
 */
@Controller({
  version: '1',
  path: 'dogs',
})
export class DogsControllerV1 {
  @Get()
  find(): string {
    return 'This api version is controller version prefix of v1';
  }
}

@Controller({
  version: '2',
  path: 'dogs',
})
export class DogsControllerV2 {
  @Get()
  find(): string {
    return 'This api version is controller version prefix of v2';
  }
}
