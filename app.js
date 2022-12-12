let button = document.getElementById('button');
let stop = document.getElementById('stop');
let myWindow

button.addEventListener('click', () => {
    myWindow = window.open('https://www.google.com');
    myWindow.resizeTo(300,200);
    myWindow.moveBy(500,600);
})

stop.addEventListener('click', () => {
    myWindow.close();
})