let angle = 30;
for(let i=1;i<=11;i++){
    let ele = document.querySelector(`.number${i}`);
    ele.style.setProperty("--rotation" , `${angle}deg`);
    angle+=30;
}

setInterval(setClock , 1);

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const dateForMili = new Date();
const exactMiliSecond = dateForMili.getMilliseconds();
let miliseconds = exactMiliSecond;

function setClock(){
    if(miliseconds < 60000){
        miliseconds++;
    }
    else{
        miliseconds = 0;
    }
    let miliSecondratio = miliseconds / 60000;
    let miliSecondRotation = miliSecondratio * 360;
    let currentDate = new Date();
    let secondratio = (currentDate.getSeconds()) / 60; 
    let secondRotation = secondratio*360;
    let minuteratio = (secondratio + currentDate.getMinutes())/60;
    let minuteRotation = (minuteratio)*360;
    let hourratio = (minuteratio + currentDate.getHours())/12;
    let hourRotation = hourratio*360;
    // let minuteRotation = (currentDate.getSeconds())
    // secondHand.style.setProperty("--rotation" , `${miliSecondRotation}deg`);
    // secondHand.style.setProperty("transform" , `rotate(${secondRotation}deg)`);
    rotateHand(secondHand , miliSecondRotation);
    rotateHand(minuteHand , minuteRotation);
    rotateHand(hourHand , hourRotation);
}

function rotateHand(hand , rotation){
    hand.style.setProperty("--rotation" , `${rotation}deg`);
    hand.style.setProperty("transform" , `rotate(${rotation}deg)`);
}
setClock();

for(let i=4;i<=8;i++){
    let element = document.querySelector(`.number${i} div`);
    element.style.setProperty("transform" , `rotate(180deg)`);
}

for(let i=3;i<=9;i+=6){
    if(i==9){
        let element = document.querySelector(`.number${i} div`);
        element.style.setProperty("transform" , `rotate(90deg)`);
    }
    
}