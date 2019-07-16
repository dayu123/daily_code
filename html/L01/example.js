var num = 3;
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));

console.log(num.toFixed(2));
console.log(num.toString(16));
console.log(num.toString(16));

var num1 = 34.5;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));
































// function callSomeFunc(callBack, someArguments) {
// 	return callBack(someArguments);
// }

// function add(obj) {
// 	console.log('add', arguments, '-------', arguments.callee.caller);
// 	return obj.a + obj.b;
// }

// console.log(callSomeFunc(add, { a: 5, b: 6 }));


// var ary1 = [3, 1, 234, 56, 6];
// console.log(ary1.sort((a, b) => {
// 	return b - a;
// }));


// function sayName(a, bc, d) {
// 	console.log('length', arguments.length);
// 	console.log(arguments.callee.lenght);
// }

// console.log(sayName.length);


// window.name = 'cuiyun';
// person = { name: 'gk' };

// function applyFunc(a, c) {
// 	console.log(arguments.callee.caller, 'add', a + c);
// }

// applyFunc();

// applyFunc.call(person);
// applyFunc.apply(person);

// var apply1 = applyFunc.bind(person);
// apply1();


// function applyFunc1(aa, bb) {
// 	return applyFunc.apply(this, arguments);
// }

// applyFunc1(34, 34);

// function applyFunc2(cc, dd) {
// 	return applyFunc.call(this, 23, 23);
// }

// applyFunc2();




// applyFunc.apply(this, [1, 2])();
// applyFunc.call(this, 3, 5)();


































// //------------------------   slice ----------------------
// var colors = ['red', 'green', 'yello'];
// var colors2 = colors.concat('cyan', ['white', 'black'])
// console.log('colors', colors);
// console.log('colors2', colors2);

// var colors3 = colors2.slice(1);
// var colors4 = colors2.slice(1, 5);
// var colors5 = colors2.slice(-9);

// console.log('colors3', colors3);
// console.log(' colors4', colors4);
// console.log(' colors5', colors5);


// //-----------------------   splice ---------------------

// var numAry = [1, 2, 3];
// var numAry2 = numAry.concat(4, 5, 6);

// console.log('numAry', numAry);
// console.log('numAry2', numAry2);

// var numAry3 = numAry2.splice(0, 1);
// console.log('numAry2', numAry2);
// console.log('numAry3', numAry3);

// var numAry4 = numAry2.splice(0, 2, 7, 8, 9);
// console.log('numAry2', numAry2);
// console.log('numAry4', numAry4);

// // ------------------------  indexOf lastIndexOf ----------------------------
// console.log('indexOf', colors2.indexOf('white'));
// console.log('lastIndexOf', numAry2.lastIndexOf(9));

// // -------------------   迭代方法  -------------------------------------

// console.log('every', numAry2.every(function (a) { /*console.log(a);*/ return a > 4 }));
// console.log('some', numAry2.some(function (a) { console.log(a); return a > 8 }));
// console.log('filter', numAry2.filter(function (a) { /*console.log(a);*/ return a > 4 }));
// // console.log('foreach', numAry2.forEach(function (a) { /*console.log(a);*/  a - 4 }));
// console.log('map', numAry2.map(function (a) { /*console.log(a);*/ return a - 1 }));

// /// --------------------  归并方法  ----------------------------------
// var objAry = [{ a: 1 }, { a: 2 }, { a: 3 }]

// console.log('reduce', objAry.map((item) => {
// 	return item.a += 2;
// }).reduce(function () {
// 	console.log(arguments);
// 	return arguments[0] + arguments[1];

// }));




// function getObj() {
// 	var p = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('学习 Promise');
// 			resolve('加油');
// 		}, 2000);
// 	});
// 	return p;
// }

// getObj().then((data) => {
// 	console.log(data);
// }).then((data) => {
// 	console.log(data);
// 	console.log(typeof (data));
// });

// var intA = 0;
// var intB = 0;


// do {
// 	intA *= 3;
// 	console.log('intA', intA);
// } while (intA <= 33);


// for (var index = 0; index < 10; index++) {
// 	for (var index1 = 0; index1 < 10; index1++) {
// 		intB++;
// 		console.log('intB', intB);
// 		break;
// 	}
// 	intA++;
// 	console.log('intA', intA);

// }

// function sayeHi(a, b, c, d) {
// 	console.log('sayeHi', arguments.length);
// }

// function sayeHi1(a, b, c, d) {
// 	console.log('sayeHi1', arguments.length);
// }

// function sayeHi2(a, b, c, d) {
// 	console.log('sayeHi2', arguments.length);
// }




// sayeHi(1);
// sayeHi1(2);
// sayeHi2(3);