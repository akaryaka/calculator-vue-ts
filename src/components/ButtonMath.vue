<template>
    <input @click="clickMath" type="button" class="btn btn_operator math-action" :value="value"/>
</template>

<script setup lang="ts">
    import { btnValue, mathAction, mathOutput, mathValue1 } from '../constants';
    
    defineProps({
        value: String
    })

    function clickMath(event: MouseEvent) {
        const target: any = event.target;
        const btnActions = document.querySelectorAll('.math-action');
        mathAction.value = target.value;
        mathValue1.value = btnValue.value;
        btnValue.value = '';
        mathOutput.value += `${mathValue1.value}${mathAction.value}`; 
        
        btnActions.forEach(function(btnAction) {
            btnAction.classList.add('btn-disabled');
            btnAction.setAttribute('disabled', 'true');
        });
    }
</script>

<style lang="scss" scoped>

</style>