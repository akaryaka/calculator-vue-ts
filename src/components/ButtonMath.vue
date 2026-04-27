<template>
    <input @click="clickMath" type="button" class="btn btn_operator math-action" :class="btnMathClass" :value="value"/>
</template>

<script setup lang="ts">
    import { btnValue, mathAction, mathValue1, mathValue2 } from '../constants';
    import { ref } from 'vue';

    const btnMathClass = ref('');
    
    defineProps({
        value: String
    })

    function clickMath(event: MouseEvent) {
        const target: any = event.target;
        target.disabled = true;
        btnMathClass.value = 'btn-disabled';
        mathAction.value = target.value;
        mathValue1.value = btnValue.value;
        btnValue.value = '';
    }


</script>

<style lang="scss" scoped>
    .btn-disabled {
        opacity: 0.5;
    }
</style>