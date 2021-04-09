import { ApiProperty } from '@nestjs/swagger';
import CreateUserDto from './CreateUserDto';

export default class User extends CreateUserDto{
  @ApiProperty()
  id: number;
}
