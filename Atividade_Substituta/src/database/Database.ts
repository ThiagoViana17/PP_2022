import { User } from '../User'

class Database {
    private static instance: Database;
    users:User[] = []
    private constructor(){}

    public static getInstance(): Database {
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance
    }

    public save(user:User) {
        this.users.push(user)
    }

    public showUsers(){
        console.table(this.users, ["name", "exercise", "daysToExercise"])
    }
}

export const database:Database = Database.getInstance();