class Person{
    constructor(name,yolo){
        this.name = name;
        this.yolo = yolo;
    }
    tellMyName(){
            return console.log(`I am ${this.name}`);
    }

    tellMyAge () {
            return console.log(`I am ${this.yolo} years old`);
    }
}
const john = new Person ("John",40);
const mary = new Person ("Mary",35);
