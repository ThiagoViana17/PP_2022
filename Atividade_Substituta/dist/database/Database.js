"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
class Database {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    save(user) {
        this.users.push(user);
    }
    showUsers() {
        console.table(this.users, ["name", "exercise", "daysToExercise"]);
    }
}
exports.database = Database.getInstance();
