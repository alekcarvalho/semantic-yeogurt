// Main javascript entry point
// Should handle bootstrapping/starting application

var libs = require('../_scripts/libs');
var modules = require('../_scripts/modules');
var functions = require('../_scripts/functions');
var semantic_functions = require('../_scripts/semantic-functions');

// Ativa a logica das funções exportadas em functions.js
functions.myFunc();
functions.mySecond();
functions.myClick();
