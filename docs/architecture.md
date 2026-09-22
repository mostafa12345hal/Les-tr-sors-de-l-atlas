# Architecture

## Vue d’ensemble

Le dépôt est un prototype statique en HTML, CSS et JavaScript natif. Il n’a ni serveur applicatif, ni base de données, ni authentification, ni paiement.

## Pages

- `index.html` : vitrine publique et catalogue de démonstration. La sélection reste locale dans le navigateur via la clé `atlas-selection`.
- `partenaires.html` : outil local de prospection. Il conserve ses clés `localStorage`, ses sélecteurs et son import/export CSV.
- `cooperatives.html` : répertoire public. Il ne publie actuellement aucune coopérative tant qu’une fiche n’est pas vérifiée et autorisée.

## Données

- `data/cooperatives.js` contient la collection publique, actuellement vide, et son état vide explicite.
- `data/produits-modele.csv` et `data/commissions-modele.csv` sont des modèles métier, pas une base de données.
- Les données de suivi de `partenaires.html` restent dans le fichier existant pour cette phase, afin de préserver `tests/smoke-test.js`.

## Trajectoire de séparation

La séparation des données doit rester progressive : créer d’abord des sources publiques versionnées, vérifier les données, puis extraire la logique de rendu. Toute future fiche devra disposer d’un identifiant stable, d’une source vérifiée et d’une autorisation de publication. Les informations personnelles et les coordonnées privées ne doivent jamais être ajoutées aux données publiques.

## Flux actuel

L’utilisateur ouvre une page statique, le JavaScript rend l’interface et le navigateur conserve certaines informations localement. Rien n’est transmis à un serveur. Le formulaire ou un futur contact ne doit donc pas être présenté comme un canal transactionnel tant qu’aucun service d’envoi fiable n’est configuré.
