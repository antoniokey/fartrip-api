import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Account } from 'src/db/models/account';

import { UsersController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [SequelizeModule.forFeature([Account])],
  controllers: [UsersController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
