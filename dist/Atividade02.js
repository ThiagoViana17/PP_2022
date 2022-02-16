"use strict";
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    changeCourse(newCourse) {
        this.course = newCourse;
    }
}
class Animal {
    constructor(name, weight, age) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
    changeAge(newAge) {
        this.age = newAge;
    }
}
class Food {
    constructor(name, price, amountOfPeople) {
        this.name = name;
        this.price = price;
        this.amountOfPeople = amountOfPeople;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
}
console.log("Funcionou");
