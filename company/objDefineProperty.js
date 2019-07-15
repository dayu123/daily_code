console.log('nihao');
var  obj1 = {
    _age:19
}

Object.defineProperty(obj1,'age',{
    set : (newAge)=>{
        obj1._age = newAge;
        console.log('set age'); 
    },

    get :()=>{
        console.log('get age');
        return obj1._age;
    }

})

//gkwd
//gkwd
