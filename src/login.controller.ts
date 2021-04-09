import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { UsersController } from './users.controller';
import User from './models/dto/UserDto';
import LoginDto from './models/dto/LoginDto';

@ApiTags('login')
@Controller('login')
export class LoginController {
  private _cache: User[] = [];

  constructor() {}

  @ApiCreatedResponse({
    description: 'Connection ok',
    type: User,
  })
  @Put()
  login(
    @Body() login: LoginDto,
    @Res() res: Response,
  ) {
    const tmp = UsersController._cache.find(
      (value) => value.mail === login.mail && value.password === login.password,
    );

    if (tmp) {
      this._cache.push(tmp);
      res.status(HttpStatus.CREATED).send(tmp);
    } else {
      res.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @ApiOkResponse({
    description: 'Delete a logged user',
    type: User,
  })
  @ApiNotFoundResponse({
    description: 'User not logged',
  })
  @Delete(':id')
  logoff(@Param('id') id: number, @Res() res: Response) {
    console.log(this._cache[0].id, id);
    const index = this._cache.findIndex((value) => value.id == id);

    if (index >= 0) {
      res.status(HttpStatus.OK).send(this._cache.splice(index, 1)[0]);
    } else {
      res && res.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
