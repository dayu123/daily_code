console.log('about this');

var name = 'The window';

var object1 = {
    name: 'My object',

    getNameFunc: function () {
        return function () {
            return this.name;
        }
    },

    getNameFunc1: () => {
        return this.name;
    },

    getNameFunc2: function () {
        return this.name;
    },

}

// alert(object1.getNameFunc()());
//alert(object1.getNameFunc1());
console.log(object1.getNameFunc1.call(object1));
console.log(object1.getNameFunc2());
console.log(typeof object1.getNameFunc1);
console.log(typeof object1.getNameFunc());

console.log(' -------------------------------------------------  ');
function m(method) {
    var a = {};
    a.m = method;
    method();
    a.m();
}

m(function () { console.log(this) })