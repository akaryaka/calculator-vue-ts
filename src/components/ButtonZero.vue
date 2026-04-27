<template>
    <input @click="clickZero" type="button" class="btn btn_command" value="C" id="btn_zeroing" />
</template>

<script lang="ts" setup>
    import { btnValue, mathValue1, mathValue2 } from '../constants';

    function clickZero(event: MouseEvent) {
        const target: any = event.target;
        console.log(target.value);
        btnValue.value = '';
        mathValue1.value = '';
        mathValue2.value = '';
    }
</script>

<style lang="scss" scoped>

</style>