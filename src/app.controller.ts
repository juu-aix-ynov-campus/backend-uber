import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { CreateCatDto } from './models/dto/CreateCatDto';

@ApiTags('cats')
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: CreateCatDto,
    isArray: true,
  })
  @Get()
  get(): any {
    return [{}, {}];
  }

  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: CreateCatDto,
  })
  @Get(':id')
  getById(@Param('id') id: string): any {
    return { id };
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCatDto,
  })
  @Post()
  add(@Body() cat: CreateCatDto): CreateCatDto {
    return cat;
  }
}
