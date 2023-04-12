'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs');
    const timer = require('./modules/timer');
    const modal = require('./modules/modal');
    const menu = require('./modules/menu');
    const forms = require('./modules/forms');
    const slides = require('./modules/slides');
    const calc = require('./modules/calc');

    tabs();
    timer();
    modal();
    menu();
    forms();
    slides();
    calc();

});
