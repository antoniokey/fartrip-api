import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'roles' })
export class Role extends Model {
  @PrimaryKey
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;
}
