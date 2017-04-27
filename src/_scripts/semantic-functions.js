(function(window,document,$) {

  'use strict';

//Dropdown
  $('.ui.dropdown').dropdown();

//Modal
  var button = document.querySelector('#open-modal');
  button.addEventListener('click',function() {
    $('.ui.modal').modal('show');
    console.log('clicou');
  },false);

})(window,document,jQuery);
