console.log("mock");
// 使用 Mock
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4));
var posAry = [];
(function () {
    for (let index = 1; index < 31; index++) {
        posAry.push(index);
    }
})()

console.log('posAry', posAry);

var data1 = Mock.mock({
    'positions': {
        'ferrari|1': posAry,
    }
})

console.log(JSON.stringify(data1, null, 4));
