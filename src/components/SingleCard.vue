<script>
export default {
    name: 'SingleCard',
}

</script>

<template>
    <div class="card">

        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="Descrizione carta">
        <div class="categoria">
            <h3>nome personaggio</h3>
            <span>Archetype</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

.card {
    background-color: rgb(212 143 56);
    text-align: center;
    margin: 1rem;

    img {
        max-width: 230px;
        min-width: 200px;
    }

    .categoria {
        min-height: 100px;

        h3 {
            color: white;
            padding: 1rem 0;
        }
    }
}
</style>