import { Card } from "src/cards/entities/card.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    name: string;

    @Column()
    password: string;

    @Column({default: 0.0})
    balance: number;

    @OneToOne(()=>Card, card => card.user)
    card: Card

    @OneToMany(()=> Transaction, transaction => transaction.user)
    transactions: Transaction[];
}
