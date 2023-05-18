import { defineStore } from 'pinia'
import {ref, computed} from 'vue'

export const useCurrencies = defineStore('currencies', () => {
    const currs = ref ([
        {price: 77, name: 'USD'},
        {price: 84, name: 'EUR'},
        {price: 2168444, name: 'BTC'}
    ])
    const currentCurrencyName = ref(currs.value[0].name)
    const currentCurrencyPrice = ref(currs.value[0].price)
    const valueToConv = ref(0)
    const history = ref([])

    const convertedValue = computed(() => valueToConv.value / currentCurrencyPrice.value)
    
    function setCurrency(curr) {
        currentCurrencyName.value = curr.name
        currentCurrencyPrice.value = curr.price
    }

    function addToHistory() {
        this.history.push(valueToConv.value + " руб. = " 
        + convertedValue.value.toFixed(2) + " " + currentCurrencyName.value)
      }

    return {currs, currentCurrencyName, currentCurrencyPrice, 
    valueToConv, setCurrency, addToHistory, convertedValue, history}
})