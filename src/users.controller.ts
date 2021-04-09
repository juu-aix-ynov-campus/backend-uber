import { Body, Controller, Delete, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import User from './models/dto/UserDto';
import { CreateCatDto } from './models/dto/CreateCatDto';
import { Response } from 'express';

@ApiTags('users')
@Controller('users')
export class UsersController {
  public static _cache: User[] = [
    {
      name: 'Julien',
      lastname: 'Catania',
      city: 'Marseille',
      id: 1337,
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

  @Put()
  @ApiCreatedResponse({

  })
  add(@Body() user: User) {
    UsersController._cache.push(user);
  }

  @ApiOkResponse({
    description: 'Delete a user',
    type: CreateCatDto,
  })
  @ApiNotFoundResponse({
    description: 'User not logged',
  })
  @Delete(':id')
  logoff(@Param('id') id: number, @Res() res: Response) {
    const index = UsersController._cache.findIndex((value) => value.id === id);

    if (index >= 0) {
      res && res.status(HttpStatus.OK).send();
    } else {
      res && res.status(HttpStatus.NOT_FOUND).send();
    }
  }
}
