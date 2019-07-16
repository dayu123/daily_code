console.log('nihao');
var obj1 = {
    _age: 19
}

Object.defineProperty(obj1, 'age', {
    set: (newAge) => {
        obj1._age = newAge;
        console.log('set age');
    },

    get: () => {
        console.log('get age');
        return obj1._age;
    }

})

//gkwd

var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004,
    },

    edition: {
        value: 1,
    },

    year: {
        get: function () {
            console.log('get year')
            return book._year;
        },

        set: function (numyear) {
            console.log('set year')
            book._year = numyear;
        }

    }


});





// "use strict"
var person = {};
Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'John',
})

var person1 = {};
person1.name = 'nihao';

console.log('1', person.name);
delete person.name;
console.log('2', person.name);


var obj = {};
Object.defineProperty(obj, 'a', {
    // value: 'a1',
    set: function () {
        return 'a2'
    }
});