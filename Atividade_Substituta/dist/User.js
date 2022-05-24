"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Database_1 = require("./database/Database");
class User {
    constructor(name, exercise) {
        this.name = name;
        this.physicalExercise = exercise;
        this.exercise = exercise.nameOfExercise;
        this.daysToExercise = exercise.getDaysOfWeek();
        this.save(this);
    }
    save(user) {
        Database_1.database.save(user);
    }
}
exports.User = User;
