import { createRouter, createWebHistory } from '@ionic/vue-router';
import Accueil from '../views/Accueil.vue';
import AjouterAventure from '../views/AjouterAventure.vue';
import ListeAventures from '../views/ListeAventures.vue';
import DetailsAventure from '../views/DetailsAventure.vue';
import Parametres from '../views/Parametres.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/ajouter', component: AjouterAventure },
  { path: '/liste', component: ListeAventures },
  { path: '/details/:id', component: DetailsAventure },
  { path: '/parametres', component: Parametres },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
