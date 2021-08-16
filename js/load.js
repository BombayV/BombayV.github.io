const doc = document
const logo = doc.getElementById('logo')
const wrapper = doc.getElementById('wrapper')

const images = doc.getElementsByClassName("images-selected");
const blur = doc.getElementById('blur')

let fullscreen = false

this.window.addEventListener('load', ()=> {
    logo.style.animation = 'fadeOut 5s forwards';
    wrapper.style.animation='fadeIn 5s forwards';
    setTimeout(function() {
        logo.style.display='none',
        logo.style.animation='none',
        console.log('%c Page loaded!', 'color: #B3E820');
    }, 5100)

    for (let i=0; i < images.length; i++) {
        images[i].addEventListener('click', increaseSize, false);
    }
})

const increaseSize = function() {
    if (!fullscreen) {
        this.classList.add('fullscreen');
        this.classList.remove('images-selected');
        blur.style.display='block'
        fullscreen = true
    } else {
        this.classList.remove('fullscreen');
        this.classList.add('images-selected');
        blur.style.display='none'
        fullscreen = false
    }
};

for (let i=0; i < images.length; i++) {
    images[i].addEventListener('click', increaseSize, false);
}