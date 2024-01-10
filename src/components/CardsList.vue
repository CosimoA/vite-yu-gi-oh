<script>
import SingleCard from './SingleCard.vue'

export default {
    name: 'CardsList',
    components: {
        SingleCard
    }
}

</script>

<template>
    <section class="container">
        <div class="row">
            <SingleCard />
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