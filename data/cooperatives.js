// Public cooperative records intentionally start empty.
// A record may be published only after documented identity verification and
// explicit authorization covering its text, contact channel and media.
const cooperatives = [];

const cooperativeDirectoryState = {
  status: 'empty',
  message: 'Aucune coopérative validée n’est encore publiée. Les fiches seront ajoutées après vérification et accord de publication.'
};

function isPublishableCooperative(record) {
  if (!record || typeof record !== 'object') return false;

  const requiredText = ['id', 'name', 'city', 'province', 'category', 'description'];
  const hasRequiredText = requiredText.every(
    key => typeof record[key] === 'string' && record[key].trim().length > 0
  );
  const publication = record.publication || {};

  return hasRequiredText &&
    publication.identityVerified === true &&
    publication.authorized === true &&
    /^\d{4}-\d{2}-\d{2}$/.test(publication.verifiedAt || '') &&
    typeof publication.sourceUrl === 'string' &&
    /^https:\/\//.test(publication.sourceUrl) &&
    typeof publication.authorizationReference === 'string' &&
    publication.authorizationReference.trim().length > 0;
}

const publishedCooperatives = cooperatives.filter(isPublishableCooperative);

if (typeof globalThis !== 'undefined') {
  globalThis.cooperatives = cooperatives;
  globalThis.publishedCooperatives = publishedCooperatives;
  globalThis.isPublishableCooperative = isPublishableCooperative;
  globalThis.cooperativeDirectoryState = cooperativeDirectoryState;
}
