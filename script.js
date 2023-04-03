function CheckUsername() {
    const username = bar.value
    const len = username.length
    NameLen.innerHTML = (`Your name has ${len} letters.`)

    let backwards = ''
    for (let index = len - 1; index >= 0; index--) {
        backwards += username[index];
    }
    backwards1.innerHTML = (`Your name in backwards is ${backwards}`)
}

function ColorChange() {
    const color = changecolor.value
    PickColor.style.backgroundColor = color
}

function ArrayColorChange() {
    const color = ArrayColorInput.value.toLowerCase()
    const colors = ['red', 'blue', 'yellow']
    colors.includes(color) ? document.body.style.backgroundColor = color : 0
}

let x = 0;
let y = 1;
let speed = 5;

function moveButton() {
    const button = document.querySelector('#Trippy')
    x += speed;
    y += speed;
    button.style.marginLeft = x + 'px';
    button.style.marginTop = y + 'px';
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (x <= 0 || x >= windowWidth - button.offsetWidth) {
        speed = -speed
    }
    if (y <= 0 || y >= windowHeight - button.offsetHeight) {
        speed = -speed
    }
}

setInterval(moveButton, 100)
