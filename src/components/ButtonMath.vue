<template>
    <input @click="clickMath" type="button" class="btn btn_operator math-action" :class="class" :value="value"/>
</template>

<script setup lang="ts">
    import { clickMath } from '../composables/calculator';
    
    defineProps({
        value: String,
        class: String
    })
</script>

<style lang="scss" scoped>

</style>