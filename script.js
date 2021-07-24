let angle = 0;
for(let i=1;i<=12;i++){
    let ele = document.querySelector(`.number${i}`);
    ele.style.setProperty("--rotation" , `${angle}deg`);
    angle+=30;
}