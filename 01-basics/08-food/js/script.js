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
    const modalContactUsCloseBtn = document.querySelector('[data-close]');

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

    modalContactUsCloseBtn.addEventListener('click', closeContactUs);

    
    // MODAL WINDOW CLOSE EVENTS

    modalContactUs.addEventListener('click', event => {
        if (event.target == modalContactUs) {
            closeContactUs();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modalContactUs.classList.contains('show')) {
            closeContactUs();
        }
    });


    // MODAL WINDOW AUTO OPEN BY TIMEOUT

    const modalTimerId = setTimeout(openContactUs, 5000);


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

    const menuDB = [];

    class MenuItem {

        constructor(title, description, price, img, imgAltDesc) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.img = img;
            this.imgAltDesc = imgAltDesc;
        }
    }

    menuDB.push(new MenuItem(
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        'img/tabs/vegy.jpg',
        'vegy'
    ));

    menuDB.push(new MenuItem(
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        'img/tabs/elite.jpg',
        'elite'
    )); 

    menuDB.push(new MenuItem(
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        'img/tabs/post.jpg',
        'post'
    )); 

    menuDB.push(new MenuItem(
        'Меню "Бургер"',
        'Меню "Бургер" - тожи узбекская национальная бургери не блекстар и не максдолнадс ванучий.',
        200,
        'img/tabs/hamburger.jpg',
        'hamburger'
    )); 

    menuDB.push(new MenuItem(
        'Меню "Плов"',
        'Меню "Плов" - хароший чотки узбекски ош-палов настаяший 100% гарантия бор.',
        549,
        'img/tabs/plov.jpg',
        'plov'
    )); 

    
    const menuElem = document.querySelector('.menu__field');
    const menuContainer = menuElem.querySelector('.container');

    menuContainer.innerHTML = '';

    menuDB.forEach(item => {

        menuContainer.innerHTML += `
        <div class="menu__item">
            <img src="${item.img}" alt="${item.imgAltDesc}">
            <h3 class="menu__item-subtitle">${item.title}</h3>
            <div class="menu__item-descr">${item.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${item.price}</span> грн/день</div>
            </div>
        </div>
        `;
    });


});
