var  clutter = "";


for(var i = 1; i<=120; i++){
    var rn =Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector('#pbtm').innerHTML =  clutter;

var timer = 60;
var  score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}
function getNewHit(){
 hitrn = Math.floor(Math.random()* 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){

}

function runTimer(){
    setInterval(function(){
timer--;
document.querySelector('#timerval'). textContent = timer;
    }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click" , function(details){
var clickdnum= (Number(details.target.textContent));

if(clickdnum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})
runTimer();
makeBubble();
getNewHit();
// increaseScore();
