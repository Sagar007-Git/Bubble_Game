var timer = 60;
var score = 0;
var hitNumber = 0;



function increaseScore(){
    document.querySelector("#scoreVal").textContent = score;
    score += 10;
}

function getNewHit(){
    hitNumber =  Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent = hitNumber;

}

function makeBubble(){
    var clutter = "";

for(var i=1; i<=102; i++) {
    var number = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${number}</div>`
}

document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
   var timeInterval = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerVal").textContent = timer;
    } else {
        clearInterval(timeInterval);
        document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`
    }
    }, 1000);
    
}

document.querySelector("#pbottom").addEventListener("click",function(details){
     var clickedNumber =  Number(details.target.textContent);
     if (clickedNumber === hitNumber){
        increaseScore();
        makeBubble();
        getNewHit();

     }
     
});

runTimer();
makeBubble();
getNewHit();
increaseScore();
