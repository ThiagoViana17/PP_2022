class Student{
    private name:string;
    private age:number;
    private course:string;

    constructor(name:string, age:number, course:string){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    //Name
    public getName():String{
        return this.name;
    }
    public setName(name:string): void{
        this.name = name;
    }
    //Age
    public getAge():Number{
        return this.age;
    }
    public setAge(age:number): void{
        this.age = age;
    }
    //Course
    public getCourse():String{
        return this.course;
    }
    public setCourse(course:string): void{
        this.course = course;
    }

    changeCourse(newCourse:string){
        this.course = newCourse;
    }
}

class Animal{
    private name:string;
    private weight:number;
    private age:number;

    constructor(name:string, weight:number, age:number){
        this.name = name;
        this.weight = weight;
        this.age = age;
    }
    //Name
    public getName():String{
        return this.name;
    }
    public setName(name:string): void{
        this.name = name;
    }
    //Weight
    public getWeight():Number{
        return this.weight;
    }
    public setWeight(weight:number): void{
        this.weight = weight;
    }
    //Age
    public getAge():Number{
        return this.age;
    }
    public setAge(age:number): void{
        this.age = age;
    }

    changeAge(newAge:number){
        this.age = newAge;
    }
}

class Food{
    private name:string;
    private price:number;
    private amountOfPeople:number;

    constructor(name:string, price:number, amountOfPeople:number){
        this.name = name;
        this.price = price;
        this.amountOfPeople = amountOfPeople;
    }
    //Name
    public getName():String{
        return this.name;
    }
    public setName(name:string): void{
        this.name = name;
    }
    //Price
    public getPrice():Number{
        return this.price;
    }
    public setPrice(price:number): void{
        this.price = price;
    }
    //AmountOfPeople
    public getAmountOfPeople():Number{
        return this.amountOfPeople;
    }
    public setAmountOfPeople(amountOfPeople:number): void{
        this.amountOfPeople = amountOfPeople;
    }

    changePrice(newPrice:number){
        this.price = newPrice;
    }
}

class teacher{
    private name:string;
    private age:number;
    private course:string;

    constructor(name:string, age:number, course:string){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    //Name
    public getName():String{
        return this.name;
    }
    public setName(name:string): void{
        this.name = name;
    }
    //Age
    public getAge():Number{
        return this.age;
    }
    public setAge(age:number): void{
        this.age = age;
    }
    //Course
    public getCourse():String{
        return this.course;
    }
    public setCourse(course:string): void{
        this.course = course;
    }

    changeCourse(newCourse:string){
        this.course = newCourse;
    }
}

class car{
    private name:string;
    private year:number;
    private plate:string;

    constructor(name:string, year:number, plate:string){
        this.name = name;
        this.year = year;
        this.plate = plate;
    }
    //Name
    public getName():String{
        return this.name;
    }
    public setName(name:string): void{
        this.name = name;
    }
    //Year
    public getYear():Number{
        return this.year;
    }
    public setYear(year:number): void{
        this.year = year;
    }
    //Plate
    public getPlate():String{
        return this.plate;
    }
    public setPlate(plate:string): void{
        this.plate = plate;
    }

    changePlate(newPlate:string){
        this.plate = newPlate;

    }

}

Class Person extends Student{
    private nicknamename:string;
    private height:string;
    private cpf:string;

    constructor(name:string, age:number, course:string, nicknamename:string, height:string, cpf:string){
    super(name, age, course);
        this.nickname = nickname;
        this.height = height;
        this.cpf = cpf;
    }
    //Nickname
    getNickname(){
        return this.nickname;
    }
    setNickname(nickname:string){
        this.nickname = nickname;
    }
    //Height
    getHeight(){
        return this.height;
    }
    setAge(age:string){
        this.height = height;
    }
    //cpf
    getCpf(){
        return this.cpf;
    }
    setCpf(cpf:string){
        this.cpf = cpf;
    }

}
    
public walk(): void{
    console.log("person study");
}
const person = new person('name:Thiago, age:22, course:Computação, nicknamename:Viana, height:1,72, cpf:00.000.000-00');
person.walk();
}

