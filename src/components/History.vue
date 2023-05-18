
<script>
import { ref, computed } from 'vue';
import { useCurrencies } from '../store/store.js';
export default {
  
  setup() {
    const currenciesStore = useCurrencies()
    const history = computed (() => currenciesStore.history)

    return {history}
  }
  

}
</script>

<template>
    <div class="prev-opp"> Прошлые операции: </div>
    <div class="operation" v-for="item in history">
        {{ item }}
    </div>
    
</template>

<style scoped>

.prev-opp {
    font-size: 25px;
    color: #0c977d;
    margin-bottom: 30px;
}

.operation {

  display: flex;
  flex-direction: column;
  color: grey;
}
</style>