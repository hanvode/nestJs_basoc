import { Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('a*b')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
