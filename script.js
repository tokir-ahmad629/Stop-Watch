let tens = document.querySelector("#tens");
let seconds = document.querySelector("#seconds");
let start = document.querySelector("#button-start");
let stop = document.querySelector("#button-stop");
let reset = document.querySelector("#button-reset");


let secondss = 00; 
let tenss = 00; 
let Interval ;

function startTime(){
    tenss++;
    
   let secod = parseInt(tens.innerHTML);
   let incremnt = secod + 1;
   tens.innerHTML = incremnt;
   console.log(incremnt);

   if(incremnt <= 9){
    tens.innerHTML = "0" + tenss;
   }

   if(incremnt > 9){
    tens.innerHTML = tenss;
   }

   if(incremnt > 99){
    secondss++;
    seconds.innerHTML = "0" + secondss;
    tenss = 0;
    tens.innerHTML = "0" + 0;
   }

   if(incremnt > 9){
    seconds.innerHTML = secondss;
   }


}


// start.addEventListener("click",function(){
//     setInterval(startTime, 10);
// });

  start.onclick = function() {
     clearInterval(Interval);
     Interval = setInterval(startTime, 10);
  }
  
  stop.onclick = function() {
       clearInterval(Interval);
  }

  reset.onclick = function(){

    let secondss = 00; 
    let tenss = 00; 
    tens.innerHTML = tenss;
    seconds.innerHTML = secondss;
  }
