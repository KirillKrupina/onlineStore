'use strict';


    // CHECKBOX

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

    // END CHECKBOX

    // CART

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


    // END CART 


    // GOODS 

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
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    cartCounter.textContent = cardsCart.length;
}

    // END GOODS  