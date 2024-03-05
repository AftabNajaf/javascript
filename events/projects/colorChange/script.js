// generate a random color

const randomColor= function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
let intervalId
document.querySelector('#start').addEventListener('click',function(){
 if(!intervalId){
    document.body.style.backgroundColor=randomColor()
    const colorStart= function(){
     document.body.style.backgroundColor=randomColor()
    }
   intervalId= setInterval(colorStart,2000)
 }
})

document.querySelector('#stop').addEventListener('click',function(){
clearInterval(intervalId);
intervalId=null
})
