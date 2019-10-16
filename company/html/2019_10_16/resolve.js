console.log('hello resolve.js');



function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('aa');
            resolve('bb');
        }, 200);
    });
}

func1().then((data) => {
    console.log('then', data);
})