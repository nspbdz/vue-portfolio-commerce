<template>

  <div>

    <br>
    <h1> Product </h1>
    <br>

    <v-row>
      <v-col v-for="products in product" :key="products.id" cols="6" sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img :src="products.category.image" alt="lorem" class="image" max-height="250" width="100%"
            @click="onShow(products.id)">
          </v-img>
          <v-card-title>
            <h3 class="text" v-if="products.title.length < 11">
              {{ products.title }}
            </h3>
            <h3 v-else>
              {{ products.title.substring(0, 11) + ".." }}
            </h3>
            <v-spacer></v-spacer>

            <span class="text-h6">${{ products.price }}.00</span>

          </v-card-title>

        </v-card>
      </v-col>
    </v-row>

  </div>

</template>

<script>

import {
  ref,
  useRouter,
  // useStore,
  // useRoute
  // reactive
} from '@nuxtjs/composition-api'

// import {EditUser} from "../../pages/auth/admin/user/edit.vue"
export default {
  props: {
    product: {
      required: true,
      type: [Object, Array]
    },

  },
  setup(props) {
    // const store = useStore()

    const router = useRouter()
    // const route = useRoute()


    const overlay = ref(false)
    const absolute = ref(true)
    const selected = ref(null)

    console.log(props)
    const types = ref(['Places to Be', 'Places to See'])


    const onShow = (e) => {
      console.log(e)

      router.push("/product/" + e)
    }
    const handleClickImg = async (e) => {
    }



    return {
      onShow,
      types,
      selected,
      overlay,
      absolute,
      handleClickImg
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 400
        case 'md':
          return 600
        case 'lg':
          return 600
        case 'xl':
          return 700
      }
    },
  },
}

</script>
<style>
v-card-title {
  width: 200px !important;
}
</style>
