// function greeter(person: string) {
//     return 'hello, ' + person;
// }


// let user = [1, 2, 3];

// document.body.innerHTML = greeter(user);


// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return 'hellp' + person.firstName + person.lastName;
// }

// let user = { firstName: 'gao', lastName: 'kai' };
// document.body.innerHTML = greeter(user)

class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");


type bieName = {
    id: string;
    firstName?: string;
}


function biemingFuc(): bieName {
    let obj = {
        id: 'aa',
        firstName: 'zhihu'
    };

    return obj;
}

let bieTest = biemingFuc();

console.log(bieTest);
document.body.innerHTML = greeter(user);

