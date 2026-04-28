<script lang="ts" setup>
  import { btnValue, mathOutput } from '../constants';
  import { clickMath, removeNumber } from '../composables/calculator';
  import ButtonMath from './ButtonMath.vue';
  import ButtonEqual from './ButtonEqual.vue';
  import ButtonZero from './ButtonZero.vue';
  import ButtonNumber from './ButtonNumber.vue';
  import Button from './Button.vue';
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <h1 class="title">Калькулятор</h1>
      <div class="calc">
        <div class="output">{{ mathOutput }}</div>
        <header class="calc__header">
          <div class="calc__header__input">{{ btnValue }}</div>
          <button v-if="btnValue" @click="removeNumber" class="btn delete">Удалить</button>
        </header>
         <form action="#" class="calc__main">
          <ButtonZero />
          <ButtonMath value="%" />
          <Button @click="clickMath" class="math-action" value="/" />
          <ButtonNumber value="7"/>
          <ButtonNumber value="8"/>
          <ButtonNumber value="9"/>
          <Button @click="clickMath" class="math-action" value="*" />
          <ButtonNumber value="4"/>
          <ButtonNumber value="5"/>
          <ButtonNumber value="6"/>
          <Button @click="clickMath" class="math-action" value="-" />
          <ButtonNumber value="1"/>
          <ButtonNumber value="2"/>
          <ButtonNumber value="3"/>
          <Button @click="clickMath" class="math-action" value="+" />
          <ButtonNumber value="0"/>
          <ButtonNumber value="."/>
          <ButtonEqual />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .wrapper {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    margin-bottom: 30px;
  }

  .calc {
    width: 450px;
    background-color: #000;
    padding: 35px;
    border-radius: 30px;
    display: grid;
    &__main {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
    &__header {
      width: 100%;
      height: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      &__input {
        width: 100px;
        padding: 0 10px;
        background: transparent;
        color:#fff;
        font-size: 40px;
        line-height: 120%;
        border: none;
        text-align: left;
      }
    }
  }

  .btn{
    cursor: pointer;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 25px;
    line-height: 120%;
    border: transparent;
    &.delete{
      cursor: pointer;
      padding: 10px;
      font-size: 20px;
      transition: all .3s;
    }
    &_number, 
    &_dot {
      background-color: #505050;
      color: #fff;
    }
    &_command {
      background-color: #C8C8C8;
    }
    &_operator {
      background-color: orange;
      color: #fff;
      &[disabled="disabled"] {
        opacity: 0.5;
      }
    }
  }

  #btn_zeroing {
    grid-area: 1/1/2/3;
  }

  #btn_equal {
    grid-area: 5/3/6/5;
  }

  .output {
    color: #fff;
  }
</style>
