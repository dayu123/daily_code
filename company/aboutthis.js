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

    getNameFunc3: function () {
        var that = this;
        return function () {
            return that.name;
        }();
    },

}

<<<<<<< HEAD
console.log('0------', object1.getNameFunc()());
console.log('0---1---', object1.getNameFunc().call(object1));
console.log('1------', object1.getNameFunc1.call(object1));
console.log('2------', object1.getNameFunc2());
console.log('3------', object1.getNameFunc3());

=======
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
>>>>>>> fd19abc9b5e75eb45e7db73752930af8b51d87f7
