<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/liste" />
        </ion-buttons>
        <ion-title>Détails</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" ref="contentRef">
      <div v-if="!edition">
        <h2>{{ aventure?.titre }}</h2>
        <p>{{ aventure?.description }}</p>
        <p><strong>Date:</strong> {{ aventure?.date }}</p>
        <p><strong>Catégorie:</strong> {{ aventure?.categorie }}</p>

        <ion-button expand="block" @click="edition = true">Modifier</ion-button>
        <ion-button expand="block" color="danger" @click="supprimer">Supprimer</ion-button>
      </div>

      <div v-else>
        <ion-input v-model="titre" label="Titre" fill="outline" />
        <ion-input v-model="description" label="Description" fill="outline" />
        <ion-input v-model="date" type="date" label="Date" fill="outline" />
        <ion-input v-model="categorie" label="Catégorie" fill="outline" />

        <ion-button expand="block" color="success" @click="enregistrer">Enregistrer</ion-button>
        <ion-button expand="block" fill="clear" @click="edition = false">Annuler</ion-button>
      </div>
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
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { state } from '../state/state'
import { createAnimation } from '@ionic/vue'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const contentRef = ref<HTMLElement>()

const aventure = computed(() => state.aventures.find((a) => a.id === id))

const titre = ref('')
const description = ref('')
const date = ref('')
const categorie = ref('')
const edition = ref(false)

onMounted(() => {
  if (aventure.value) {
    titre.value = aventure.value.titre
    description.value = aventure.value.description
    date.value = aventure.value.date
    categorie.value = aventure.value.categorie
  }

  // Animation à l'entrée
  if (contentRef.value) {
    const anim = createAnimation()
        .addElement(contentRef.value)
        .duration(600)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(20px)', 'translateY(0)')
    anim.play()
  }
})

function supprimer() {
  state.supprimerAventure(id)
  router.push('/liste')
}

function enregistrer() {
  state.modifierAventure(id, {
    titre: titre.value,
    description: description.value,
    date: date.value,
    categorie: categorie.value
  })
  edition.value = false
}
</script>
