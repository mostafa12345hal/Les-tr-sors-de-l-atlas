Les Trésors de l’Atlas
Présentation du MVP

Les Trésors de l’Atlas est un MVP statique qui présente des produits artisanaux marocains et prépare la mise en relation avec des coopératives, en commençant par le Moyen Atlas. Cette version valide le parcours de découverte et les outils de prospection avant toute ouverture de commandes.

Fonctionnalités
vitrine publique et catalogue de démonstration ;
recherche et filtres par catégorie ;
sélection locale d’articles et récapitulatif à copier ;
espace local de prospection des coopératives ;
recherche, filtres, notes, ajout et retrait de pistes ;
import et export CSV ;
répertoire public des coopératives validées, volontairement vide au démarrage ;
page de contact statique qui prépare un message sans transmettre ni stocker les données saisies ;
contrôle automatique exigeant une identité vérifiée et une autorisation documentée avant publication.

Les produits, visuels et descriptions sont des exemples provisoires. Il n’y a ni prix confirmé, ni stock, ni commande, ni paiement en ligne.

Architecture

Le projet est une application statique en HTML, CSS et JavaScript natif. Il ne comporte actuellement ni serveur applicatif, ni base de données, ni authentification.

index.html : vitrine et catalogue de démonstration ; la sélection est conservée localement sous la clé atlas-selection.
partenaires.html : outil local de prospection et de suivi.
cooperatives.html : répertoire public ; seules des fiches vérifiées et autorisées pourront y être publiées.
contact.html : préparation locale d’un message de contact, sans envoi ni stockage serveur.
data/cooperatives.js : source de la collection publique, actuellement vide.
data/cooperatives-candidates-template.csv : tableau vierge de suivi, exclu de l’artefact public.
docs/ : architecture, tests, limites et consignes de publication.

Les informations enregistrées par le navigateur ne sont pas synchronisées entre appareils et ne sont pas transmises à un serveur.

Prérequis
un navigateur moderne ;
Node.js pour exécuter les tests ;
aucune dépendance npm ni installation obligatoire.
Lancement local

Depuis la racine du dépôt, ouvrir index.html dans un navigateur. Pour servir le projet en HTTP :

python3 -m http.server 8000

Puis ouvrir http://localhost:8000/. Les pages principales sont index.html, cooperatives.html et partenaires.html.

Tests

Depuis la racine du dépôt :

node tests/smoke-test.js
node tests/cooperatives-test.js
node tests/contact-test.js

Le premier test vérifie la logique existante de prospection ; le second vérifie statiquement la collection publique vide et son état initial. Ces tests doivent être complétés par une vérification manuelle de la navigation, du responsive, de l’accessibilité et du stockage local.

Limites

Ce MVP ne fournit pas encore de compte utilisateur, de rôles, de backend, de base de données, de synchronisation, de paiement, de facturation, de livraison, de suivi de commande ou de formulaire traité par un serveur. localStorage est limité au navigateur courant et peut être effacé. Les données de démonstration ne constituent pas des offres commerciales. La conformité juridique, fiscale, contractuelle et la protection des données restent à définir avant toute mise en production.

Déploiement GitHub Pages

Le projet étant statique, il peut être publié avec GitHub Pages :

ouvrir Settings → Pages ;
choisir Deploy from a branch ;
sélectionner la branche publiée, par exemple main après revue et fusion ;
sélectionner le dossier /(root) ;
enregistrer puis vérifier l’URL publique et les liens relatifs.

GitHub Pages ne fournit ni serveur applicatif, ni base de données, ni traitement de formulaire, ni paiement. Vérifier notamment index.html, cooperatives.html et partenaires.html après publication.

Sécurité des données publiques

Ne publier dans data/cooperatives.js que des informations vérifiées, nécessaires et destinées à être publiques, après accord explicite de la coopérative. Ne jamais y ajouter de données personnelles, coordonnées privées, secrets, identifiants, informations non vérifiées ou données issues d’un contact confidentiel. Les photos, textes et coordonnées doivent disposer d’une source et d’une autorisation de publication. Une fiche publique doit être retirée ou corrigée dès qu’elle devient inexacte ou que son autorisation n’est plus valable.

Kit opérationnel
Offre de partenariat
Questionnaire coopérative
Fiche produit à valider
Brouillon d’accord pilote
Plan pilote sur 30 jours
Modèle de catalogue produits
Registre des commissions

Ces modèles ne remplacent pas une vérification juridique, fiscale et comptable adaptée au vendeur, au canal de paiement et aux pays visés.
