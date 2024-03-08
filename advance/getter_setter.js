class User {
    constructor(email,password){
            this._email=email
            this._password = password; 
    }
    get password(){
    return `${this._password}afi`
    }
    set password(value){
    this._password=value
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
    this._email=value
    }

}

const afi=new User('aftab2gmail.com','abc')
console.log(afi.email);