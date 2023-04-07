'use strict';

document.addEventListener('DOMContentLoaded', () => {


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
    tabsContent[i].classList.add('tabheader__item_active');
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









});