<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" @click="changerTheme">Changer le thème</ion-button>
      <ion-button expand="block" color="danger" @click="reinitialiser">Réinitialiser les aventures</ion-button>
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
  IonButton,
  IonBackButton,
} from '@ionic/vue'
import { state } from '../state/state'

function changerTheme() {
  document.body.classList.toggle('dark')
}

function reinitialiser() {
  state.reinitialiserAventures()
}
</script>
