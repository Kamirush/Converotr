<script>
import { ref, computed } from 'vue';
import { useCurrencies } from '../store/store.js';
export default {
  setup () {
    const currenciesStore = useCurrencies()
    const calculate = computed(() => currenciesStore.convertedValue.toFixed(2))
    const convCurr = computed(() => currenciesStore.currentCurrencyName)

    return {convCurr, calculate, currenciesStore}
  }
}
</script>

<template>
    <span>{{ calculate }} {{ convCurr }}</span>
</template>

<style scoped>
span {
    font-size: 50px;
    color: gold;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    align-items: flex-start;
    display: inline;
}


</style>