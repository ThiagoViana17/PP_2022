import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardNumber: number;

    @Column()
    cvv: number;

    @Column()
    expirationDate: string

    @OneToOne(() => User, user => user.card, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User
}
