<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store';


export default {
    name: 'CardsList',
    components: {
        SingleCard
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
        <div class="row">
            <div v-for="card in store.cardsList" class="col">
                <SingleCard />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: white;
    min-height: 300px;
    min-width: 300px;
    max-width: 80%;
    margin: 0 auto;
    padding: 2rem;

    .row {
        @include center (wrap);
        padding: 1rem;
    }
}
</style>