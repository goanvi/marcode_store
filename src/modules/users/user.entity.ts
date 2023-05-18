import { Column, HasMany, Model } from 'sequelize-typescript';
import { Product } from '../products/product.entity';

export class User extends Model {
  @Column
  userName: string;

  @Column
  password: string;

  @HasMany(() => Product)
  products: Product[];
}
