// Public cooperative records intentionally start empty.
// Add an entry only after identity, authorization, contact details, images,
// description, and source have been verified and documented.
const cooperatives = [];

const cooperativeDirectoryState = {
  status: 'empty',
  message: 'Aucune coopérative validée n’est encore publiée. Les fiches seront ajoutées après vérification et accord de publication.'
};

if (typeof globalThis !== 'undefined') {
  globalThis.cooperatives = cooperatives;
  globalThis.cooperativeDirectoryState = cooperativeDirectoryState;
}
