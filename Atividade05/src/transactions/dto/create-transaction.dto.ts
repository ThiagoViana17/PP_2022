export class CreateTransactionDto {
    description:string;
    value: number;
    type: 'incoming' | 'outcoming'
}
