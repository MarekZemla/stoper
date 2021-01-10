const btnStart = document.querySelector('.main')
const btnReset = document.querySelector('.reset')
let divTime = document.querySelector('.time div')
let time = 0;
let idInterval;

const change=()=>{
    if(btnStart.textContent == "Start"){
     btnStart.textContent = "stop"
      idInterval = setInterval(start,10);}
    else {
         btnStart.textContent = "Start"
         clearInterval(idInterval)
     }   
    
    }      

const start = ()=>{
    time++
    divTime.textContent = (time/100).toFixed(2)

}

const reset =()=>{
    
    clearInterval(idInterval)
    divTime.textContent = "---"
    btnStart.textContent = "Start"
}
 

btnStart.addEventListener('click',change)
btnReset.addEventListener('click',reset)
