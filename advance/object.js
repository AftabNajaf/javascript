// function multipleyBy5(num){
// return num*5
// }

// multipleyBy5.power=2;
// console.log(multipleyBy5(5));
// console.log(multipleyBy5.power);
// console.log(multipleyBy5.prototype);

function createUser(username,score){
this.username=username
this.score=score
}
// createUser.prototype.incr=function(){
//    this.score++
// }
createUser.prototype.print=function(){
    console.log(`price is ${this.score}`);
}
const chai= new createUser('aftab',25);
const tea= new createUser('afi',250);
chai.print()
tea.print()