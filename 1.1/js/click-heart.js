// window.addEventListener('DOMContentLoaded', () => {
//     const productContainer = document.querySelector('.product');

//     // 1. LocalStorage'dan wishlistni olish
//     const getWishlist = () => JSON.parse(localStorage.getItem('wishlist')) || [];

//     // 2. Wishlistni saqlash
//     const saveWishlist = (wishlist) => {
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }

//     // 3. Mahsulot wishlistda bormi?
//     const isInWishList = (productId) => {
//         const wishlist = getWishlist();
//         return wishlist.some(item => item.id === productId);
//     }

//     // 4. Wishlistga qo‘shish yoki olib tashlash
//     const toggleWishList = (product) => {
//         let wishlist = getWishlist();

//         if (isInWishList(product.id)) {
//             wishlist = wishlist.filter(item => item.id !== product.id);
//         } else {
//             wishlist.push(product);
//         }

//         saveWishlist(wishlist);
//         renderButtons(); // holatni yangilash
//     }

//     // 5. Mahsulotlarni sahifaga chiqarish
//     const renderProducts = () => {
//         productContainer.innerHTML = ""; // tozalash

//         data.forEach((item) => {
//             productContainer.innerHTML += `
//                 <div class="product-card">
//                     <div class="product-card__top">
//                         <div class="card-top">
//                             <span class="product__discount">-${item.productDiscount}%</span>
//                             <div class="produc__icon">
//                                 <button data-id="${item.id}" class="product__icon heart-Icon">
//                                     <img src="./asate/icon/heart_icon.svg" alt="">
//                                 </button>
//                             </div>
//                         </div>
//                         <img src="${item.image}" alt="${item.title}" />
//                     </div>
//                     <div class="product-card__bottom">
//                         <p class="product__item">${item.title}</p>
//                         <div class="product__price">
//                             <span class="price__one">$${item.price}</span>
//                             <span class="price__two">$${item.oldPrice}</span>
//                         </div>
//                         <div class="product__rating">
//                             <span>💬 ${item.comment} sharh</span>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });

//         attachHeartButtonListeners(); // event qo‘shish
//         renderButtons(); // holatni yangilash
//     }

//     // 6. Yurakcha tugmalarga event qo‘shish
//     const attachHeartButtonListeners = () => {
//         const buttons = document.querySelectorAll('.heart-Icon');
//         buttons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const id = parseInt(button.getAttribute('data-id'));
//                 const product = data.find(item => item.id === id);
//                 toggleWishList(product);
//             });
//         });
//     }

//     // 7. Yurakcha ikonkasini faollashtirish/ochirish
//     const renderButtons = () => {
//         const wishlist = getWishlist();
//         document.querySelectorAll('.heart-Icon').forEach(button => {
//             const id = parseInt(button.getAttribute('data-id'));
//             const isActive = wishlist.some(item => item.id === id);
//             button.classList.toggle('active', isActive); // class qo‘shish yoki olib tashlash
//         });
//     }

//     // Ishga tushirish
//     renderProducts();
// });


let wishlist = []
try {
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!Array.isArray(wishlist)) wishlist = []
} catch (error) {

}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card').forEach((proddutc) => {
        const product__item = proddutc.querySelector('.product__item')?.textContent || '';
        const isInWishList = wishlist.some((item) => item.product__item === product__item);

        if (isInWishList) {
            const wishlistBtn = proddutc.querySelector('.product__icon');
        }
    })
})


const wishlistBtn = document.querySelectorAll('.product__icon');

wishlistBtn.forEach((wishlistBtn) => {
    wishlistBtn.addEventListener('click', (e) => {
        const proddutc = wishlistBtn.closest('.product-card');
        const product__discount = proddutc.querySelector('.product__discount')?.textContent || '';
        const product__item = proddutc.querySelector('.product__item')?.textContent || '';
        const price__one = proddutc.querySelector('.price__one')?.textContent || '';
        const price__two = proddutc.querySelector('.price__two')?.textContent || '';
        const cardDimg = proddutc.querySelector('.wshImg')?.src || '';

        const price__there = proddutc.querySelector('.price__there')?.textContent || '';

        const newProduct = {
            product__item,
            price__two,
            cardDimg,
            price__one,
            product__discount,
            price__there
        }

        let wishlist = []
        try {
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            if (!Array.isArray(wishlist)) wishlist = []
        } catch (error) {

        }


        const prductIndex = wishlist.findIndex((item) => item.product__item === newProduct.product__item);
        if (prductIndex === -1) {
            wishlist.push(newProduct);
            wishlistBtn.innerHTML = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="red" fill="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`} else {
            wishlist.splice(prductIndex, 1);
            wishlistBtn.innerHTML = `
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black"fill="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    })
})

// Wishlistni olish

const wishlistCont = document.querySelector('.selling-productt');
if (wishlistCont) {
    wishlist.forEach((proddutc) => {
        const prductHtmll =
            `
         <div class="product-card   ">
                <div id="washlist__cardtwo" class="product-card__top">
                    <div class="card-top">
                        <span class="product__discount">${proddutc.product__discount}</span>
                        <div >
                            <span class="product__icon"><img src="/1.1/asate/img/wishist/delete_ixon.svg" alt=""></span>
                        </div>
                    </div>
                    <img class="wshImg"  src="${proddutc.cardDimg}" alt="">
                    <div class="card-bottom"></div>
                </div>
                <div class="product-card__bottom">
                    <button class="wishli__btn"><a href="#">
                        <img src="/1.1/asate/img/wishist/wishlist-cart.svg" alt="">
                            Add To Cart</a></button>
                    <p class="product__item">${proddutc.product__item}</p>
                    <div class="product__price">
                        <span class="price__one">$${proddutc.price__one}</span>
                        <span class="price__two"> ${proddutc.price__two}</span>
                    </div>
                    <!-- <div class="producr__reting">
                        <img src="./asate/icon/Five-star.svg" alt="">
                        <span class="price__there">(${proddutc.price__there})</span>
                    </div> -->
                </div>
            </div>

        `
        document.querySelectorAll('.product__discount').forEach((el) => {
            el.style.paddingTop = '10px';
            
        });

        wishlistCont.innerHTML += prductHtmll;
    })
} 