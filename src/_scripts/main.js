// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

//var $ = require('jquery');
var semantic = require('../../semantic/dist/semantic');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
//conteudo aqui

//Accordion
$('.ui.accordion').accordion();

//Dropdown
$('.ui.dropdown').dropdown();

});
