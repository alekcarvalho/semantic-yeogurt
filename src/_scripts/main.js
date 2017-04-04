// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

//var $ = require('jquery');
var semantic = require('../../semantic/dist/semantic');
var Menu = require('../_modules/menu/menu');

$(function() {
  new Menu(); // Activate Link modules logic
//conteudo aqui

//Accordion
$('.ui.accordion').accordion();

//Dropdown
$('.ui.dropdown').dropdown();

});
