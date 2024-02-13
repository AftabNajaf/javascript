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
console.log(id==sId)
console.table([id,sId])

const myFun=function(){
    console.log('function');

}
console.log(typeof myFun);