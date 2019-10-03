class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    tellMyName(){
            return console.log(`I am ${this.name}`);
    }

    tellMyAge () {
            return console.log(`I am ${this.age} years old`);
    }
}
const john = new Person ("John",40);
const mary = new Person ("Mary",35);

