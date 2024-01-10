<script >
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import CardsList from './components/CardsList.vue'

export default {
  components: {
    AppHeader,
    CardsList,
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh! Api" />
  <main>
    <CardsList />

  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
