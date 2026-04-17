<script setup lang="ts">

</script>

<template>
  <div class="app">
    <div class="wrapper">
      <h1 class="title">Калькулятор</h1>
      <div class="calc">
        <div class="output"></div>
        <header class="calc__header">
          <div class="calc__header__input"></div>
          <button class="btn delete" id="btn_delete">Удалить</button>
        </header>
      </div>
    </div>
   
  </div>
</template>

<style lang="scss">
  .wrapper{
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title{
  margin-bottom: 30px;
}

</style>
