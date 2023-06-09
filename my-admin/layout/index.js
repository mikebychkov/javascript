
let mainContainer = document.querySelector('.main-container');
let sidebar = document.querySelector('.sidebar');
let sidebarHeader = document.querySelector('.header');
let sidebarContent = document.querySelector('.sidebar-content');
let sidebarBottom = document.querySelector('.sidebar-bottom');

let mainBtnOnClick = e => {

    mainContainer.classList.toggle('side-min');
    sidebar.classList.toggle('sidebar-min');
    sidebarHeader.classList.toggle('header-min');
    sidebarContent.classList.toggle('sidebar-content-min');
    sidebarBottom.classList.toggle('sidebar-bottom-min');
}

let sidebarMainBtn = document.querySelector('.sidebar-main-btn');
sidebarMainBtn.addEventListener('click', mainBtnOnClick);

let rowOnClick = e => {

    let checkbox = e.currentTarget.querySelector('.form-check-input');
    checkbox.checked = !checkbox.checked;
}

let tableRows = document.querySelectorAll('.main .table tbody tr');
tableRows.forEach(r => r.addEventListener('click', rowOnClick));