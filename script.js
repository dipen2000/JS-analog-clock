let angle = 30;
for(let i=1;i<=11;i++){
    let ele = document.querySelector(`.number${i}`);
    ele.style.setProperty("--rotation" , `${angle}deg`);
    angle+=30;
}

setInterval(setClock , 1000);

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock(){
    let currentDate = new Date();
    let secondratio = (currentDate.getSeconds()) / 60; 
    let secondRotation = secondratio*360;
    let minuteratio = (secondratio + currentDate.getMinutes())/60;
    let minuteRotation = (minuteratio)*360;
    let hourratio = (minuteratio + currentDate.getHours())/12;
    let hourRotation = hourratio*360;
    // let minuteRotation = (currentDate.getSeconds())
    secondHand.style.setProperty("--rotation" , `${secondRotation}deg`);
    secondHand.style.setProperty("transform" , `rotate(${secondRotation}deg)`);
    rotateHand(secondHand , secondRotation);
    rotateHand(minuteHand , minuteRotation);
    rotateHand(hourHand , hourRotation);
}

function rotateHand(hand , rotation){
    hand.style.setProperty("--rotation" , `${rotation}deg`);
    hand.style.setProperty("transform" , `rotate(${rotation}deg)`);
}
setClock();