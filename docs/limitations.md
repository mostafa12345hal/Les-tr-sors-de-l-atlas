# Limites du prototype

Cette phase documente et structure le prototype ; elle ne le transforme pas encore en marketplace transactionnelle.

- Aucun backend, compte utilisateur ou rôle d’accès.
- Aucune base de données ni synchronisation entre appareils.
- `localStorage` est local au navigateur et peut être perdu ou non partagé.
- Aucun panier de commande, paiement, facturation ou suivi logistique réel.
- Les produits de `index.html` sont des exemples de démonstration et ne sont pas des offres disponibles.
- Le répertoire des coopératives est volontairement vide tant qu’aucune fiche n’est vérifiée et autorisée.
- GitHub Pages ne peut pas recevoir ou traiter directement un formulaire.
- Les tests sont principalement smoke/statics et ne couvrent pas tous les navigateurs, l’accessibilité complète, la sécurité ou la performance.
- Les modèles CSV ne constituent pas un registre comptable ou contractuel.

Avant toute mise en production, il faudra notamment définir les vérifications d’identité, les autorisations de publication, le consentement, la conformité juridique, la protection des données et l’architecture serveur.
