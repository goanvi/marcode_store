import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

export class Product extends Model {
  @Column
  identifier: number;
  @Column
  name: string;
  @Column
  description: string;
  @Column
  img: string;
  @Column(DataType.FLOAT)
  price: number;
  @Column
  count: number;
  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
