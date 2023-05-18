import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async add(userDTO: UserDto): Promise<User> {
    return await this.userModel.create<User>({
      userName: userDTO.userName,
      password: userDTO.password,
    });
  }

  async getUser(userId: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        userId,
      },
    });
  }

  async remove(userId: string) {
    const user = await this.getUser(userId);
    await user.destroy();
  }
}
