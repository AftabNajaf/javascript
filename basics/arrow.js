const user={
     username:'aftab',
     price:99,
     wlcmmesg:function(){
     console.log(`${this.username},welcom to website`);
     console.log(this);
     }

}
// user.wlcmmesg();
// user.username='afi'
// user.wlcmmesg();
// console.log(this)

// function one (){
//     let user='aftab'
// console.log(this.user);
// }
// one()

// const one=function(){
//     let user='sial'
//     console.log(this.user);
// }


// const one=()=>{
//     let user='sial'
//     console.log(this);
// }

// one()

// add=(num1,num2)=>{
// return num1+num2;
// }

// add=(num1,num2)=>num1+num2;
add=(num1,num2)=>(num1+num2)
console.log(add(29,3));