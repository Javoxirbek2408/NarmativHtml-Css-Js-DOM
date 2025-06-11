document.addEventListener('DOMContentLoaded', () => {
    let cart = []
    try {
        cart = JSON.parse(localStorage.getItem('.ProductCard')) || [];
        if (!Array.isArray(cart)) cart = []
    } catch (error) {

    }


    document.querySelectorAll('.product-card').forEach(producctCard => {
        const produtcNme = producctCard.querySelector('.product__item')?.textContent || ''
        const isInCart = cart.some(item => item.product__item === produtcNme);

        if (isInCart) {
            const cardBtn = producctCard.querySelector('.product__btn');
            if (cardBtn) {
                cardBtn.textContent = 'Added ';
            }
        }
    })
    const cardBtns = document.querySelectorAll('.product__btn');

    cardBtns.forEach(cardBtn => {
        cardBtn.addEventListener('click', () => {
            const proddutc = cardBtn.closest('.product-card');
            const produtcNme = proddutc.querySelector('.product__item')?.textContent || '';
            const price__one = proddutc.querySelector('.price__one')?.textContent || '';
            const cardDimg = proddutc.querySelector('.wshImg')?.src || '';

            const newProductCart = {
                produtcNme,
                price__one,
                cardDimg
            }

            let cart = []
            try {
                cart = JSON.parse(localStorage.getItem('.ProductCard')) || [];
                if (!Array.isArray(cart)) cart = []
            } catch (error) {

            }

            const prductIndex = cart.findIndex(item => item.product__item === newProductCart.produtcNme);
            if (prductIndex === -1) {
                cart.push(newProductCart);
                cardBtn.textContent = 'Added ';
            } else {
                cart.splice(prductIndex, 1);
                cardBtn.textContent = 'Add to Cart';
            }
            localStorage.setItem('.ProductCard', JSON.stringify(cart));
        })
    })

    const cardCont = document.querySelector('.by-product__card');

    if (cardCont) {
        cart.map(proddutc => {
            cardCont.innerHTML += `
                  <div class="by-pd__parent">
            <div class="by-pd__cards"><img style="width: 50px; height: auto;" src="${proddutc.cardDimg}" alt="mini manitor"><p style="font-size 6px; height: auto;" >${proddutc.produtcNme}</p></div>
            <div class="by-pd__cards">${proddutc.price__one}</div>
            <div class="by-pd__cards"><input class="price__edit" type="number" placeholder="01"></div>
            <div class="by-pd__cards">${proddutc.price__one}</div>
        </div>
                `

        }).join('')
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const priceInp = document.querySelectorAll('.price__edit')
    priceInp.forEach(inp => {
        inp.addEventListener('input', (e) => {
            const inputValue = e.target.value;
            const parentCard = e.target.closest('.by-pd__parent');
            const priceCell = parentCard.querySelector('.by-pd__cards:nth-child(2)');
            const totalCell = parentCard.querySelector('.by-pd__cards:nth-child(4)');

            const originalPrice = parseFloat(priceCell.textContent.replace('$', ''));

            if (inputValue && !isNaN(inputValue)) {
                const quantity = parseInt(inputValue);
                const total = originalPrice * quantity;
                totalCell.textContent = `$${total.toFixed(2)}`;
            } else {
                totalCell.textContent = `$${originalPrice.toFixed(2)}`;
            }
        });
    });
});
