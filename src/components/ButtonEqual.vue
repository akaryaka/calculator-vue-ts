<template>
    <input @click="btnEqual" type="button" class="btn btn_operator equal" value="=" id="btn_equal" />
</template>

<script lang="ts" setup>
    import { btnEqual } from '../composables/calculator';
</script>

<style lang="scss" scoped>

</style>