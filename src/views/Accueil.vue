<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Mon Carnet d’Aventures</h1>
      <ion-button router-link="/ajouter" expand="block">Ajouter une aventure</ion-button>
      <ion-button router-link="/liste" expand="block">Voir les aventures</ion-button>
      <ion-button router-link="/parametres" expand="block">Paramètres</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue'
</script>
