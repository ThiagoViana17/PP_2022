import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @Column()
    type: string;

    @Column()
    value:number;

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=> User, user => user.transactions)
    user: User;
}
