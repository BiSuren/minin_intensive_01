console.dir(Object) 

const person = {
    name: 'Vladilen',
    age: 28,
    job: 'Result School',
    hobbies: ['Skii', 'Gym', 'Cars'],
    info:{
        hasWife: false,
        weight: 76
    },
    toRemove: Date.now(),
    sayHello(){
        console.log('Hello')
    }
}

const jobKey = 'job'

console.log('Name: ', person.name)
console.log('Weight: ', person['info']['weight'])
console.log('Job: ', person[jobKey])

delete person.toRemove
person.sayHello()

class Person{
    constructor(name, personAge) {
        this.name = name
        this.age =personAge   
    }

    sayHello() {
        console.log(this.name + ' say hello!')
    }
    print() {
        console.log(JSON.stringify(this))
    }
}

// const person2 = new Person("Lena", 36);
// const person3 = new Person("Igor", 56);

// console.log(person2, person3);

// function printO(object = {}) {

//     for (let key in object){
//         if(typeof object[key] !=key)
//     }

// }


console.log(Object.keys(object)).forEach()