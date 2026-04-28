<template>
    <input @click="btnClick" type="button" class="btn btn_number" :value="value" />
</template>

<script lang="ts" setup>
    import { btnClick } from '../composables/calculator';

    defineProps({
        value: String
    })
</script>