<template>
  <input @click="sendTarget" type="button" class="btn btn_operator" :class="btnClass" :value="value"/>
</template>

<script setup lang="ts">
  // делаем для того, чтобы передавать target родительскому компоненту(подсказала нейросеть), попробовать найти вариант проще
  const emit = defineEmits<{
    (e: 'click', target: EventTarget | null): void
  }>()

  defineProps({
    value: String,
    btnClass: String
  })

  function sendTarget(event: MouseEvent) {
    emit('click', event.target);
  }

</script>

<style lang="scss" scoped>

</style>