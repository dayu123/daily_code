console.log('reverseString');

var str = 'abcdef';
console.log(str.split('').reverse().join(''));


//混合
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != 'function') {
        console.log('add func to protoType');
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }

}


var per1 = new Person('dy', 15, 'cx');

var per2 = new Person('wd', 33, 'chef');

per1.sayName();
per2.sayName();

console.log(' -------------------------------------------------------------- ')

//寄生
function SpecialArray() {
    var values = new Array();
    values.push.apply(values, arguments);

    values.toPipedString = function () {
        return this.join('|');
    }

    return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
alert(colors.toPipedString());





//稳妥

function Book(name, age, job) {
    var o = new Object();
    o.sayName = function () {
        console.log('wen tuo ', name);
    }

    o.getName = function () {
        return name;
    }
    return o;

}


book1 = new Book('xhs', 100, 'fire');
book1.sayName();








