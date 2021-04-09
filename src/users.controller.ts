import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import User from './models/dto/UserDto';
import { CreateCatDto } from './models/dto/CreateCatDto';
import { Response } from 'express';
import CreateUserDto from './models/dto/CreateUserDto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  public static _cache: User[] = [
    {
      name: 'Julien',
      lastname: 'Catania',
      city: 'Marseille',
      id: Math.floor(Math.random() * 999999),
      mail: 'jcatania@ynov.com',
      password: 'marco',
      phone: '0123456789',
      role: 'driver',
      siret: 421337,
      vehicule_class: 'Super Driver',
      vehicule_registration: 'SE777ES',
    },
  ];

  constructor() {}

  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: User,
    isArray: true,
  })
  @Get()
  get(): any {
    return UsersController._cache;
  }

  @ApiCreatedResponse({
    description: 'User created',
    type: User,
  })
  @Put()
  add(@Body() user: CreateUserDto, @Res() res: Response) {
    (user as User).id = Math.floor(Math.random() * 999999);
    UsersController._cache.push(user as User);

    delete user.password;

    res.status(HttpStatus.CREATED).send(user);
  }

  @ApiOkResponse({
    description: 'User deleted',
    type: CreateCatDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Delete(':id')
  logoff(@Param('id') id: string, @Res() res: Response) {
    const index = UsersController._cache.findIndex((value) => value.id === +id);

    console.log(index);
    if (index >= 0) {
      res
        .status(HttpStatus.OK)
        .send(UsersController._cache.splice(index, 1)[0]);
    } else {
      res && res.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
