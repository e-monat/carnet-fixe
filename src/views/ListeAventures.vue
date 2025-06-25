<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Liste des aventures</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label>Filtrer par catégorie</ion-label>
        <ion-select v-model="filtreCategorie" placeholder="Toutes">
          <ion-select-option value="">Toutes</ion-select-option>
          <ion-select-option
              v-for="cat in categoriesDisponibles"
              :key="cat"
              :value="cat"
          >
            {{ cat }}
          </ion-select-option>
        </ion-select>
      </ion-item>

      <div ref="listeRef">
        <AventureCard
            v-for="aventure in aventuresFiltrees"
            :key="aventure.id"
            :aventure="aventure"
        />
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
  IonItem,
  IonLabel,
  IonSelect,
  IonButtons,
  IonBackButton,
  IonSelectOption
} from '@ionic/vue'
import { ref, computed, onMounted } from 'vue'
import { state } from '../state/state'
import AventureCard from '../components/AventureCard.vue'
import { createAnimation } from '@ionic/vue'

const filtreCategorie = ref('')
const listeRef = ref<HTMLElement>()

const categoriesDisponibles = computed(() => {
  const uniques = new Set(state.aventures.map((a) => a.categorie))
  return [...uniques]
})

const aventuresFiltrees = computed(() => {
  if (!filtreCategorie.value) return state.aventures
  return state.aventures.filter(a => a.categorie === filtreCategorie.value)
})

onMounted(() => {
  if (listeRef.value) {
    const anim = createAnimation()
        .addElement(listeRef.value)
        .duration(500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(20px)', 'translateY(0px)')
    anim.play()
  }
})
</script>
