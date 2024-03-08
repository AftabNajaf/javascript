const User={
    _email:'000aftabsia@gmail.com',
    _password:'12345',

    get email(){
    return this._email.toUpperCase()
        },

     set email(value){
    this._email=value
        },

        get password(){
            return `${this._password}abc`
        },
        set password(value){
            this._password=value
        }

}

const usr= User
// console.log(usr.email);
console.log(usr.password);