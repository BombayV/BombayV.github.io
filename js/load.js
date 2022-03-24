const doc = document
const logo = doc.getElementById('logo')
const wrapper = doc.getElementById('wrapper')

const images = doc.getElementsByClassName("images-selected");
const blur = doc.getElementById('blur')

let fullscreen = false
let current = 0

window.addEventListener('load', ()=> {
    logo.style.animation = 'fadeOut 2.5s forwards';
    wrapper.style.animation='fadeIn 2.5s forwards';
    setTimeout(function() {
        logo.style.display='none',
        logo.style.animation='none',
        console.log('%c Page loaded!', 'color: #B3E820');
    }, 2500)

    for (let i=0; i < images.length; i++) {
        images[i].addEventListener('click', increaseSize, false);
    }
})

const increaseSize = function() {
    if (!fullscreen) {
        current = this.id
        this.classList.add('fullscreen');
        this.classList.remove('images-selected');
        blur.style.display='block'
        fullscreen = true
    } else {
        this.classList.remove('fullscreen');
        this.classList.add('images-selected');
        blur.style.display='none'
        fullscreen = false
        current = 0
    }
};

blur.addEventListener('click', () => {
  if (fullscreen) {
    doc.getElementById(current).classList.remove('fullscreen');
    doc.getElementById(current).classList.add('images-selected');
    blur.style.display='none'
    fullscreen = false
  }
})

for (let i=0; i < images.length; i++) {
    images[i].addEventListener('click', increaseSize, false);
    images[i].id = i
}