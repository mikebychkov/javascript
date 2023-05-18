
const clearActive = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(nav => {
        nav.classList.remove('active');
    });
}

const setActive = el => {
    clearActive();
    el.classList.add('active');
};

const activeEvent = e => {
    setActive(e.target);
}

const magnetLinks = {};
const traceActiveNavLink = () => {
    
    const anchors = document.querySelectorAll('.main a[href^="#"]');
    anchors.forEach(el => {
        const viewportOffset = el.getBoundingClientRect();
        if (viewportOffset.top > -100 && viewportOffset.top < 100) {
            if (!magnetLinks[el.id]) {
                window.location.href = el;
                magnetLinks[el.id] = true;
            }
            const elToActivate = document.querySelector(`.nav-link[href="#${el.id}"]`);
            setActive(elToActivate);
        } else {
            magnetLinks[el.id] = false;
        }
    });
};

window.addEventListener('scroll', traceActiveNavLink);

const goToHash = () => {
    const hash = window.location.hash;
    if (hash) {
        const anchor = document.querySelector(`.main a[href="${hash}"]`);
        window.location.href = anchor;
    }
}

setTimeout(() => {

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(nav => {
      nav.addEventListener('click', activeEvent);
  });
  goToHash();
  traceActiveNavLink();
  
}, 200);