import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { LoginController } from './login.controller';

@Module({
  imports: [],
  controllers: [UsersController, LoginController],
  providers: [AppService],
})
export class AppModule {}
