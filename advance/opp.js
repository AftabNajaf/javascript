// const user={
//     username:'aftab',
//     loginCount:23,
//     signedIn:true,
//     userDetails:function(){
// // console.log('user details got');
// // console.log(`username ${this.username}`);
// console.log(this);
//     }
// }
// console.log(user);
// // console.log(user.userDetails());

function User(username,logincount,isloggedin){
this.username=username,
this.isloggedin=isloggedin,
this.logincount=logincount,

this.greeting = function(){
    console.log(`Welcom ${this.username}`);
}

// return this
}
const details=new User('aftab',34,true);
const details2=new User('afi',5,false)
// console.log(details.constructor);
// console.log(details instanceof User);
console.log(details2.greeting());