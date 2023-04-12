function modal() {

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
}
module.exports = modal;