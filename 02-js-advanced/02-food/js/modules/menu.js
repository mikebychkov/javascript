function menu() {

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
    
}
// module.exports = menu;
export default menu;