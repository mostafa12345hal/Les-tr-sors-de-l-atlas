# Développement et tests

## Prérequis

- Un navigateur moderne pour les pages statiques.
- Node.js recommandé pour les tests (`node --version`).
- Aucune installation de dépendance n’est requise : il n’y a pas de `package.json`.

## Vérifications

Depuis la racine du dépôt :

```bash
node tests/smoke-test.js
node tests/cooperatives-test.js
```

Le premier test couvre la logique existante de la page de prospection. Le second effectue des contrôles statiques sur la collection publique vide et sur l’état vide de `cooperatives.html`.

Ces tests ne remplacent pas une vérification manuelle dans un navigateur : navigation, responsive, accessibilité, stockage local et chemins de déploiement doivent aussi être contrôlés.

## Serveur local facultatif

Pour éviter les différences entre `file://` et HTTP, servir la racine avec un serveur statique disponible localement, par exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000/`.

## Règles de compatibilité

Ne pas renommer les sélecteurs DOM, les clés `localStorage` ou les fichiers utilisés par `tests/smoke-test.js`. Ne pas modifier `partenaires.html` ou `tests/smoke-test.js` sans une évolution de test correspondante.
