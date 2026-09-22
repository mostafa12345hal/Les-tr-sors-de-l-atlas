const fs = require('fs');
const assert = require('assert');


const source = fs.readFileSync('data/cooperatives.js', 'utf8');
assert.match(source, /const cooperatives\s*=\s*\[\s*\]/, 'The public collection must remain empty until an authorization is obtained');
assert.match(source, /status:\s*['"]empty['"]/, 'The empty state must be explicit');
assert.match(source, /Aucune coopérative validée/, 'The empty-state message must be present');
assert.match(source, /identityVerified\s*===\s*true/, 'Identity verification must be required');
assert.match(source, /authorized\s*===\s*true/, 'Publication authorization must be required');
assert.match(source, /authorizationReference/, 'An authorization reference must be required');
assert.match(source, /sourceUrl/, 'A verification source must be required');


const page = fs.readFileSync('cooperatives.html', 'utf8');
assert.match(page, /data\/cooperatives\.js/, 'The public page must load the data file');
assert.match(page, /Aucune coopérative validée n’est encore publiée/, 'The public page must show the empty state');
assert.doesNotMatch(page, /mailto:[^"']+@[^"']+/, 'No unverified email address may be published');
assert.doesNotMatch(page, /partenaires\.html/, 'The public directory must not link to the private tracker');

const contact = fs.readFileSync('contact.html', 'utf8');
assert.match(contact, /Il n’envoie aucune donnée/, 'The contact page must state that it sends no data');
assert.doesNotMatch(contact, /<form[\s>]/i, 'The static contact page must not imply server-side submission');

const workflow = fs.readFileSync('.github/workflows/deploy-pages.yml', 'utf8');
assert.match(workflow, /cp contact\.html _site\/contact\.html/, 'The public contact page must be deployed');
assert.doesNotMatch(workflow, /cp partenaires\.html/, 'The private tracker must not be deployed');
assert.match(workflow, /test ! -e _site\/partenaires\.html/, 'The deployment must assert that the private tracker is absent');


console.log('Static cooperative checks passed.');
