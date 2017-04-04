/*eslint no-unused-expressions:0 */
'use strict';

var Menu = require('../menu');

describe('Menu View', function() {

  beforeEach(function() {
    this.menu = new Menu();
  });

  it('Should run a few assertions', function() {
    expect(this.menu).to.exist;
  });

});
