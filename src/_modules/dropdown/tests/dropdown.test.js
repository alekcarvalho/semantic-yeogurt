/*eslint no-unused-expressions:0 */
'use strict';

var Dropdown = require('../dropdown');

describe('Dropdown View', function() {

  beforeEach(function() {
    this.dropdown = new Dropdown();
  });

  it('Should run a few assertions', function() {
    expect(this.dropdown).to.exist;
  });

});
