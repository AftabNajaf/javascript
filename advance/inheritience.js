class User{
constructor(username){
this.username=username
}
logMe(){
    console.log(`Username is ${this.username}`);
}
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
this.email=email
this.password=password
    }
    addCourse(){
        console.log(`A new curse was added by ${this.username}`);
    }
}

const tech=new Teacher('test by aftab','test@gmail.com','98765')
// console.log(tech.logMe());

const usr=new User('afi123');
// console.log(usr.logMe());
console.log(tech instanceof Teacher);
