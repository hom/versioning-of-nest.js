import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  find(): string {
    return 'This api to return all cats';
  }
}
