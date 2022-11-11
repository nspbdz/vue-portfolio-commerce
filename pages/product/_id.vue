<template>
  <div v-if="dataUser != ''">
    <Child :product="productDetail" />

  </div>

  <div v-else>
    data kosong
  </div>

</template>
<script>
// import { computed } from 'vue'

import {
  ref,
  reactive,
  useRouter,
  computed,
  watch,
  onMounted,
  useStore,


} from '@nuxtjs/composition-api'
import Child from "../../components/product/detail.vue";

export default {

  components: {
    Child
  },
  middleware: 'authenticated',
  // layout: 'agen',
  setup() {
    const store = useStore()

    const router = useRouter()
    const idUrl = computed(() => router.currentRoute.params.id)
    const id = ref([])
    const dialog = ref(0);

    onMounted(() => {
      id.value = router.currentRoute.params.id
    });
    const dataUser = reactive({
      name: '',
      phone: '',
      selectedRole: '',
      password: '',
      email: '',
      profile: '',
      referals: [],

    })
    const getProductById = () => {
      store.dispatch('fetch/getProductById', id).then((response) => { })
    }

    watch([id, dataUser.profile], (val) => {
      console.log(val)
      getProductById()

    })
    const productDetail = computed(() => {
      // rubah ke ammbil semua data user

      return store.getters["fetch/id"];
    });

    const handleModal = () => {
      dialog.value = true
      console.log(dialog)
    }
    const search = ref('')


    console.log(search, 'search')

    return {
      idUrl,
      dataUser,
      handleModal,
      dialog,
      search,
      productDetail
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 650
        case 'md':
          return 850
        case 'lg':
          return 1200
        case 'xl':
          return 1200
      }
    },
  },
}

</script>

<style>

</style>
