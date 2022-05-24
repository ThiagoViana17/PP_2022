import { PhysicalExercise } from './PhysicalExercise'
import { database } from './database/Database'

export class User{
    public name:string;
    public physicalExercise:PhysicalExercise;
    public exercise:string;
    public daysToExercise: string[]

    constructor(name:string, exercise:PhysicalExercise){
        this.name = name;
        this.physicalExercise = exercise;
        this.exercise = exercise.nameOfExercise
        this.daysToExercise = exercise.getDaysOfWeek()
        this.save(this)
    }

    save(user: User):void{
        database.save(user)
    }
}