function forms() {

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
}
module.exports = forms;