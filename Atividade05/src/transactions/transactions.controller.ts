import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post(':id')
  create(@Param('id') id:string ,@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(+id, createTransactionDto);
  }
}
