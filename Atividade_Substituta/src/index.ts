import { Bodybuilding, Boxing, Judo, Swimming } from './PhysicalExercise';
import { database } from './database/Database'
import { User } from './User';

const user1 = new User('Ana', new Swimming);
const user2 = new User('Bernardo', new Boxing);
const user3 = new User('João', new Judo);
const user4 = new User('Carolina', new Bodybuilding);
const user5 = new User('Daniel', new Swimming);
const user6 = new User('Eduardo', new Judo);

console.log(database.showUsers())