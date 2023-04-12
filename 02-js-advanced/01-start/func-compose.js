'use strict';


// FUNCTIONS COMPOSITION TASK


// 1) FUNCTION OF CHAIN OF FUNCTIONS

const compose = function(...f) {

    return (value) => {
        let rsl = f.slice(-1)[0](value);
        for (let i = f.length - 2; i >= 0; i--) {
            rsl = f[i](rsl);
        }
        return rsl;
    }
};

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = normalizePrice(divide100(multiply20(200)));
console.log(discount);

const discountCompose = compose(normalizePrice, divide100, multiply20);
console.log(discountCompose(200.0));


// 2) FIRST CALL - RANDOM ARGUMENT COUNT

const composeWithArgs = function(...f) {

    return (...values) => {
        let rsl = f.slice(-1)[0](...values);
        for (let i = f.length - 2; i >= 0; i--) {
            rsl = f[i](rsl);
        }
        return rsl;
    }
};

