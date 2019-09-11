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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
function biemingFuc() {
    var obj = {
        id: 'aa',
        firstName: 'zhihu'
    };
    return obj;
}
var bieTest = biemingFuc();
console.log(bieTest);
document.body.innerHTML = greeter(user);
