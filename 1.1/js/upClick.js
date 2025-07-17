

// document.addEventListener('DOMContentLoaded', function () {
//     const upBtn = document.querySelector('.up-btn');

//     if (upBtn) {

//         window.addEventListener('scroll', function () {
//             if (this.window.scrollY > 500) {
//                 upBtn.classList.add('show')
//             }
//             else {
//                 upBtn.classList.remove('show')
//             }
//         })

//         upBtn.addEventListener('click', function () {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             })
//         })
//     } else {
//         console.error('upBtn removerd from the DOM!');

//     }
// })














document.addEventListener('DOMContentLoaded', function () {
    const upBtn = document.querySelector('.up-btn');

    if (upBtn) {

        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 500) {
                upBtn.classList.add('show')
            }
            else {
                upBtn.classList.remove('show')
            }
        })

        upBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    } else {
        console.error('upBtn removerd from the DOM!');

    }
})
















