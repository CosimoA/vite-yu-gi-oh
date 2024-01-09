<script>
export default {
    name: 'AppHeader'
}

</script>

<template>
    <header>
        <div class="logo-container">
            <img class="logo"
                src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
                alt="logo.png">
        </div>
        <h1>Yu-Gi-Oh! Api</h1>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

header {
    background-color: white;
    @include center (start-center);
    padding: 10px 0;

    img {
        height: 40px;
        padding: 0 15px;

    }

    h1 {
        font-size: 40px;
    }
}
</style>