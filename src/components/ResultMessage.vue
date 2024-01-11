<script>
import { store } from '../store';
export default {
    name: 'ResultMessage',
    data() {
        return {
            store,
        }
    },

    computed: {
        resultData() {
            return store.cardsList.length;
        }
    },
}

</script>

<template>
    <div>
        <span>Trovato <strong>{{ resultData }}</strong> Risultati</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

div {
    background-color: rgb(31, 31, 31);
    margin: 0 1rem -0.8rem 1rem;
    min-width: 230px;

    span {
        color: whitesmoke;
        padding: 1rem 0;
        display: block;
        text-align: center;
    }
}
</style>