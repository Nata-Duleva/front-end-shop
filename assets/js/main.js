let counterCart = document.querySelector('.counter-cart');
let buttonsCart = document.querySelector('.main-content');
let counter = null;
let priceSum = 0;
let clickHandler = function (e) {
    let target = e.target;
    if (target.classList.contains('btn-content__cart')) {
        counterCart.innerHTML = `${++counter}`;
        if (counter === 1) counterCart.classList.add('show');
        const priceContainer = e.target.parentElement.parentElement.querySelector('.content-price');
        const price = +priceContainer
            .innerHTML
            .replace(/^\$([0-9]+)\D+([0-9]+).*$/u, '$1.$2');
        priceSum = (priceSum + price);
        let sumHTML = target.innerHTML;
        target.innerHTML = `ADDED ${priceSum.toFixed(2)} $`
        buttonsCart.removeEventListener('click', clickHandler);
        target.disabled = true;
        setTimeout(() => {
            target.innerHTML = sumHTML;
            buttonsCart.addEventListener('click', clickHandler);
            target.disabled = false;
        }, 1500);
    }
};
buttonsCart.addEventListener('click', clickHandler);

