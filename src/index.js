'use strict';


    // CHECKBOX

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((element) => {
    element.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});
}   

    // END CHECKBOX


    // CART

function toggleCart() {
    const 
        buttonCart = document.getElementById('cart'),
        modalCart = document.querySelector('.cart'),
        closeButtonCart = document.querySelector('.cart-close');

    buttonCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow  = 'hidden';
    });

    closeButtonCart.addEventListener('click', () => {
        modalCart.style.display = '';
        document.body.style.overflow  = '';
    })

}

    // END CART 


    // GOODS IN CART

function addCart() {
    const 
        cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        cartCounter = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('.btn');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            })
        });
    });

    function showData() {
        const 
            cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');

        let priceSum = 0;
            
        cartCounter.textContent = cardsCart.length;

        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            priceSum += price;   
        });

        cardTotal.textContent = priceSum; 

        if(cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}    

    // END GOODS IN CART


    // FILTER

function actionPage() {

    const 
        cards = document.querySelectorAll('.goods .card'),
        saleCheckbox = document.getElementById('discount-checkbox');

    // saleCheckbox.addEventListener('click', () => {
    //     cards.forEach((card) => {
            
    //     })
    // });    
}

    // END FILTER


toggleCheckbox();
toggleCart();
addCart();
actionPage();

    
