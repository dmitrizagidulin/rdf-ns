## RDF Namespace

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

```javascript
var rdfs = Namespace('http://www.w3.org/2000/01/rdf-schema#')

var seeAlso = rdfs('seeAlso')
var subClassOf = rdfs('subClassOf')  // resolves to plain strings

console.log(seeAlso)  // -> 'http://www.w3.org/2000/01/rdf-schema#seeAlso'
```
