<script>
import { ref } from 'vue';
import { useCurrencies } from '../store/store.js';
export default {
  
  setup () {
    const currenciesStore = useCurrencies()
    const convAmount = ref()

    function setConvValue() {
      currenciesStore.valueToConv = convAmount.value
      currenciesStore.addToHistory()
    }
    return {convAmount, setConvValue}
  }
}
</script>

<template>
  <div class="mainBlock">
    <input type="text" placeholder="Введите сумму" v-model.number="convAmount">
    <button class="currButton" @click="setConvValue">Конвертировать</button>
  </div>
</template>

<style scoped>

.mainBlock {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

input {
  font-size: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: #0c977d;
  text-align: center;
  color: #0c977d;
  background-color: inherit;
  margin: 15px;
}
.currButton {
  margin: 15px;
  padding: 10px;
  background-color: rgb(31, 31, 31);
  border-color: #0c977d;
  border-radius: 10px;
  border-width: 5px;
  color: #0c977d;
  width: 180px;
}

.currButton:hover {
  border-color: aliceblue;
}



</style>