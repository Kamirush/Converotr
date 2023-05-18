
<script >
import Field from './components/Field.vue';
import { useCurrencies } from './store/store.js';
import { ref, computed } from 'vue';

export default {

  components: {Field, History},

  setup() {
    const currenciesStore = useCurrencies()

    const currencies = computed(() => currenciesStore.currs)
    const convCurr = computed(() => currenciesStore.currentCurrencyName)
    const convPrice = computed(() =>currenciesStore.currentCurrencyPrice)

    function setCurrency (curr) {
      currenciesStore.setCurrency(curr)
    }

    return {convCurr, convPrice, currencies, setCurrency}
  }

}

</script>

<template>


  <router-link to="/"> Home </router-link> |
  <router-link to="/brazil"> Brazil </router-link> |
  <router-link to="/hawaii"> Hawaii </router-link> |
  <router-view></router-view>



  <div class="initText">  Вы конвертируете рубли в <p> {{ convCurr }} </p></div>
  <button class="currButton" 
    v-for="(i, index)  in currencies" @click="setCurrency(i)">
      В {{ i.name }} <p> {{ i.price }} руб. </p>
  </button>
  <Field/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=El+Messiri&family=Roboto&display=swap');

.initText {
  color: white;
  font-size: 40px;
  margin: 15px;
}

.currButton {
  margin: 15px;
  padding: 5px;
  background-color: rgb(31, 31, 31);
  color: #0c977d;
  border-color: #0c977d;
  width: 150px;
  font-size: 20px;
}

.currButton:hover {
  border-color: aliceblue;
}

p {
  margin: 0px;
}

</style>
