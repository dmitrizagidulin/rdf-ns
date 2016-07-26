'use strict'

var test = require('tape')
var ns = require('../index')()

test('RDF Namespace test', function (t) {
  var rdfs = ns.base('http://www.w3.org/2000/01/rdf-schema#')
  var seeAlso = rdfs('seeAlso')
  t.equal(seeAlso, 'http://www.w3.org/2000/01/rdf-schema#seeAlso')
  t.end()
})
