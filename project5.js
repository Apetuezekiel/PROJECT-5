slide.addEventListener("click", diagonalMove =>{
    pos = 0;
    let interval = setInterval(effect, 5)
    function effect () {
        if (pos === 419) {
            clearInterval(interval)
        } else {                        //I WANT TO MAKE IT BOUNCE BACK
        pos++;
        animationBox.style.top = pos + "px";
        animationBox.style.left = pos + "px";
        }
    }

    let colorInterval = setInterval(changeBg, 100) 
    function changeBg () {
    let colorArray = ["red", "yellow", "blue", "cyan", "grey", "pink"]
    let colorPicker = Math.floor(Math.random()*colorArray.length)
        if (pos === 419) {
            clearInterval(colorInterval)
        } else {
        animationBox.style.backgroundColor = colorArray[colorPicker];
        }
    }
})

let pos = 10;
right.addEventListener("click", moveRight =>{
    if (pos === 418) {
        return;
    } else {
        pos+=10;
        animationBox.style.left = pos + "px";
    }
})

/* let pos1 = 0;
left.addEventListener("click", moveLeft =>{
    if (pos1 === 0) {
        return;
    } else {
        pos1+=10;
        animationBox.style.right = pos1 + "px";
    }
})

up.addEventListener("click", moveUp =>{
    if (pos === 418) {
        return;
    } else {
        pos+=10;
        animationBox.style.down = pos + "px";
    }
})

down.addEventListener("click", moveDown =>{
    if (pos === 418) {
        return;
    } else {
        pos+=10;
        animationBox.style.up = pos + "px";
    }
}) */
