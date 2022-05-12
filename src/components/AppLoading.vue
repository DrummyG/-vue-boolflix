<template>
    <div class="d-flex align-items-center justify-content-center">
        <p>Vi preghiamo di inserire una chiave di ricerca</p>
    </div>
</template>

<script>
export default {
    name: 'AppLoading'
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/variables.scss';
    div{
        position: absolute;
        top: -30px;
        left: 0;
        height: 100%;
        width: 95vw;
        z-index: 100;
        background-color: $main;
    }

    p{
        color: white;
        font-size: 40px;
    }


</style>