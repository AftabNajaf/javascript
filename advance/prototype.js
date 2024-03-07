// // let myName='aftab     '

// // console.log(myName.trim().length);

// const heros=['thor','spiderman']

// let heroPower={
//     thor:'hammer',
//     spiderman:'sling',

//     getSpiderPower:function(){
//         console.log(`spider power is ${this.spiderman}`);
//     }
// }
// Object.prototype.aftab=function(){
//     console.log('its available everywhere');
// }

// Array.prototype.afi=function(){
//     console.log('its 2 available everywher');
// }
// // heroPower.aftab()
// // heros.afi()
// // heroPower.afi()


//inheritance
const User={
    name:'aftab',
    email:'aftab@gmail.com'
}


const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ='aftab test 1234  5'
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
'afi'.trueLength()
'test'.trueLength()