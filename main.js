const slideList = [{
 img: "images/img1.jpg",
 text: 'First photo'
},
{
 img: "images/img2.jpg",
 text: 'Second photo'
},
{
 img: "images/img3.jpg",
 text: 'Third photo'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 3000;
let active = 0;


const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = (left) => {
    if(left){
        active--;
        if (active === -1) {
            active = slideList.length -1;
        }
    } else {
        active++;
        if (active === slideList.length) {
            active = 0;
        }
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}

let intervalId = setInterval(changeSlide, time);

const keyChangeSlide = (e) =>{
    if(e.keyCode === 37){
        clearInterval(intervalId);
        changeSlide(true);
        intervalId = setInterval(changeSlide, time);
    } else if (e.keyCode === 39) {
        clearInterval(intervalId);
        changeSlide();
        intervalId = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide)