<script>
export default {
    name: 'SingleCard',
    props: {
        info: Object
    }
}

</script>

<template>
    <div class="card">

        <img :src="info.card_images[0].image_url" :alt="info.name">
        <div class="categoria">
            <h3>{{ info.name }}</h3>
            <span>{{ info.archetype }}</span>
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
        max-width: 230px;
        padding: 0 1rem;

        h3 {
            color: white;
            padding: 1rem 0;
        }
    }
}
</style>