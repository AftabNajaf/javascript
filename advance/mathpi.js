// const value=Object.getOwnPropertyDescriptor(Math,'PI')
// // console.log(Math.PI);
// // Math.PI=5;
// // console.log(Math.PI);
// console.log(value);

const chai={
    name:'aftab',
    phone:'03045514110',
    isAvailable:true,
//     testFn:function(){
// console.log('testing function');
//     }
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
for (const [key,value] of Object.entries(chai)) {
 if(typeof value!=='function'){
    console.log(`key is:${key} and the value is: ${value}`);
 }else{
    console.log('function is avaialable');
 }
}