window.$ = window.jQuery = require('jquery');

require('./main');

import 'glider-js';

// import 'alpinejs';
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
 
window.Alpine = Alpine

Alpine.plugin(focus)
Alpine.start()

// import sal from 'sal.js';


