import { createApp } from './lib/vue.esm-browser.js';
import { data } from './data.js' ;
import { methods } from './methods.js' ;


  createApp({
    data : e=> data ,
    methods : methods ,
  }).mount('#app');

  

