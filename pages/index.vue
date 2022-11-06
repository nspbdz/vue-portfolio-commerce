<template>
  <div>
    <h1>Mistery Shop</h1>
    <Child :product="list" />
    <!-- <Child :user="list.data" /> -->
  </div>
</template>
<script>
import { computed, onMounted,ref, useStore } from '@nuxtjs/composition-api'
import Child from "../components/product/list.vue";

export default {
  components: {
    Child
  },
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Home')

    const loading = ref(false)

    const getFetch = () => {
      loading.value = true
      store.commit('SET_LOADING', true)
      store.dispatch('fetch/getFetch').finally(() => {
        loading.value = false
        store.commit('SET_LOADING', false)
      })
    }

    onMounted(() => {
      store.dispatch("fetch/getFetch");
      // rubah ke hit api semua data user
    });
    const list = computed(() => {
      // rubah ke ammbil semua data user

      return store.getters["fetch/items"];
    });

    const items = computed(() => store.state.fetch.items)

    return {
      list,
      getFetch,
      items,
      loading,
    }
  },
  mounted() {
    this.$store.commit('SET_PAGE_TITLE', 'Home')
  },
}
</script>
