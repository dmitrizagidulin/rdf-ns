'use strict'

module.exports = rdfNamespace

/**
 * Usage:
 *
 *   ```
 *   var rdf = require('rdflib')
 *   var ns = require('rdf-ns')(rdf)
 *
 *   var rdfs = ns.base('http://www.w3.org/2000/01/rdf-schema#')
 *   var seeAlso = rdfs('seeAlso')
 *   console.log(seeAlso)
 *   // -> NamedNode(<http://www.w3.org/2000/01/rdf-schema#seeAlso>)
 *   ```
 *
 * @class Namespace
 * @constructor
 * @param rdf {RDF} RDF library such as rdflib.js or rdf-ext (for dep injection)
 */
function Namespace (rdf) {
  this.rdf = rdf
}

/**
 * @param namespaceIri {String} Namespace IRI
 * @return {Function}
 */
Namespace.prototype.base = function base (namespaceIri) {
  var self = this
  /**
   * @param term {String} IRI fragment
   * @return {String|NamedNode}
   */
  return function fullIri (term) {
    if (self.rdf) {
      return self.rdf.namedNode(namespaceIri + term)
    } else {
      return namespaceIri + term
    }
  }
}

function rdfNamespace (rdf) {
  return new Namespace(rdf)
}
