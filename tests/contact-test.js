const fs = require('fs');
const assert = require('assert');

const page = fs.readFileSync('contact.html', 'utf8');

assert.match(page, /Je représente une coopérative/, 'The cooperative contact path must be present');
assert.match(page, /Je recherche un produit/, 'The buyer contact path must be present');
assert.match(page, /pièce d’identité/, 'A sensitive-data warning must be visible');
assert.match(page, /navigator\.clipboard\.writeText/, 'The prepared message must be copyable');
assert.doesNotMatch(page, /localStorage|sessionStorage/, 'Contact details must not be stored locally');
assert.doesNotMatch(page, /fetch\s*\(|XMLHttpRequest/, 'The static contact page must not transmit data');

console.log('Static contact checks passed.');
