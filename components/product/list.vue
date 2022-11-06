<template>

  <div>


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

          <!-- <v-card-actions class="white justify-center">
            <v-btn v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon small>
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </v-card-actions> -->


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
      type: Object
    }
  },
  setup(props) {
    // const store = useStore()

    const router = useRouter()
    // const route = useRoute()

    console.log(props)
    const search = ref('')
    const socials = ref([
      {
        icon: 'mdi-cart',
        color: 'indigo',
      },
      {
        icon: 'mdi-linkedin',
        color: 'cyan darken-1',
      },
      {
        icon: 'mdi-instagram',
        color: 'red lighten-3',
      },
    ])

    const types = ref(['Places to Be', 'Places to See'])


    const onShow = (e) => {
      console.log(e)

      router.push("/product/" + e)
    }



    console.log(search, 'search')
    return {
      search,
      onShow,
      types,
      socials
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
