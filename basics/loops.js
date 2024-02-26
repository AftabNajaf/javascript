// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
// console.log('number is 5');
//     }
//  console.log(element);   
// }

// for (let i = 1; i <= 10; i++) {
// console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
        
//         // console.log(`inner loop valuw ${j} and inner loop value ${i}`);
//         console.log(i + '*' + j+'='+i*j);
//     }
    
// }

// const heros=['batman','superman','spiderman'];
// console.log(heros.length);
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     if(i==5){
// console.log('value is detected');
// // break;
// continue;
//     }
//     console.log(i);
    
// }

// let index=0;
// while(index <= 10){
// console.log(`value of index is ${index}`);
// index=index+2;
// }

// let heros=['spiderman','batman','superman']

// let arr=0;
// while(arr<heros.length){
// console.log(`value is ${heros[arr]}`);
// arr=arr+1
// }

// let score =11
// do{
//     console.log(`score is ${score}`);
//     score++
// }while(score<=10)

// const arr=[1,2,3,4,5]

// for (const it of arr) {
//     console.log(it);
// }

// const text='Hello afi';
// for( const txt of text){
//     if(txt === ' '){
//     continue
//             }
//     console.log(`words are ${txt}`);

// }

//Map

// const map=new Map()

// map.set('PK','Pakista')
// map.set('UK','United Kingdom')
// map.set('IND','India')
// map.set('PK','Pakistan')

// console.log(map);

// for (const [cnt,value] of map) {
//     console.log(cnt, '-:', value );
// }

//object

// const myObj={
//     game1:'NFC',
//     game2:'GTA',

// }
// for( const key of myObj){
//     console.log(key);
// }

const objPrmg={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:'swift by apple'
}
//in loop
// for (const prm in objPrmg) {
//    console.log(`${prm} stand for ${objPrmg[prm]}`);
// }

// const arrr=['af','df','cf','gf','kf']
// for( const key in arrr){
//     console.log(arrr[key]);
// }

// const map=new Map()

// map.set('PK','Pakista')
// map.set('UK','United Kingdom')
// map.set('IND','India')
// map.set('PK','Pakistan')

// for (const key in  map) {
//    console.log(key);
// }

//for each
// const coding=['java','c++','python','cpp','ruby']

// // coding.forEach( function (val){
// //     console.log(val);
// // })

// //with arrow fn
// // coding.forEach((val2)=>{
// // console.log(val2);
// // })

// //pass function
// function print(vl){
// console.log(vl);
// }
// // coding.forEach(print)

// // coding.forEach((itm,indx,ar)=>{
// //     console.log(itm,indx,ar);
// // })

// const arrObj=[
//     {
//         lanName:'laravel',
//         lanFile:'php'
//     },
//     {
//         lanName:'java',
//         lanFile:'js'
//     },
//     {
//         lanName:'python',
//         lanFile:'py'
//     }
// ]
// arrObj.forEach((itm)=>{
// console.log(itm.lanName);
// })

const coding=['java','c++','python','cpp','ruby']

// const tt=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(tt);

const nums=[1,2,3,4,5,6,7,8,9,10]
// const nmbr=nums.filter((nm)=> nm>4)
// console.log(nmbr);

const nm2=nums.filter((num)=>{
return num>4
})
// console.log(nm2);

// const newNum=[]

// nums.forEach((num)=>{
//     if(num >4){
// newNum.push(num)
//     }
// })
// console.log(newNum);

const books =[
    { title:'book one', genre:'fiction', publish:
    1981, edition:2004},
    { title:'book two', genre:'no-fiction', publish:
    1992, edition:2008},
    { title:'book three', genre:'history', publish:
    1999, edition:2007},
    { title:'book four', genre:'no-fiction', publish:
    1999, edition:20010},
    { title:'book five', genre:'sciense', publish:
    2009, edition:2014},
    { title:'book six', genre:'history', publish:
    1987, edition:2010},
]
const numarr=[1,2,3,4,5]

// const nmtst= numarr.filter((numm)=> numm+10)
// console.log(nmtst);


// let bk= books.filter((bk)=>{bk.genre=='history'} )
// bk=books.filter((pbl)=>{return pbl.publish>1970 && pbl.genre=='history'})
// console.log(bk);

// const mynums=[1,2,3,4,5,6,7,8,9]
// const numpr=mynums.map((number)=>{return number+10})
// console.log(numpr);

// const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const mmNum=myNumber
//                 .map((mnb)=>{return mnb*10})//with return
//                 .map((mnb)=> mnb+1) //without return
//                 .filter((mnb)=>mnb>50)
//             console.log(mmNum);



// reduce

const nm=[11,22,33]

// const rd=nm.reduce(function(acc,curvl){
//     console.log(`acc:${acc} and the current value ${curvl}`);
// return acc+curvl
// },0)

// const rd=nm.reduce((acc,curvl)=> acc+curvl,0)

// console.log(rd);

const shoppingCart=[
    {
itenName:'java',
price:1400
    },
    {
        itenName:'c++',
        price:1200
            },
            {
                itenName:'ruby',
                price:500
                    },
                    {
                        itenName:'opp',
                        price:7200
                            },
    
]
const toptalSop=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(toptalSop);