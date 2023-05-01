window.$ = window.jQuery = require('jquery');

require('./main');

import Splide from '@splidejs/splide';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
window.Splide = Splide
window.AutoScroll = AutoScroll

import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
window.Alpine = Alpine
Alpine.plugin(focus)
Alpine.start()

import sal from 'sal.js';
window.sal = sal

