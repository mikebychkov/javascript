function calc() {

    // CALCULATOR -------------------------------------------------------------
    
    function calculator() {

        const calcContainer = document.querySelector('.calculating');
        const calcResult = calcContainer.querySelector('.calculating__result span');
        const calcHeight = calcContainer.querySelector('#height');
        const calcWeight = calcContainer.querySelector('#weight');
        const calcAge = calcContainer.querySelector('#age');
        const calcSexMale = calcContainer.querySelector('#male');
        const calcSexFemale = calcContainer.querySelector('#female');
        const calcRates = calcContainer.querySelectorAll('[data-ratio]');
        const activeClass = 'calculating__choose-item_active';
    
        function calcInit() {

            calcHeight.value = localStorage.calc_height;
            calcWeight.value = localStorage.calc_weight;
            calcAge.value = localStorage.calc_age;
            if (localStorage.calc_sex == 'male') {
                calcSexMale.classList.add(activeClass);
                calcSexFemale.classList.remove(activeClass);
            } else {
                calcSexFemale.classList.add(activeClass);
                calcSexMale.classList.remove(activeClass);
            }
            let rateIsSet;
            calcRates.forEach(item => {
                if (item.id === localStorage.calc_rate) {
                    item.classList.add(activeClass);
                    rateIsSet = true;
                } else {
                    item.classList.remove(activeClass);
                }
            });
            if (!rateIsSet) {
                calcRates[1].classList.add(activeClass);
            }
        }
        calcInit();

        function getHeight() {
            localStorage.calc_height = calcHeight.value;
            return parseFloat(calcHeight.value);
        }
        
        function getWeight() {
            localStorage.calc_weight = calcWeight.value;
            return parseFloat(calcWeight.value);
        }

        function getAge() {
            localStorage.calc_age = calcAge.value;
            return parseFloat(calcAge.value);
        }

        function getSex() {
            if (calcSexMale.classList.contains(activeClass)) {
                localStorage.calc_sex = 'male';
                return 'male';
            }
            if (calcSexFemale.classList.contains(activeClass)) {
                localStorage.calc_sex = 'female';
                return 'female';
            }
        }

        function getRate() {
            let rsl;
            calcRates.forEach(item => {
                if (item.classList.contains(activeClass)) {
                    rsl = item.getAttribute('data-ratio');
                    localStorage.calc_rate = item.id;
                }
            });
            return parseFloat(rsl);
        }

        function calculate() {

            const weight = getWeight();
            const height = getHeight();
            const age = getAge();

            if (!weight || !height || !age) {
                calcResult.textContent = '???';    
                return;
            }

            const coeff = [0,0,0,0];

            const sex = getSex();
            if (sex == 'male') {
                coeff[0] = 88.36;
                coeff[1] = 13.4;
                coeff[2] = 4.8;
                coeff[3] = 5.7;
            } else if (sex == 'female') {
                coeff[0] = 44.76;
                coeff[1] = 9.2;
                coeff[2] = 3.1;
                coeff[3] = 4.3;
            }
            
            let bmr = coeff[0] 
                + coeff[1] * weight 
                + coeff[2] * height 
                - coeff[3] * age;

            calcResult.textContent = Math.round(bmr * getRate());
        }
        calculate();
    
        // EVENTS

        function checkForBadInput(elem) {
            if (elem.value.match(/\D/g)) {
                elem.style.border = '2px solid red';
            } else {
                elem.style.border = 'none';
            }
        }

        function inputEvent(event) {
            checkForBadInput(event.target);
            calculate();
        }

        calcHeight.addEventListener('input', inputEvent);
        calcWeight.addEventListener('input', inputEvent);
        calcAge.addEventListener('input', inputEvent);

        calcSexMale.addEventListener('click', () => {
            calcSexMale.classList.add(activeClass);
            calcSexFemale.classList.remove(activeClass);
            calculate();
        });
        calcSexFemale.addEventListener('click', () => {
            calcSexFemale.classList.add(activeClass);
            calcSexMale.classList.remove(activeClass);
            calculate();
        });
        calcRates.forEach(item => {
            item.addEventListener('click', () => {
                calcRates.forEach(item => item.classList.remove(activeClass));
                item.classList.add(activeClass);
                calculate();
            });
        });
    }
    calculator();
}
module.exports = calc;