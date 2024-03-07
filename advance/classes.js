// class User{
// constructor(username,email,password){
// this.username=username
// this.email=email
// this.password=password
// }
// encryptPassword(){
//     return `${this.password}abc`
// }
// changeUsername(){
//     console.log(`${this.username.toUpperCase()}`);
// }
// }
// const first= new User('afi','afi@gmail.com','12345')
// console.log(first.encryptPassword());
// first.changeUsername();

//with function

function User(username,email,password){
this.username=username
this.email=email
this.password=password
}
User.prototype.encryptPassoword=function(){
    console.log(`${this.password}abc`);
}
User.prototype.chnageName=function(){
    return `${this.username.toUpperCase()}`
}

const second=new User('abc','abc@gmail.com','12345')
console.log(second.encryptPassoword());
console.log(second.chnageName());