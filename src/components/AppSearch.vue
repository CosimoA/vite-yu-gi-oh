<script>
import { store } from '../store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div>
        <select v-model="store.searchArchetype" @change="$emit('filter')">
            <option value="" disabled selected>Chose Archetype</option>
            <option v-for=" archetype in store.archetypes" :value="archetype.archetype_name">{{
                archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
</style>