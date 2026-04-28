<template>
    <input @click="clickZero" type="button" class="btn btn_command" value="C" id="btn_zeroing" />
</template>

<script lang="ts" setup>
    import { clickZero } from '../composables/calculator';
</script>

<style lang="scss" scoped>

</style>