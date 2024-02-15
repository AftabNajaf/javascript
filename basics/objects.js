// singleton
// only created with constructor
// normally we used literals object

const myKey=Symbol('key11');
const userObj={
    name:'aftab',
    age:'26',
    [myKey]:'testKey',
    email:'aftab@gmail.com',
    'isPakistani':'yes',
    isLogin:true,
    lastLoin:['Monday','Friday','Saturday']
}

// userObj.email='test@gmail.com'
// Object.freeze(userObj)
// userObj.email='afi@gmail.com'

// console.log(userObj.name);
// console.log(userObj['email']);
// console.log(userObj['isPakistani']);
// console.log(typeof userObj[myKey]);
// console.log(userObj);

//functio add in object
userObj.testFun=function(){
    console.log('hello world');
}
userObj.testFun2=function(){
    console.log(`hello,${this.name}`);
}
// console.log(userObj.testFun());
// console.log(userObj.testFun2());


//singltorn object
// const tinder=new Object();


const tinder={}
tinder.name='aftab',
tinder.age=26,
tinder.email='aftab@gmail.com'

const fbUser={
    email:'fb@gmail.com',
    names:{
     subName:{
 firstname:'afi1',
 lname:'af2'
     }
    }
}
// console.log(fbUser.names.subName.firstname);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={4:'e',5:'f'}
// const obj4={obj1,obj2,obj3}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const users=[
    {
        id:1,
        name:'aftab'
    },
    {
id:2,
name:'najaf'
    },
    {
        id:3,
        name:'sial'
    }
]
// console.log(users[2].id)
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('age'));

const curse={
    cName:'tech',
    price:'999',
    cInstructor:'aftab'
}

const {cInstructor:ci}=curse
console.log(ci);