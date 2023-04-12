function slides() {

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

    //

    function coolSlider(data) {

        // ALL DOTS PREREQUISITE

        const slideOuter = document.querySelector('.offer__slider');
        slideOuter.style.position = 'relative';

        const dots = document.createElement('ol');
        dots.classList.add('carousel-indicators');

        slideOuter.append(dots);

        data.forEach((item,idx) => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            dot.setAttribute('data-slide-to', idx + 1);
            dots.append(dot);
        });
        const dotArr = slideOuter.querySelectorAll('[data-slide-to]');

        //

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
            // DOTS
            dotArr.forEach(item => item.style.opacity = 0.5);
            dotArr[current-1].style.opacity = 1;
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

        // ON DOT CLICK
        dotArr.forEach(item => {
            item.addEventListener('click', () => {
                current = item.getAttribute('data-slide-to');
                counterSet();
            });
        });
    }
    coolSlider(slideArr);
}
module.exports = slides;