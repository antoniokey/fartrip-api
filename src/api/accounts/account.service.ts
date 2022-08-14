import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Account } from 'src/db/models/account';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account)
    private readonly _accountModel: typeof Account,
  ) {
  }

  public getAccounts(): Promise<any[]> {
    return this._accountModel.findAll({
      attributes: {
        exclude: ['password'],
      },
      include: [
        {
          association: this._accountModel.associations.role,
          attributes: ['role'],
        },
      ],
    });
  }

  public getAccount(username: string): Promise<any> {
    return this._accountModel.findOne({
      where: {
        email: username,
      },
      include: [
        {
          association: this._accountModel.associations.role,
          attributes: ['role'],
        },
      ],
    });
  }
}
