const DECREASE=document.querySelector(".DECREASE")
const RESET=document.querySelector(".RESET")
const INCREASE=document.querySelector(".INCREASE")
const number=document.querySelector(".number")

let i=0;
function add(btn){
   if(btn===DECREASE){
     i--;
     if (i<0) {
        number.style.color="red"

     }
   }
   else if(btn==INCREASE){
     i++
     if (i>0) {
        number.style.color="green"
     }
   }
  else if(btn==RESET){
    i=0
    if (i==0) {
        number.style.color="black"
    }
  }

   number.innerHTML=i
}


DECREASE.addEventListener("click",function(){
    add(DECREASE)
})

INCREASE.addEventListener("click",function(){
    add(INCREASE)
})

RESET.addEventListener("click",function(){
    add(RESET)
})


