import { ApiProperty } from '@nestjs/swagger';

export default class LoginDto {
  @ApiProperty()
  mail: string;

  @ApiProperty()
  password: string;
}
