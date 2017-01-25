## RDF Namespace

[![Greenkeeper badge](https://badges.greenkeeper.io/dmitrizagidulin/rdf-ns.svg)](https://greenkeeper.io/)

Simple helper object for referencing RDF namespaces, library-independent.
Inspired by [RDFLib.js](https://github.com/linkeddata/rdflib.js/).

Instead of:

```javascript
Vocab: {
  'rdfs': {
    'seeAlso': 'http://www.w3.org/2000/01/rdf-schema#seeAlso',
    'subClassOf': 'http://www.w3.org/2000/01/rdf-schema#subClassOf'
  }
}

var seeAlso = Vocab.rdfs.seeAlso
```

Do:

```js
var ns = require('rdf-ns')()
var rdfs = ns.base('http://www.w3.org/2000/01/rdf-schema#')

var seeAlso = rdfs('seeAlso')

console.log(seeAlso)  // -> 'http://www.w3.org/2000/01/rdf-schema#seeAlso'
```

You can also inject an RDF library, and get back `NamedNode` instances.

```js
var rdf = require('rdflib')
var ns = require('rdf-ns')(rdf)
var rdfs = ns.base('http://www.w3.org/2000/01/rdf-schema#')

var seeAlso = rdfs('seeAlso')

console.log(seeAlso)  
// -> NamedNode(<http://www.w3.org/2000/01/rdf-schema#seeAlso>)
```
