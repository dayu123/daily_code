console.log('随机洗牌算法');

Array.prototype.shuffle = function () {
    console.log(this);
    console.log('add func by gk');

    let ary = this;

    let len = ary.length;
    let len1 = ary.length;

    let j = 0;

    while (len > 0) {
        let i = Math.floor(Math.random() * (len1 - 1));
        console.log('xunhuan', j, ary[len - 1], ary[i]);
        [ary[len - 1], ary[i]] = [ary[i], ary[len - 1]]
        len--;
        j++;
    }

}

// Array.prototype.shuffle = function () {
//     var array = this;
//     var m = array.length,
//         t, i;
//     while (m) {
//         i = Math.floor(Math.random() * m--);
//         // t = array[m];
//         // array[m] = array[i];
//         // array[i] = t;

//         [array[m], array[i]] = [array[i], array[m]];

//     }

//     return array;

// }



var posAry = [];
for (let index = 1; index < 31; index++) {
    posAry.push(index);
}

posAry.shuffle();

console.log(posAry);
posAry.sort((a, b) => {
    return a - b;
});
// console.log(posAry);

var obj1 = { x: 1000, y: 209, per: 39.4 };
for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        console.log('key', key);
        const element = obj1[key];
        console.log('element', element);

    }
}


