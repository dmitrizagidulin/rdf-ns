'use strict'

module.exports = rdfNamespace

function rdfNamespace (namespaceUri) {
  return function (term) {
    return namespaceUri + term
  }
}
