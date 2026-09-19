# Les Trésors de l’Atlas

Prototype mobile d’une vitrine destinée à présenter des produits de **coopératives artisanales marocaines**, en commençant par le **Moyen Atlas**.

## Modèle envisagé

Le projet consiste à contacter des coopératives, convenir avec elles des produits à promouvoir et percevoir un **pourcentage sur les ventes réalisées** selon un accord préalable. Aucune coopérative n’est encore présentée comme partenaire dans ce prototype. Le taux de commission et les modalités de vente restent à négocier.

## Ouvrir les outils

- `index.html` : vitrine de démonstration.
- `partenaires.html` : tableau de suivi des coopératives, utilisable sur téléphone. Onze pistes y sont préchargées : huit issues de l’[annuaire de l’Ensemble artisanal d’Azrou](https://azrouartisana.wixsite.com/francais/coopratives-de-la-province) et trois fiches repérées sur [Anou](https://www.theanou.com/). Il faut vérifier leur activité actuelle, leur identité et les modalités de vente déjà en place avant tout contact.

Ouvrez les fichiers dans un navigateur. Aucun serveur ni dépendance n’est nécessaire. Les notes du tableau sont enregistrées **uniquement dans le navigateur utilisé** : elles ne sont pas partagées entre appareils. Exportez régulièrement le CSV et gardez-le dans un espace privé. N’ajoutez pas de coordonnées privées ou de notes confidentielles au dépôt GitHub public.

## Fonctions de la vitrine

Catalogue de trois **exemples**, recherche, filtres, sélection locale et récapitulatif à copier. Les articles, visuels et descriptions sont provisoires. Aucun prix, stock, partenaire, commande ou paiement n’est proposé.

## Fonctions du suivi

Ajout de pistes, recherche, filtre par état, notes locales, retrait, export et import CSV. L’import ajoute uniquement les nouvelles pistes, ignore les doublons de nom et ville, et conserve les notes déjà présentes. Exportez sur le premier appareil, puis importez ce fichier sur le second. Gardez le CSV dans un espace privé. Une proposition de premier message est disponible comme brouillon. **Aucun message n’est envoyé automatiquement.**

## Vérification technique

Depuis la racine du dépôt, lancez `node tests/smoke-test.js` pour contrôler la logique de recherche, sélection, ajout de pistes, filtrage et conservation locale. Ce test simule la page ; il ne remplace pas un essai visuel dans un navigateur sur téléphone.

## Déroulement du premier partenariat

1. Vérifier l’existence, l’activité, les produits et un canal professionnel récent pour chaque coopérative.
2. Adapter la proposition et convenir d’un échange, puis recueillir les besoins et contraintes de la coopérative.
3. Définir par écrit les produits et visuels autorisés, le prix, la commission et son versement, le suivi des ventes, le stock, la livraison, les retours et les réclamations.
4. Préparer des fiches produit avec photos autorisées, dimensions, matières, provenance, délais et disponibilité confirmés.
5. Tester tout le parcours avant d’ouvrir des commandes ou un paiement.

Le projet est actuellement une **démonstration**, pas une boutique ouverte aux commandes.


## Kit opérationnel

- [Offre de partenariat](docs/01-offre-partenariat.md)
- [Questionnaire coopérative](docs/02-questionnaire-cooperative.md)
- [Fiche produit à valider](docs/03-fiche-produit.md)
- [Brouillon d’accord pilote](docs/04-accord-pilote-brouillon.md)
- [Plan pilote sur 30 jours](docs/05-plan-pilote-30-jours.md)
- [Modèle de catalogue produits](data/produits-modele.csv)
- [Registre des commissions](data/commissions-modele.csv)

Ces modèles ne remplacent pas une vérification juridique, fiscale et comptable adaptée au vendeur, au canal de paiement et aux pays visés.
