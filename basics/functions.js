function myName(){
    console.log('a');
    console.log('f');
    console.log('t');
    console.log('a');
    console.log('b');
}
// myName()
// function sum (num1,num2){
//     console.log(num1+num2)
// }

// function sum (num1,num2){
//     // const total=num1+num2
//     // console.log('test');
//     // return total

//     return num1+num2
   
// }
//  const result= sum(2,3)
//  console.log('result is',result);

function isLogin(username='afi'){
    if(!username){
        console.log('Please enter username')
        return
    }
    return `${username} is login`
}

// console.log(isLogin('aftab'))

function calcuPrice(val1,val2,...num){
    return num
}
// console.log(calcuPrice(3,4,5,6,7));

const userData={
    name:'aftab',
    age:26

}

function emply(usr){
    console.log(`name is ${usr.name} and age is ${usr.age}`)
}

// emply(userData)
// emply({
//     name:'afi',
//     age:25
// })

const array=[1,2,3,4,5]

function arr(ar){
return ar[3]
}
// console.log(arr(array))
console.log(arr([7,8,9,0,2]))