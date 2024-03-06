// const promiseOne=new Promise(function (resolve,reject) {
//     //don an async task
//     // DB calls,network calls
//     setTimeout(() => {
//         console.log('Async task is completed');
//         resolve()
//     }, 1000);
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
// console.log('Second Promise');
// resolve()
// },1000)
// }).then(function(){
//     console.log('Asyn 2 consumed');
// })

// // const promiseThree=new Promise(function(resolve,reject){
// // setTimeout(function(){
// //     resolve({username:'aftab',email:'aftab@gmail.com'})
// // },1000)
// // })
// // promiseThree.then(function(user){
// // console.log(user.email,user.username);
// // })

// const promiseFour=new Promise((resolve,reject)=>{
// let error=false
// if (!error) {
//     resolve({name:'afta',email:'aftab@gmail.com'})
// }else{
//     console.log('Error:Something went rong');
// }
// })
// promiseFour.then((user)=>{
// console.log(user);
// return user.name
// }).then((username)=>{
// console.log(username);
// }).catch((error)=>{
//     console.log('Error',error);
// }).finally(()=>{
//     console.log('either pormise is rejected or resolved');
// })

// const promiseFive=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     let error=false
//     if (!error) {
//         resolve({name:'afta',email:'aftab@gmail.com'})
//     }else{
//         console.log('Error:Something went rong');
//     }
// },1000)
// })

// async function consumePromiseFive(){
//   try{
//     const response=await promiseFive
//     console.log(response);
//   }catch(error){
// console.log(error);
//   }
// }
// consumePromiseFive()

// async function getUser(){
//     try{
// const response=await fetch('https://api.github.com/users/aftabnajaf')
// const data=await response.json()
// console.log(data);
//     }
//     catch(error){
// console.log('Error',error);
//     }
// }
// getUser()

fetch('https://api.github.com/users/aftabnajaf')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))