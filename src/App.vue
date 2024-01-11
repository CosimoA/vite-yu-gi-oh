<script >
// impotazione di axios
import axios from 'axios';
// importazione componenti figli
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CardsList from './components/CardsList.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';


// importazione store API
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardsList,
    LoadingSpinner,

  },

  data() {
    return {
      store,
    }
  },

  methods: {
    // Ottieni Lista Info Carte
    getCardsInfo() {
      let myUrl = store.apiURL += `?num=${store.num}&offset=${store.offset}`

      if (store.searchArchetype !== "") {
        myUrl += `&archetype=${store.searchArchetype}`
      }

      axios
        .get(myUrl)
        .then((arr => {
          store.cardsList = arr.data.data;
          store.loading = false;
          // console.log(arr.data.data);
        }))
        .catch((err) => {
          console.log("Error", err);
        })
    },

    // Ottengo Lista Archetipi
    getArchetypesList() {
      axios
        .get(store.archetypesURL)
        .then((arr) => {
          store.archetypes = arr.data
        })
        .catch((err) => {
          console.log("Error", err);
        })
    }
  },

  created() {
    this.getCardsInfo();
    this.getArchetypesList();
  }
};
</script>

<template>
  <section v-if="!store.loading">
    <AppHeader message="Yu-Gi-Oh! Api" />
    <main>
      <AppSearch @filter="getCardsInfo" />
      <CardsList />
    </main>
  </section>
  <!-- LOADER -->
  <section v-else>
    <LoadingSpinner />
  </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
