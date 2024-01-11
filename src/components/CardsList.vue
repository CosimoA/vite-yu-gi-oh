<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';
import ResultMessage from './ResultMessage.vue';



export default {
    name: 'CardsList',
    components: {
        SingleCard,
        ResultMessage,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <section class="container">
        <div>
            <ResultMessage />
        </div>
        <div class="row">
            <div v-for="(card, i) in store.cardsList" :key="i" class="col">
                <SingleCard :info="card" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: white;
    max-width: 80%;
    display: flexbox;
    margin: 0 auto;
    padding: 1.5rem;


    .row {
        @include center (wrap);
    }
}
</style>