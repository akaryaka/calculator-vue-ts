<script lang="ts">
  export default {
    data() {
      return {
        btnValue: ''
      }
    },
    methods: {
      btnClick(event: MouseEvent) {
        const target = event.target;
        if (target instanceof HTMLInputElement && target.classList.contains('btn_number')) { 
          this.btnValue += target.value
        }
      }
    }
  }
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <h1 class="title">Калькулятор</h1>
      <div class="calc">
        <div class="output"></div>
        <header class="calc__header">
          <div class="calc__header__input">{{ btnValue }}</div>
          <button class="btn delete" id="btn_delete">Удалить</button>
        </header>
         <div class="calc__main">
          <input @click="btnClick" type="button" class="btn btn_command" value="C" id="btn_zeroing" />
          <input @click="btnClick" type="button" class="btn btn_command math-action" value="%" id="btn_percent" />
          <input @click="btnClick" type="button" class="btn btn_operator math-action" value="/" />
          <input @click="btnClick" type="button" class="btn btn_number" value="7" />
          <input @click="btnClick" type="button" class="btn btn_number" value="8" />
          <input @click="btnClick" type="button" class="btn btn_number" value="9" />
          <input @click="btnClick" type="button" class="btn btn_operator math-action" value="*" />
          <input @click="btnClick" type="button" class="btn btn_number" value="4" />
          <input @click="btnClick" type="button" class="btn btn_number" value="5" />
          <input @click="btnClick" type="button" class="btn btn_number" value="6" />
          <input @click="btnClick" type="button" class="btn btn_operator math-action" value="-" />
          <input @click="btnClick" type="button" class="btn btn_number" value="1" />
          <input @click="btnClick" type="button" class="btn btn_number" value="2" />
          <input @click="btnClick" type="button" class="btn btn_number" value="3" />
          <input @click="btnClick" type="button" class="btn btn_operator math-action" value="+" />
          <input @click="btnClick" type="button" class="btn btn_number" value="0" id="btn_zero" />
          <input @click="btnClick" type="button" class="btn btn_dot btn_number" value="." id="btn_comma" />
          <input @click="btnClick" type="button" class="btn btn_operator equal" value="=" id="btn_equal" />
        </div>
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

  .calc{
    width: 450px;
    background-color: #000;
    padding: 35px;
    border-radius: 30px;
    display: grid;
    &__main{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
  &__header{
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;

    &__input{
      width: 100%;
      margin-right: 20px;
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
      opacity: 0;
      transition: all .3s;
    }
    &_number, 
    &_dot{
      background-color: #505050;
      color: #fff;
    }
    &_command{
      background-color: #C8C8C8;
    }
    &_operator{
      background-color: orange;
      color: #fff;
      &[disabled="disabled"]{
        opacity: 0.5;
      }
    }
  }

  #btn_zeroing{
    grid-area: 1/1/2/3;
  }

  #btn_equal{
    grid-area: 5/3/6/5;
  }
</style>
