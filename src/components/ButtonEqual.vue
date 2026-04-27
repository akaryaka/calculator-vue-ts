<template>
    <input @click="btnEqual" type="button" class="btn btn_operator equal" value="=" id="btn_equal" />
</template>

<script lang="ts" setup>
    import { btnValue, mathAction, mathEqual, mathValue1, mathValue2 } from '../constants';
    import { calculate } from '../composables/calculator';

    function btnEqual(event: MouseEvent) {
        const target: any = event.target;
        // console.log(target.value);
        mathValue2.value = btnValue.value;
        if (mathValue2.value.trim() != '') {
            mathEqual.value = Number(mathValue1.value) * Number(mathValue2.value);
            console.log(calculate(Number(mathValue1.value), Number(mathValue2.value), mathAction.value));
        } else {
            alert('Пусто!');
        }
    }

    
</script>

<style lang="scss" scoped>

</style>