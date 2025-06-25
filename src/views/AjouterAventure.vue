<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Ajouter une aventure</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" ref="formContainer">
      <ion-input v-model="titre" label="Titre" fill="outline" />
      <ion-input v-model="description" label="Description" fill="outline" />
      <ion-input v-model="date" type="date" label="Date" fill="outline" />
      <ion-input v-model="categorie" label="Catégorie" fill="outline" />

      <ion-button expand="block" @click="ajouter">Ajouter</ion-button>
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
  IonInput
} from '@ionic/vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { state } from '../state/state'
import { createAnimation } from '@ionic/vue'

const titre = ref('')
const description = ref('')
const date = ref('')
const categorie = ref('')
const router = useRouter()
const formContainer = ref<HTMLElement>()

function ajouter() {
  state.ajouterAventure({
    titre: titre.value,
    description: description.value,
    date: date.value,
    categorie: categorie.value
  })
  router.push('/liste')
}

onMounted(() => {
  if (formContainer.value) {
    const animation = createAnimation()
        .addElement(formContainer.value)
        .duration(500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scale(0.95)', 'scale(1)')
    animation.play()
  }
})
</script>
