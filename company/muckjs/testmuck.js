var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))

// var data1 = Mock.mock({
//     'gkwd|2': 'nihaoya'
// });

// console.log(JSON.stringify(data1, null, 4));

// var data2 = Mock.mock({
//     'dygg|123.10': 11
// })

var obj = { 'aa': '11', 'bb': '22', 'cc': '33', 'dd': '44' };
var data3 = Mock.mock({
    'person|3': [{
        'name': '@cname',
        'id|+1': 88,
        'age|18-28': 0,
        'birthday': '@date("yyyy-MM-dd")',
        'city': '@city(true)',
        'color': "@color",
        'isMale|1': true,
        'isFat|1-2': true,
        'fromObj|2': obj,
        'fromObj2|1-3': obj,
        'brother|1': ['jack', 'jim'],
        'sister|+1': ['jack', 'jim', 'lily'],
        'friends|2': ['jack', 'jim']
    }, {
        'gf': '@cname'
    }]

})

var data4 = Mock.mock({
    'propInfo|1-3': [{
        'prop_id|220000-220010': 3,
        'cd_time|3000-5000': 1,
        'skill_id|172200-172210': 1,
        'use_count|1-10': 33,
        'email': '@email',
    }]
})


// console.log(JSON.stringify(data4, null, 4));

console.log('-------------------------------------------------------------------------------------');

var actionObj = ['kill', 'monster', 'army', 'task', 'role']
var data5 = Mock.mock({
    'res|1-3': [{
        'action|1': actionObj,
        'check_obj': '',
        'config_prize|1-3': [{ 'itemId|100-200': 1, 'itemNum|5-10': 1 }],
        'expired_time': '@date("yyyy-MM-dd h:m:s")',
        'name': '@name',
        'adress': '@area',
        'value': { 'monster_num|1-100': 1 },
        'word': '@word',
        'img': '@image',
    }]
})

console.log(JSON.stringify(data5, null, 4));
