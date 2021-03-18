import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';

@ApiTags('cats')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
