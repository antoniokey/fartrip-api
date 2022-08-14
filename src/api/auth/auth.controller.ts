import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalStrategyGuard } from './strategies/local/local.strategy.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _authService: AuthService,
  ) {
  }

  @UseGuards(LocalStrategyGuard)
  @Post('token')
  public getAuthenticationData(@Req() req: any): Promise<any> {
    return this._authService.getAuthenticationData(req.user);
  }
}
