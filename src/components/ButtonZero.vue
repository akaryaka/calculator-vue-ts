<template>
    <input @click="clickZero" type="button" class="btn btn_command" value="C" id="btn_zeroing" />
</template>

<script lang="ts" setup>
    import { btnValue, mathOutput, mathValue1, mathValue2 } from '../constants';

    function clickZero(event: MouseEvent) {
        // const target: any = event.target;
        const btnActions = document.querySelectorAll('.math-action');
        const btnNumbers = document.querySelectorAll('.btn_number');
        // console.log(target.value);
        btnValue.value = '';
        mathValue1.value = '';
        mathValue2.value = '';
        btnActions.forEach(function(btnAction) {
            btnAction.classList.remove('btn-disabled');
            btnAction.removeAttribute('disabled');
        });
        btnNumbers.forEach(function(btnNumber) {
            btnNumber.classList.remove('btn-disabled');
            btnNumber.removeAttribute('disabled');
        });
        mathOutput.value = ''
    }
</script>

<style lang="scss" scoped>

</style>