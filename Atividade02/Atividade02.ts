class Student{
    name:string;
    age:number;
    course: string;

    constructor(name:string, age:number, course:string){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    changeCourse(newCourse:string){
        this.course = newCourse;
    }
}

class Animal{
    name:string;
    weight:number;
    age:number;

    constructor(name:string, weight:number, age:number){
        this.name = name;
        this.weight = weight;
        this.age = age;
    }

    changeAge(newAge:number){
        this.age = newAge;
    }
}

class Food{
    name:string;
    price:number;
    amountOfPeople:number;

    constructor(name:string, price:number, amountOfPeople:number){
        this.name = name;
        this.price = price;
        this.amountOfPeople = amountOfPeople;
    }

    changePrice(newPrice:number){
        this.price = newPrice;
    }
}
console.log("Funcionou");
