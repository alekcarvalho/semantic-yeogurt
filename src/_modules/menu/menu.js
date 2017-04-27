(function(window,document) {

'use strict';

// Constructor
var Menu = function() {
  this.name = 'menu';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Menu;


})(window,document);
