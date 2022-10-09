

function getColor() {
    return '#' + Math.random().toString(16).toUpperCase().slice(2,8);
}



function setColor() {
    let bgColor = getColor();
    document.body.style.background = bgColor;
}

document.body.onkeyup = function(e) {
    if(e.keyCode == 32){
        setColor();
    }    
};

