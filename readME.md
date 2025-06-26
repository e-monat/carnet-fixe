# 📖 Description du projet

Mon Carnet d’Aventures est une application mobile développée avec Ionic Vue. Elle permet à l’utilisateur d’ajouter, consulter, modifier et supprimer des récits personnels appelés aventures. Chaque aventure peut être classée par catégorie, visualisée sous forme de carte, et les données sont stockées localement.

## 🚀 Fonctionnalités principales

-Ajout d’une aventure avec formulaire animé

-Affichage des aventures en cartes avec animations

-Vue détaillée d’une aventure (modification et suppression)

-Personnalisation du thème (paramètres)

-Réinitialisation complète des données

-Navigation fluide entre les pages

-Gestion d’état centralisée avec state.js

## Structure du projet
```
src/
├── components/
│   └── AventureCard.vue
├── state/
│   └── state.js
└── views/
├── Accueil.vue
├── AjouterAventure.vue
├── ListeAventures.vue
├── DetailsAventure.vue
└── Parametres.vue
```
## ⚙️ Installation et démarrage

1: npm install

2: ionic serve

## ✅ Technologies utilisées

-Ionic Framework avec Vue.js

-Composants Ionic (ion-card, ion-button, ion-input…)

-Routing avec Vue Router

-Transitions & animations personnalisées avec createAnimation()

-Stockage local via gestion d’état (state.js) 