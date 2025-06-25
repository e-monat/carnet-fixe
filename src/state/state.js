import { reactive } from 'vue'

export const state = reactive({
    aventures: [],

    ajouterAventure(aventure) {
        aventure.id = Date.now()
        this.aventures.push(aventure)
    },

    modifierAventure(id, nouvellesDonnees) {
        const index = this.aventures.findIndex(a => a.id === id)
        if (index !== -1) {
            Object.assign(this.aventures[index], nouvellesDonnees)
        }
    },

    supprimerAventure(id) {
        this.aventures = this.aventures.filter(a => a.id !== id)
    },

    reinitialiserAventures() {
        this.aventures = []
    }
})
