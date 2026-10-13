const fs=require('fs'),assert=require('assert');
const s=fs.readFileSync('contact.html','utf8');
assert.match(s,/Je suis visiteur/);assert.match(s,/Je représente/);
assert.match(s,/mailto:tresors.atlas.maroc@outlook.com/);
const links=[...s.matchAll(/href="(https:\/\/wa.me\/[^"]+)"/g)].map(m=>new URL(m[1]));
assert(links.length>=3);for(const u of links){assert.equal(u.pathname,'/212655370467');assert(u.searchParams.get('text'));}
assert(new Set(links.map(u=>u.searchParams.get('text'))).size>=2);
assert.doesNotMatch(s,/localStorage|sessionStorage|<form[ >]|XMLHttpRequest/);
console.log('Contact: coordonnées, deux messages et absence de collecte OK');
