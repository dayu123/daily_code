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
            // if (numyear > 2004) {
            //     book._year = numyear;
            //     let dif = numyear - 2004;
            //     console.log('numyear - 2004', dif)

            //     console.log('book.edition1', book.edition)
            //     book.edition += (dif);
            //     console.log('book.edition2', book.edition)
            //     book.edition++;
            //     console.log('book.edition3', book.edition)
            // }
        }

    }


});



