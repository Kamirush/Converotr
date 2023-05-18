<script>

import ConvValue from './ConvValue.vue';
import History from './History.vue';
import CurrInput from './CurrInput.vue';
import { ref } from 'vue';
import { useCurrencies } from '../store/store.js';

export default {

  setup () {

    const currenciesStore = useCurrencies()
    const convAmount = currenciesStore.valueToConv
    const history = currenciesStore.history
    const convCurr = currenciesStore.currentCurrencyName
    const convPrice = currenciesStore.currentCurrencyPrice
      
    return {convAmount, history, convCurr, convPrice}
  },

  components: {ConvValue, History, CurrInput},

}
</script>

<template>
    <div class="box">
      <CurrInput/>
      <div class="mainBlock">
        <ConvValue/>
      </div>
      <History />
    </div>
</template>

<style scoped>
.box {
  display: block;
  color: rgb(88, 145, 74);
  font-size: 20px;
}

.mainBlock {
  border-radius: 2px;
  padding: 20px;
}

.box {
  padding: 20px;
  border-style: solid;
  border-radius: 5px;
  border-color: #0c977d;
}


.currButton {
  margin: 15px;
  background-color: rgb(31, 31, 31);
  color: #0c977d;
  border-color: #0c977d;
}

</style>