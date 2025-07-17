const randomColor=()=>{const hex="0123456789ABCDEF";
let color='#';
for(i=0; i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
    console.log(color);
}
return color;
}

let IntervalSet;
let changer = function(){
  if(!IntervalSet){
        IntervalSet = setInterval(bgColorChanger,2000)
  }
   function bgColorChanger(){
    document.body.style.backgroundColor=randomColor();
   } 

}
function stopper(){
    clearInterval(IntervalSet);
    IntervalSet = null;
}
document.body.style.transition = "background-color 1s ease";
document.querySelector('.start').addEventListener('click',changer)
document.querySelector('.stop').addEventListener('click',stopper)