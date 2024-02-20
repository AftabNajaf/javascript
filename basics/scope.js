
let a=300;
// if(true){
//     let a=30;
//     const b=40;
// console.log('inner',a);
// }

// console.log(a);

function one() {
    const username='aftabsial'
    function two(){
const web='aftab.com'
console.log(username);
    }
    // console.log(web);
    // two()
}

// one()

// if(true){
//     const username='aftab sial'
//     if(username=="aftab sial"){
//  const website='aftab.com'
//  console.log(username,website);
//     }
//     // console.log(website);
// }
// console.log(username);
console.log(oneFun(5));
function oneFun(num){
    return num+1
}

// console.log(twoFun(7));// Cannot access 'twoFun' before initialization
const twoFun=function(num){
   return num+2
}
console.log(twoFun(7));