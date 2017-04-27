(function(window,document,$) {

  //Functions

  'use strict';

  function myFunc () {
    console.log('Bem vindo!');
  }

  function mySecond () {
    console.log('Bem vindo again!');
  }

  function myClick () {
    var logoClick = document.querySelector('[data-js="click-logo"]');
    logoClick.addEventListener('click',function() {
      console.log('clicou certinho!');
    }, false);
  }


//Exporta as funções para serem importadas
module.exports.myFunc = myFunc;
module.exports.mySecond = mySecond;
module.exports.myClick = myClick;


})(window,document,jQuery);
