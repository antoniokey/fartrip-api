import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtStrategyGuard } from '../auth/strategies/jwt/jwt.strategy.guard';

import { AccountService } from './account.service';

@Controller('accounts')
@UseGuards(JwtStrategyGuard)
export class UsersController {
  constructor(
    private readonly _accountService: AccountService,
  ) {
  }

  @Get()
  public getAccount(): Promise<any> {
    return this._accountService.getAccounts();
  }
}
