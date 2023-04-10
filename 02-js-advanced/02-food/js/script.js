'use strict';

document.addEventListener('DOMContentLoaded', () => {


    // TABS -------------------------------------------------------------------

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach(tc => {
            //tc.style.display = 'none';
            tc.classList.add('hide');
            tc.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }
    hideTabsContent();

    function showTabContent(i = 0) {
        //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, idx) => {
                if (tab.textContent == target.textContent) {
                    hideTabsContent();
                    showTabContent(idx);
                }
            });
        }
    });


    // TIMER ------------------------------------------------------------------

    const deadline = '2023-05-16';

    function dateDiff(deadline) {

        const diffMS = new Date(deadline) - new Date();

        if (diffMS < 0) return {
            totalMS: diffMS,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        // let msLeft = diffMS;

        // const days = parseInt(msLeft / (1000 * 3600 * 24)); 
        // msLeft -= days * (1000 * 3600 * 24);                
        // const hours = parseInt(msLeft / (1000 * 3600));
        // msLeft -= hours * (1000 * 3600);
        // const minutes = parseInt(msLeft / (1000 * 60));
        // msLeft -= minutes * (1000 * 60);
        // const seconds = parseInt(msLeft / 1000);

        // VER WITH %
        const days = Math.floor(diffMS / (1000 * 3600 * 24));
        const hours = Math.floor(diffMS / (1000 * 3600)) % 24;
        const minutes = Math.floor(diffMS / (1000 * 60)) % 60;
        const seconds = Math.floor(diffMS / 1000) % 60;

        return {
            totalMS: diffMS,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function timeStr(n) {
        const str = `0${n}`;
        return str.slice(-2);
    }

    function initTimer() {

        const timerElem = document.querySelector('.timer');
        const daysElem = timerElem.querySelector('#days');
        const hoursElem = timerElem.querySelector('#hours');
        const minutesElem = timerElem.querySelector('#minutes');
        const secondsElem = timerElem.querySelector('#seconds');
    
        const timerId = setInterval(setTimer, 1000);

        function setTimer() {
    
            const diff = dateDiff(deadline);
    
            if (diff.totalMS < 0) {
                clearInterval(timerId);
            }
    
            daysElem.textContent = timeStr(diff.days);
            hoursElem.textContent = timeStr(diff.hours);
            minutesElem.textContent = timeStr(diff.minutes);
            secondsElem.textContent = timeStr(diff.seconds);
        }
        setTimer(); // INITIAL CALL TO NOT TO WAIT 1 SECOND BEFORE TIMER KICKIN
    }
    initTimer();


    // MODAL WINDOW -----------------------------------------------------------

    const modalContactUs = document.querySelector('.modal');
    const modalContactUsOpenBtns = document.querySelectorAll('[data-modal]');
    // const modalContactUsCloseBtn = document.querySelector('[data-close]');

    function openContactUs() {
        modalContactUs.classList.add('show');
        modalContactUs.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // PREVENT PAGE TO SCROLL IN BACKGROUND
        clearInterval(modalTimerId);
    }

    function closeContactUs() {
        modalContactUs.classList.add('hide');
        modalContactUs.classList.remove('show');
        document.body.style.overflow = '';
    }

    
    // MODAL WINDOW BUTTON EVENTS

    modalContactUsOpenBtns.forEach(b => {
        b.addEventListener('click', openContactUs);
    });

    // modalContactUsCloseBtn.addEventListener('click', closeContactUs);

    
    // MODAL WINDOW CLOSE EVENTS

    // OUTSIDE AREA CLICK (+ CLOSE X BUTTON)
    modalContactUs.addEventListener('click', event => {
        if (event.target == modalContactUs || event.target.getAttribute('data-close') == '') {
            closeContactUs();
        }
    });

    // ESC KEY 
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modalContactUs.classList.contains('show')) {
            closeContactUs();
        }
    });


    // MODAL WINDOW AUTO OPEN BY TIMEOUT

    const modalTimerId = setTimeout(openContactUs, 60000);


    // MODAL WINDOW AUTO OPEN BY SCROLL TO THE END

    function showContactUsByScroll() {

        let sum = window.scrollY + document.documentElement.clientHeight;
        // if (Math.round(sum) >= document.documentElement.scrollHeight) {    
        if (sum >= document.documentElement.scrollHeight - 1) {        
            openContactUs();
            window.removeEventListener('scroll', showContactUsByScroll);    
        }
    }

    window.addEventListener('scroll', showContactUsByScroll);


    // MENU CARDS -------------------------------------------------------------

    class MenuItem {

        constructor(title, description, price, img, imgAltDesc) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.img = img;
            this.imgAltDesc = imgAltDesc;
        }

        render() {
            return `
            <div class="menu__item">
                <img src="${this.img}" alt="${this.imgAltDesc}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
            `;
        }
    }

    const menuContainer = document.querySelector('.menu__field .container');

    menuContainer.innerHTML = '';

    fetch('http://127.0.0.1:8080/food/menu')
        .then(request => request.json())
        .then(arr => {
            arr
                .map(({title, description, price, img, imgAltDesc}) => new MenuItem(title, description, price, img, imgAltDesc))
                .forEach(item => {
                    menuContainer.innerHTML += item.render();
                });
        });


    // FORMS ------------------------------------------------------------------

    const callMeForms = document.querySelectorAll('form');
    callMeForms.forEach(form => postForm(form));

    function postForm(form) {

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };

        function loadingMessage(text) {
            const elem = document.createElement('img');
            elem.src = text;
            elem.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.append(elem);
            form.insertAdjacentElement('afterend', elem);
            return elem;
        }

        form.addEventListener('submit', event => {

            event.preventDefault();

            const loadingOutput = loadingMessage(message.loading);

            const body = Object.fromEntries(new FormData(form).entries());

            // const request = new XMLHttpRequest();
            // request.open('POST', 'http://127.0.0.1:8080/food/call-me');
            // request.setRequestHeader('Content-Type', 'Application/json');
            // request.send(JSON.stringify(body));

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         showThanksModal(message.success);
            //         form.reset();                    
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            //     loadingOutput.remove();
            // });
            // request.addEventListener('error', () => {
            //     showThanksModal(message.failure);
            //     if (loadingOutput) {
            //         loadingOutput.remove();
            //     }
            // });            

            fetch('http://127.0.0.1:8080/food/call-me', {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(body)
            }).then(() => {
                showThanksModal(message.success);
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
                loadingOutput.remove();
            });
        });
    }

    function showThanksModal(message) {

        const origModal = document.querySelector('.modal__dialog');
        origModal.classList.add('hide');
        openContactUs();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            closeContactUs();
            thanksModal.remove();
            origModal.classList.remove('hide');
        }, 2000);
    }


    // SLIDES -----------------------------------------------------------------

    const slideArr = [
        {
            src: 'img/slider/food-12.jpg',
            alt: 'food-12'
        },
        {
            src: 'img/slider/olive-oil.jpg',
            alt: 'olive-oil'
        },
        {
            src: 'img/slider/paprika.jpg',
            alt: 'paprika'
        },
        {
            src: 'img/slider/pepper.jpg',
            alt: 'pepper'
        },
    ];

    // function slider(data) {

    //     function renderSlides(data) {

    //         const slideWrapper = document.querySelector('.offer__slider-wrapper');
    //         slideWrapper.innerHTML = '';
    //         data.forEach(item => {
    //             slideWrapper.innerHTML += `
    //                 <div class="offer__slide hide">
    //                     <img src="${item.src}" alt="${item.alt}">
    //                 </div>
    //             `;
    //         });
    //         return slideWrapper.querySelectorAll('.offer__slide');
    //     }

    //     const slides = renderSlides(data);

    //     const slidePrev = document.querySelector('.offer__slider-prev'); 
    //     const slideNext = document.querySelector('.offer__slider-next'); 
    //     const slideNumCurrent = document.querySelector('.offer__slider-counter #current'); 
    //     const slideNumTotal = document.querySelector('.offer__slider-counter #total'); 

    //     const total = slides.length;
    //     let current = 1;

    //     slideNumTotal.textContent = numStr(total);

    //     function counterSet() {
    //         if (current > total) current = 1;
    //         if (current < 1) current = total;
    //         slideNumCurrent.textContent = numStr(current);
    //         slides.forEach(item => item.style.display = 'none');
    //         slides[current-1].style.display = 'block';
    //     }
    //     counterSet();

    //     function next() {
    //         current++;
    //         counterSet();
    //     }

    //     function prev() {
    //         current--;
    //         counterSet();
    //     }

    //     function numStr(n) {
    //         return `00${n}`.slice(-2);
    //     }

    //     slidePrev.addEventListener('click', prev);
    //     slideNext.addEventListener('click', next);
    // }
    // slider(slideArr);

    //

    function coolSlider(data) {

        const slidePrev = document.querySelector('.offer__slider-prev'); 
        const slideNext = document.querySelector('.offer__slider-next'); 
        const slideNumCurrent = document.querySelector('.offer__slider-counter #current'); 
        const slideNumTotal = document.querySelector('.offer__slider-counter #total'); 

        // IMPORTANT SLIDER STYLES

        const slideWrapper = document.querySelector('.offer__slider-wrapper');
        const width = window.getComputedStyle(slideWrapper).width;
        slideWrapper.style.overflow = 'hidden';

        const slideInner = document.querySelector('.offer__slider-inner');
        slideInner.style.width = 100 * data.length + '%';
        slideInner.style.display = 'flex';
        slideInner.style.transition = '0.5s all';

        function renderSlides() {

            slideInner.innerHTML = '';
            data.forEach(item => {
                slideInner.innerHTML += `
                    <div class="offer__slide" style="width: ${width}">
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                `;
            });
            return slideInner.querySelectorAll('.offer__slide');
        }

        const slides = renderSlides();

        const total = slides.length;
        let current = 1;

        slideNumTotal.textContent = numStr(total);

        function counterSet() {
            if (current > total) current = 1;
            if (current < 1) current = total;
            slideNumCurrent.textContent = numStr(current);
            // SLIDING HERE
            const offset = (current - 1) * parseInt(width);
            slideInner.style.transform = `translateX(-${offset}px)`;
        }
        counterSet();

        function next() {
            current++;
            counterSet();
        }

        function prev() {
            current--;
            counterSet();
        }

        function numStr(n) {
            return `00${n}`.slice(-2);
        }

        slidePrev.addEventListener('click', prev);
        slideNext.addEventListener('click', next);
    }
    coolSlider(slideArr);












});
