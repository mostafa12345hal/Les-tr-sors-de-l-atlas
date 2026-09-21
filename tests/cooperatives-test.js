const fs = require('fs');
const assert = require('assert');

const source = fs.readFileSync('data/cooperatives.js', 'utf8');
assert.match(source, /const cooperatives\s*=\s*\[\s*\]/, 'The public collection must start empty');
assert.match(source, /status:\s*['"]empty['"]/, 'The empty state must be explicit');
assert.match(source, /Aucune coopérative validée/, 'The empty-state message must be present');

const page = fs.readFileSync('cooperatives.html', 'utf8');
assert.match(page, /data\/cooperatives\.js/, 'The public page must load the data file');
assert.match(page, /Aucune coopérative validée n’est encore publiée/, 'The public page must show the empty state');
assert.doesNotMatch(page, /mailto:[^"']+@[^"']+/, 'No unverified email address may be published');

console.log('Static cooperative checks passed.');
