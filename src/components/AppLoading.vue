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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: $main;
    }

    p{
        color: white;
        font-size: 40px;
    }


</style>