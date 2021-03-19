import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { CreateCatDto } from './models/dto/CreateCatDto';

@ApiTags('cats')
@Controller('cats')
export class AppController {
  private _cache: CreateCatDto[] = [
    {
      name: 'Papou',
      age: 16,
      breed: 'Marseillais',
      id: '1',
    },
    {
      name: 'Papou2',
      age: 2,
      breed: 'Marseillais',
      id: '2',
    },
  ];

  constructor() {}

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: CreateCatDto,
    isArray: true,
  })
  @Get()
  get(): any {
    return this._cache;
  }

  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: CreateCatDto,
  })
  @ApiNotFoundResponse({
    description: 'No cat find',
  })
  @Get(':id')
  getById(@Param('id') id: string): any {
    return this._cache.filter((value) => value.id === id)[0];
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCatDto,
  })
  @Post()
  add(@Body() cat: CreateCatDto): CreateCatDto {
    this._cache.push(cat);
    return cat;
  }

  @ApiOkResponse({
    description: 'Delete a cat',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    const index = this._cache.findIndex((value) => value.id === id);
    return this._cache.splice(index, 1);
  }
}
