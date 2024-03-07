function setUserName(username){
    this.username=username
}

function createUser(username,email,password){
    setUserName.call(this,username)
this.email=email
this.password=password
}

const test=new createUser('aftab','aftab@gmail.com','12345')
console.log(test);