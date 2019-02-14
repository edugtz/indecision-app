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

const me = new Person('Eduardo Gutierrez');
const anotherPerson = new Person(null, 20);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(anotherPerson.getGreeting());
console.log(anotherPerson.getDescription());