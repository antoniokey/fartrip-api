import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Role } from './role';

@Table({ tableName: 'accounts' })
export class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({
    field: 'role_id',
    type: DataType.NUMBER,
    allowNull: false,
  })
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.BLOB,
    allowNull: true,
  })
  logo: string;

  @CreatedAt
  @Column({
    field: 'created_at',
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: DataType.STRING,
    allowNull: false,
  })
  updatedAt: string;

  @DeletedAt
  @Column({
    field: 'deleted_at',
    type: DataType.STRING,
    allowNull: false,
  })
  deletedAt: string;
}
