// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// console.log(null<0);
// console.log(null>0);
// console.log(null>=0);
// console.log(null<=0);

// console.log(undefined<0);
// console.log(undefined>0);
// console.log(undefined>=0);
// console.log(undefined<=0);

// console.log('2'===2);

const id=Symbol('123');
const sId=Symbol('123');
// console.log(id==sId)
// console.table([id,sId])

const myFun=function(){
    console.log('function');

}
// console.log(typeof myFun);

let youtubeName='aftab123';
let anotherName=youtubeName;
anotherName='afi123';
// console.log(anotherName);
// console.log(youtubeName);

let userOne={
    email:'afatb@gmail',
    id:'1234'
}
let userTwo=userOne;
userTwo.email='afi@google.com'
console.log(userTwo.email);
console.log(userOne.email);