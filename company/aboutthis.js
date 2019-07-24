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

console.log('0------', object1.getNameFunc()());
console.log('0---1---', object1.getNameFunc().call(object1));
console.log('1------', object1.getNameFunc1.call(object1));
console.log('2------', object1.getNameFunc2());
console.log('3------', object1.getNameFunc3());

