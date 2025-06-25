<template>
  <ion-card @click="voirDetails">
    <ion-card-header>
      <ion-card-title>{{ aventure.titre }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ aventure.description }}<br />
      <strong>Date :</strong> {{ aventure.date }}<br />
      <strong>Catégorie :</strong> {{ aventure.categorie }}
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  aventure: Object
})
const router = useRouter()

function voirDetails() {
  router.push(`/details/${props.aventure.id}`)
}
</script>
