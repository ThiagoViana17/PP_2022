import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private transactionRepository:Repository<Transaction>,
    private userService:UsersService
  ){}

  async create(id: number,createTransactionDto: CreateTransactionDto) {
    let user =  await this.userService.updateBalance(id, createTransactionDto.value);
    
    if(!user) throw new Error('User not found');

    const transaction = await this.transactionRepository.save({
      description: createTransactionDto.description,
      type: createTransactionDto.type,
      value: createTransactionDto.value,
      user
    })

    return transaction;
  }

}
