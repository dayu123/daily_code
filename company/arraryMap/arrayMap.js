console.log('nihaoya ary map');

var companyAry = Mock.mock({
    'company|1-5': [{
        'name': '@cname',
        'ceo|+1': 100018,
    }],

})
console.log(JSON.stringify(companyAry, null, 4));
console.log('  -----------------------------------------------------  ');
var ceoAry = _.map(companyAry.company, (o) => {
    return o.ceo;
})
console.log(JSON.stringify(ceoAry, null, 4));

console.log('  -----------------------------------------------------  ');


var filterAry = _.filter(companyAry.company, (o1) => {
    return o1.ceo != '100018'
})
console.log(JSON.stringify(filterAry, null, 4));

console.log('  -----------------------------------------------------  ');


//闭包
const cache = (function () {
    const store = {};
    return {
        get(key) {
            return store[key];
        },

        set(key, val) {
            store[key] = val
        }

    }
})()

console.log(cache);
cache.set('a', 1);
var aval = cache.get('a');
console.log(aval);

//函数柯里化

console.log('  --------------------------      switch     ---------------------------  ');


var flagg = 3;
switch (flagg) {
    case 3:
        return 3;
        break;



}















