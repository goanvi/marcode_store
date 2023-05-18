import { Column, DataType, Model } from 'sequelize-typescript';

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
}
