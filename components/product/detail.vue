<template>

  <div>
    <v-container fluid>
      <!-- <v-breadcrumbs>
        <v-btn  icon @click="handleBack">
            <v-icon>mdi-arrow-back-circle</v-icon>
        </v-btn>
      </v-breadcrumbs> -->
        <v-breadcrumbs>
        <v-btn  icon @click="handleBack">
            <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>
      </v-breadcrumbs>
      <v-row>
        <v-col cols="12" md="8">

          <v-card>

            <v-carousel>
              <v-carousel-item v-for="(products, i) in product.images" :key="i" :src="products"
                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>
              <h2 class="text-h4">
                {{ product.title }}
              </h2>
              <v-spacer></v-spacer>
              <span class="text-h6">${{ product.price }}.00</span>
            </v-card-title>

            <v-card-text>
              {{ product.description }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <span class="subheading">Select Color</span>

              <v-chip-group v-model="selection" active-class="deep-purple--text text--accent-4" mandatory>
                <v-chip v-for="color in colors" :key="color" :value="color">
                  {{ color }}
                </v-chip>
              </v-chip-group>
            </v-card-text>


            <v-card-action>
              <v-container fluid>
                <v-row>
                  <v-col>


                    <v-btn class="btn btn--minus" @click="counter = counter - 1">
                      -
                    </v-btn>
                    <v-chip>
                      {{ counter }}
                    </v-chip>
                    <v-btn class="btn btn--plus" @click="counter = counter + 1">
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-action>

            <v-card-actions>

              <v-btn block class="white--text" color="deep-purple accent-4" @click="HandleChart(product)">
                Add to Cart
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-col>

        <BaseDialogsCart v-model="dialog" :data="product"></BaseDialogsCart>

      </v-row>
    </v-container>

  </div>

</template>

<script>
import {
  ref,
  // useRouter,
  useStore,
  // useRoute
  reactive
} from '@nuxtjs/composition-api'

// import {EditUser} from "../../pages/auth/admin/user/edit.vue"
export default {
  layout: 'auth',

  props: {
    product: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const store = useStore()

    // const router = useRouter()
    // const route = useRoute()

    console.log(props)
    const counter = ref(1)
    // const urlBread = history.back()

    const dialog = ref(null)
    const dataLink = ref([{
      text: 'Home',
      disabled: false,
      // link: urlBread,
    },
    {
      text: 'Product',
      disabled: true,
      href: '',
    },
    ])

    const dataCart = reactive({
      id: '',
      qty: '',
      title: '',
      colors: '',
    })

    const HandleChart = async (e) => {
      console.log(e, 'e p[roduct]');
      dataCart.id = e.id
      dataCart.title = e.title
      dataCart.qty = counter
      dataCart.colors = selection
      await store.dispatch('cart/addCart', dataCart)

    }

    const selection = ref('Black')
    const colors = ref(['Red', 'Black', 'Blue',])

    const handleBack = () => {
      history.back()
    }

    return {
      // search,
      // urlBread,
      handleBack,
      dataLink,
      colors,
      selection,
      dialog,
      HandleChart,
      counter,
      dataCart
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
