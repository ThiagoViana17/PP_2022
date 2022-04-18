import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/database_config';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config(__dirname)),
    CardsModule,
    TransactionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
