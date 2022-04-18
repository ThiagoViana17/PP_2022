import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where:{ email:createUserDto.email }
    })
    
    if(user) return user
 
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository
    .createQueryBuilder('user')
    .where({id})
    .leftJoinAndSelect('user.card', 'card')
    .leftJoinAndSelect('user.transactions', 'transaction')
    .getOne()
    
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.userRepository.findOne({
      where: {id}
    });

    user.email = updateUserDto.email;
    user.name = updateUserDto.name;
    user.password = updateUserDto.password;

    await this.userRepository.save(user)
    
    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id }
    });

    await this.userRepository.remove(user);
    
    return user;
  }
}
