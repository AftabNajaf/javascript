class User{
    constructor(username){
this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
   static createdId(){
        return `123`
    }
}
const test=new User('afi110')
// console.log(test);
// console.log(test.createdId());

class Teacher extends User{
    constructor(username,email){
super(username)
this.email=email
    }
}
const tech=new Teacher('110afi','afi@gmail.com')
// console.log(tech);
console.log(tech.createdId());