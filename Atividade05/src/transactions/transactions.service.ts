import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private transactionRepository:Repository<Transaction>,
    private userService:UsersService
  ){}

  async create(id: number,createTransactionDto: CreateTransactionDto) {
    let user = await this.userService.findOne(id);

    if(!user) throw new Error('User not found');

    createTransactionDto.type == 'incoming'?
    user.balance += createTransactionDto.value:
    user.balance -= createTransactionDto.value;

    await this.userService.update(user.id, {
      balance: user.balance,
      email: user.email,
      name: user.name,
      password: user.password
    });

    const transaction = await this.transactionRepository.save({
      description: createTransactionDto.description,
      type: createTransactionDto.type,
      value: createTransactionDto.value,
      user
    })

    return transaction;
  }

}
