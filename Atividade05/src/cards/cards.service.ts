import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { generateCardNumber } from 'src/utils/generateCardNumber';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card) private cardRepository:Repository<Card>,
    private userService:UsersService
  ){}

  async create(createCardDto: CreateCardDto) {
    const {...user} = await this.userService.findOne(createCardDto.userId);
    
    if(!user) return new Error('User not found');

    const cardNumber = generateCardNumber(); 
    const cvv = Number(Math.floor(Math.random() * (999 - 100)) +100);

    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const expirationDate = new Date(year+1, month+1, day).toLocaleDateString();
    
    const card = await this.cardRepository.save({
      cardNumber: Number(cardNumber),
      cvv,
      expirationDate,
      user
    });

    return card;
  }

  async findAll() {
    const cards = await this.cardRepository
    .createQueryBuilder("card")
    .select(["card.cardNumber", "card.cvv", "card.expirationDate", "user.name", "user.balance"])
    .leftJoin("card.user", "user")
    .getMany();

    return cards;
  }

  async findOne(id: number) {
    const card = await this.cardRepository
    .createQueryBuilder("card")
    .select(["card.cardNumber", "card.cvv", "card.expirationDate", "user.name", "user.balance"])
    .where({id})
    .leftJoin("card.user", "user")
    .getOne();

    return card;
  }

  async update(id: number) {
    let card = await this.cardRepository.findOne({where: {id}});

    if(!card) return new Error('Card not found');

    const cardNumber = generateCardNumber(); 
    const cvv = Number(Math.floor(Math.random() * (999 - 100)) +100);

    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const expirationDate = new Date(year+1, month+1, day).toLocaleDateString();
    
    card.cardNumber = cardNumber;
    card.cvv = cvv;
    card.expirationDate = expirationDate;

    await this.cardRepository.save(card)

    return card;
  }

  async remove(id: number) {
    const card = await this.cardRepository.findOne({
      where: {id}
    })

    await this.cardRepository.remove(card);

    return card;
  }
}
