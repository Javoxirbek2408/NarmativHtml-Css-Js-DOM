const slider = document.querySelector('.slayder-card')
const slides = document.querySelectorAll('.iphone-card')
const dots = document.querySelectorAll('.btnClick')


let currentSlide = 0;

const slideCount = slides.length;


function showSlide(index) {
    if (index < 0) {
        currentSlide = slideCount - 1
    }
    else if (index >= slideCount) {
        currentSlide = 0
    } else {
        currentSlide = index
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`

    dots.forEach(el => el.classList.remove('active'))
    dots[currentSlide].classList.add('active')
    console.log(currentSlide);


   
}

function nextSlide() {
    showSlide(currentSlide + 1)
}



dots.forEach((el, index) => {
    el.addEventListener('click', () => {
        showSlide(index);
        clearInterval(slideInterval())
        slideInterval = setInterval(nextSlide, 5000)
    })
})


let slideInterval = setInterval(nextSlide, 5000)


slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval)
})


slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000)
})




// TAYMER UCHUN






