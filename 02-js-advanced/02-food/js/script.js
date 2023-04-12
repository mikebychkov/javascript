'use strict';

import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import menu from './modules/menu';
import forms from './modules/forms';
import slides from './modules/slides';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', () => {

    // const tabs = require('./modules/tabs');
    // const timer = require('./modules/timer');
    // const modal = require('./modules/modal');
    // const menu = require('./modules/menu');
    // const forms = require('./modules/forms');
    // const slides = require('./modules/slides');
    // const calc = require('./modules/calc');

    tabs();
    timer();
    modal();
    menu();
    forms();
    slides();
    calc();

});
