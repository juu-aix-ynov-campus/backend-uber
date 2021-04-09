import { ApiProperty } from '@nestjs/swagger';

export default class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  role: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  mail: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  siret: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  vehicule_registration: string;

  @ApiProperty()
  vehicule_class: string;
}
