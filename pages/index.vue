<template>
  <div>
    <h1>Mistery Shop</h1>

    <br>
    <h1>Category Product </h1>
    <br>
    
    <ChildCategory :category="roleOptions" />

    <Child :product="list" />
  </div>
</template>
<script>
import { computed, reactive, watch, onMounted, ref, useStore } from '@nuxtjs/composition-api'
import Child from "../components/product/list.vue";
import ChildCategory from "../components/product/listCategory.vue";

export default {
  components: {
    Child,
    ChildCategory
  },
  setup() {
    const store = useStore()

    store.commit('SET_PAGE_TITLE', 'Home')
    const roleOptions = ref([])
    const dataFetch = reactive({
      select: '',
      categories: 'categories',
    })
    const loading = ref(false)

    const getFetch = () => {
      loading.value = true
      store.commit('SET_LOADING', true)
      console.log(selected, 'selected dijalankan')

      store.dispatch('fetch/getFetch', dataFetch).finally(() => {
        loading.value = false
        store.commit('SET_LOADING', false)
      })
    }

    onMounted(() => {
      getFetch()
      // store.dispatch("fetch/getFetch");
      store.dispatch('fetch/getCategory').then((response) => {
        console.log(response, 'response cate')
        roleOptions.value = response
      })

    });

    const list = computed(() => {
      return store.getters["fetch/items"];
    });
    const category = computed(() => {
      return store.getters["fetch/category"];
    });

    const selected = computed(() => store.state.fetch.selected)
    console.log(selected, 'index selected')
    watch(selected, (val) => {
      dataFetch.select = val
      console.log(dataFetch)
      getFetch()

    })

    return {
      list,
      dataFetch,
      getFetch,
      selected,
      loading,
      category,
      roleOptions,
      ChildCategory
    }
  },
  mounted() {
    this.$store.commit('SET_PAGE_TITLE', 'Home')
  },
}
</script>
