import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './api/auth/auth.module';
import { AccountModule } from './api/accounts/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/db.module';
import devEvnironment from './environments/dev.evnironment';

@Module({
  imports: [
    AuthModule,
    AccountModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [devEvnironment],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
