'use strict';

var expect = require('chai').expect;
var epiviz = require('../bin/epiviz-compiled.js').epiviz;
var typeOf = require('typeof');
var keys = Object.keys || require('object-keys');

describe('#epiviz', function() {
    it('epiviz exists', function() {
        var result = typeOf(epiviz);
        expect(result).to.equal('object');
    });
    it('epiviz Object Keys exists', function() {
        var result = keys(epiviz);
        expect(result.length).to.equal(14);
    });
});