import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { compareSync } from 'bcrypt';

import { AccountService } from '../accounts/account.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _accountService: AccountService,
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
  ) {
  }

  public async validateAccount(
    username: string,
    password: string,
  ): Promise<any> {
    const account = await this._accountService.getAccount(username);

    if (account && compareSync(password, account.password)) {
      const { password, ...userData } = account;

      return userData;
    }

    return account;
  }

  public async getAuthenticationData(account: any): Promise<any> {
    return {
      access_token: this._generateAccessToken(),
      refresh_token: this._generateRefreshToken(),
      token_type: 'bearer',
      role: account.role.role,
      expires_in: this._getAccessTokenExpiration(),
      email: account.email,
      id: account.id,
    };
  }

  private _generateAccessToken(): any {
    return this._jwtService.sign(
      {
        exp: Math.floor(Date.now() / 1000) + (10 * 60),
        sub: 'fartrip',
      },
      { secret: this._configService.get<string>('jwtSecret') },
    );
  }

  private _generateRefreshToken(): any {
    return this._jwtService.sign(
      { exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) },
      { secret: this._configService.get<string>('jwtSecret') },
    );
  }

  private _getAccessTokenExpiration(): any {
    return 10 * 60;
  }
}
