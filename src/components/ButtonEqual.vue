<template>
    <input @click="btnEqual" type="button" class="btn btn_operator equal" value="=" id="btn_equal" />
</template>

<script lang="ts" setup>
    import { btnValue, mathAction, mathEqual, mathValue1, mathValue2, mathOutput } from '../constants';
    import { calculate } from '../composables/calculator';

    function btnEqual() {
        const btnNumbers = document.querySelectorAll('.btn_number');
        mathValue2.value = btnValue.value;
        if (mathValue2.value.trim() != '') {
            mathEqual.value = Number(mathValue1.value) * Number(mathValue2.value);
            btnValue.value = calculate(Number(mathValue1.value), Number(mathValue2.value), mathAction.value);
        } else {
            alert('Пусто!');
        }

        btnNumbers.forEach(function(btnNumber) {
            btnNumber.classList.add('btn-disabled');
            btnNumber.setAttribute('disabled', 'true');
        });

        mathOutput.value += `${mathValue2.value}=${calculate(Number(mathValue1.value), Number(mathValue2.value), mathAction.value)}`; 
    }
</script>

<style lang="scss" scoped>

</style>