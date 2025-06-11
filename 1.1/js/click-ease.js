const btn = document.querySelector('#openbtnOne')
const btn2 = document.querySelector('#openbtnTwo')
const btn3 = document.querySelector('#openbtnThere')
const btn4 = document.querySelector('#openbtnFour')
const openBtn = document.querySelector('.easeOne')
const openBtn2 = document.querySelector('.easeTwo')
const openBtn3 = document.querySelector('.easeThere')
const openBtn4 = document.querySelector('.easeFour')
const closueBtn = document.querySelector('.clouseBtn')
const parent = document.querySelector('.product')
const cover = document.querySelector('.esa-div')


btn.addEventListener('click', () => {
    openBtn.style.scale = "1";
    openBtn.style.top = "13%";
    
    cover.style.display = "block"
})
closueBtn.addEventListener('click', () => {
    openBtn.style.scale = "0";
    cover.style.display = "none"
})

document.addEventListener('click', () => {
    if (parent && !parent.contains(event.target)) {
        openBtn.style.scale = "0";
        cover.style.display = "none"

    }
})


btn2.addEventListener('click', () => {
    openBtn2.style.scale = "1";
    openBtn2.style.top = "13%";
    cover.style.display = "block"
})
closueBtn.addEventListener('click', () => {
    openBtn2.style.scale = "0";
    cover.style.display = "none"
})

document.addEventListener('click', () => {
    if (parent && !parent.contains(event.target)) {
        openBtn2.style.scale = "0";
        cover.style.display = "none"

    }
})

btn3.addEventListener('click', () => {
    openBtn3.style.scale = "1";
    openBtn3.style.top = "13%";
    cover.style.display = "block"
})
closueBtn.addEventListener('click', () => {
    openBtn3.style.scale = "0";
    cover.style.display = "none"
})

document.addEventListener('click', () => {
    if (parent && !parent.contains(event.target)) {
        openBtn3.style.scale = "0";
        cover.style.display = "none"

    }
})


btn4.addEventListener('click', () => {
    openBtn4.style.scale = "1";
    openBtn4.style.top = "13%";
    cover.style.display = "block"
    
})
closueBtn.addEventListener('click', () => {
    openBtn4.style.scale = "0";
    cover.style.display = "none"
})

document.addEventListener('click', () => {
    if (parent && !parent.contains(event.target)) {
        openBtn4.style.scale = "0";
        cover.style.display = "none"

    }
})