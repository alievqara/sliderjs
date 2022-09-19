let Slider = [
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
]

let img = document.querySelector('#slider img');
let index = 0;
img.src = Slider[index];

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    index++;
    if (index < Slider.length -1) {
        img.src=Slider[index];
    }
    else{
        index = 0;
    }
})

prev.addEventListener('click', function(){
    index--;
    if (index === -1) {
        index = (Slider.length -1);
    }
    else{
        img.src = Slider[index];
    }
})

function auto(){
    index++;
    if (index < Slider.length -1) {
        img.src=Slider[index];
    }
    else{
        index = 0;
    }
}

setInterval(() => {
    auto();
}, 3000);