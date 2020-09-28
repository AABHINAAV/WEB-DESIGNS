var pads = document.querySelectorAll('.pads div');
for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener('click', ()=>{
        playsound(event.target.classList[0]);
        addAnimation(i);
    });
    // addAnimation(i);
}
let sound = new Audio();
function playsound(classname) {
    sound.currentTime = 0;  
    switch (classname) {
        case 'pad1':
            source = './sounds/bubbles.mp3';
            break;
        case 'pad2':
            source = './sounds/clay.mp3';
            break;
        case 'pad3':
            source = './sounds/confetti.mp3';
            break;
        case 'pad4':
            source = './sounds/glimmer.mp3';
            break;
        case 'pad5':
            source = './sounds/moon.mp3';
            break;
        case 'pad6':
            source = './sounds/ufo.mp3';
            break;
    }
    sound.src=source;
    sound.play();
}
const colors = ['red','green','violet','black','lightgreen','blue'];
const visual = document.querySelector('.visual');
function addAnimation(colornumber){
    const bubble = document.createElement('div');
    bubble.style.backgroundColor = colors[colornumber];
    visual.appendChild(bubble);
    bubble.style.animation='jump 1s ease';
    bubble.addEventListener('animationend',()=>{
        visual.removeChild(bubble);
    });
}