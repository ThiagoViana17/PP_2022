import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    UsersModule,
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {}
