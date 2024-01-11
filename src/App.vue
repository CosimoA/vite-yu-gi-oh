<script >
// impotazione di axios
import axios from 'axios';
// importazione componenti figli
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CardsList from './components/CardsList.vue';
// importazione store API
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardsList,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getCardsInfo() {
      axios
        .get(store.apiURL)
        .then((arr => {
          store.cardsList = arr.data.data;
          console.log(arr.data.data);
        }))
        .catch((err) => {
          console.log("Error", err);
        })
    }
  },

  created() {
    this.getCardsInfo();
  }
};



</script>

<template>
  <AppHeader message="Yu-Gi-Oh! Api" />
  <main>
    <AppSearch />
    <CardsList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
