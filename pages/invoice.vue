<template>
  <div>
    <!-- <h1>Invoice</h1>

    <br> -->

    <Child :data="data" />
  </div>
</template>
<script>
import {
  // computed,
  // reactive,
  // watch,
  onMounted, ref, useStore
} from '@nuxtjs/composition-api'
import Child from "../components/invoice/list.vue";

export default {
  components: {
    Child,
  },
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Home')
    const data = ref([])

    const loading = ref(false)

    const getFetch = () => {
      data.value= store.getters["cart/cart"];

    }



    onMounted(() => {
      getFetch()
      // store.dispatch("fetch/getFetch");
    });



    return {
      getFetch,
      loading,
      data,

    }
  },
  mounted() {
    this.$store.commit('SET_PAGE_TITLE', 'Invoice')
  },
}
</script>
