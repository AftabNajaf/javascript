const arrNew=[0,1,2,3,4,5];
// const newArr=new Array('12','33','44')
// console.log(newArr[2]);

//methods
// arrNew.push(6);
// arrNew.pop();
// arrNew.unshift(5);
// arrNew.shift();
// const check=arrNew.includes(3)
// console.log(arrNew.includes('3'));
// console.log(arrNew.indexOf('3'));
// const nArray=arrNew.join();
// console.log(arrNew);
// console.log(typeof nArray);

// console.log('A',arrNew);
// const m1=arrNew.slice(1,4);
// console.log(m1);
// console.log('B',arrNew);
// const m2=arrNew.splice(1,4);
// console.log(m2);


const marvel_heros=['spiderman','irnman','thor'];
const dc_heros=['batman','superman','flash'];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][2]);

// const total_heros=marvel_heros.concat(dc_heros);
// console.log(total_heros);

// const t_heros=[...marvel_heros, ...dc_heros];
// console.log(t_heros);

// const number_Array=[1,2,3,[4,5,6],6,7,[8,9,[10,11]]];
// const set_format=number_Array.flat(Infinity)
// console.log(set_format);

console.log(Array.isArray('aftab sial'));
console.log(Array.from('aftab sial'));
console.log(Array.from({name:'aftab'}));// not deciding make key array or value array

const score1=110;
const score2=120;
const score3=130;
console.log(Array.of(score1,score2,score3))
