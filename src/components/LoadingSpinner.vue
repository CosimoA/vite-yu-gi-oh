<script>
export default {
    name: 'LoadingSpinner'
};
</script>

<template>
    <div class="drawing" id="loading">
        <div class="loading-dot"></div>
    </div>
</template>

<style scoped>
.drawing {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #3a3a3a;
}

/* -- Loading thingy --*/
.loading-dot {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 40px 0 0 #ffffff, 0 -40px 0 0 #ffffff, 40px 0 0 0 #ffffff, -40px 0 0 0 #ffffff,
        40px 40px 0 0 #ffffff, -40px -40px 0 0 #ffffff, 40px -40px 0 0 #ffffff, -40px 40px 0 0 #ffffff;
    animation: load 3s infinite linear;
}

@keyframes load {

    0%,
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
        box-shadow: 0 40px 0 0 #ffffff, 0 -40px 0 0 #ffffff, 40px 0 0 0 #ffffff, -40px 0 0 0 #ffffff,
            40px 40px 0 0 #ffffff, -40px -40px 0 0 #ffffff, 40px -40px 0 0 #ffffff, -40px 40px 0 0 #ffffff;
    }

    25% {
        box-shadow: 0 40px 0 0 #ffffff, 0 -40px 0 0 #ffffff, 40px 0 0 0 #ffffff, -40px 0 0 0 #ffffff,
            -40px -40px 0 0 #ffffff, 40px 40px 0 0 #ffffff, -40px 40px 0 0 #ffffff, 40px -40px 0 0 #ffffff;
    }

    50% {
        box-shadow: 0 -40px 0 0 #ffffff, 0 40px 0 0 #ffffff, -40px 0 0 0 #ffffff, 40px 0 0 0 #ffffff,
            -40px -40px 0 0 #ffffff, 40px 40px 0 0 #ffffff, -40px 40px 0 0 #ffffff, 40px -40px 0 0 #ffffff;
    }

    70%,
    75% {
        box-shadow: 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff,
            0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff;
        height: 10px;
        width: 10px;
    }

    80%,
    85%,
    90% {
        transform: translate(-50%, -50%) rotate(360deg);
        box-shadow: 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff,
            0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff, 0 0 0 0 #ffffff;
        background-color: #ffffff;
        height: 40px;
        width: 40px;
    }

    95% {
        box-shadow: 0 40px 0 0 #ffffff, 0 -40px 0 0 #ffffff, 40px 0 0 0 #ffffff, -40px 0 0 0 #ffffff,
            40px 40px 0 0 #ffffff, -40px -40px 0 0 #ffffff, 40px -40px 0 0 #ffffff, -40px 40px 0 0 #ffffff;
    }
}</style>
