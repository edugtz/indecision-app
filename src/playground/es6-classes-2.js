class Person {
    constructor(name, age = 0) {
        this.name = name || 'Default';
        this.age = age;
    }

    getGreeting() {
        return `Hi, my name is ${this.name}!`;
    }

    getDescription() {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        // return `Hi, my name is ${this.name}, I'm ${this.age} years old
        //     and I have a major in ${this.major}`;
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` and their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` and I'm visiting from Guadalajara`;
        }

        return greeting;
    }
}

const me = new Student('Eduardo Gutierrez', null, 'Computer Engineering');
const me2 = new Person('Eduardo Gutierrez', null, 'Computer Engineering');
const me3 = new Traveler('Jorge Perez', 23, 'Guadalajara');
const anotherPerson = new Student(null, 20);
// console.log(me.getGreeting());
console.log(me.getDescription());
// console.log(anotherPerson.getGreeting());
// console.log(anotherPerson.getDescription());
console.log(me.hasMajor());
console.log(me2.getDescription());
console.log(me3.getGreeting());
