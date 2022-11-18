
<template>

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog max-width="600" :data="data" v-bind="$attrs" v-on="$listeners">

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="mb-5" color="primary" dark>Cart</v-toolbar>
            <v-card-text>
              <v-container>
                <v-row v-for="items in data" :key="items.id">

                  <v-col cols="12" sm="6" md="4">
                    <v-img :src="items.images" alt="lorem" class="image" max-height="150" width="200"></v-img>

                  </v-col>
                  <v-col cols="12" sm="8" md="8">
                    <div>

                      <div class="text-h5">
                        {{ items.title }}

                      </div>

                      <br>
                      <h3>
                        {{ items.description }}
                      </h3>

                    </div>
                    <br>

                    <v-btn v-if="items.qty === 1" disabled class="btn btn--minus error" @click="handleMines(items.id)">
                      -
                    </v-btn>
                    <v-btn v-else class="btn btn--minus error " @click="handleMines(items.id)">
                      -
                    </v-btn>
                    <v-chip>
                      {{ items.qty }}
                    </v-chip>
                    <v-btn class="btn btn--plus success" @click="handlePlus(items.id)">
                      +
                    </v-btn>
                    <v-chip class=" ml-12">
                      {{ items.colors }}
                    </v-chip>

                    <br>
                    <br>
                    <h2>
                      $ {{ items.price * items.qty }}.00
                    </h2>

                  </v-col>

                </v-row>
              </v-container>


            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn class="error" @click="dialog.value = false">Close</v-btn>
              <v-btn class="primary" @click="handleOrder(dialog)">Order</v-btn>

            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>




</template>

<script>
import {
  ref,
  useRouter,
  useStore,
  // useRoute
  reactive
} from '@nuxtjs/composition-api'
export default {
  name: 'BaseCartDialogs',
  inheritAttrs: false,
  props: {
    data: {
      type: [Object, Array],
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()

    console.log(props, 'propsan')
    const counter = ref(1)

    const changeData = reactive({
      id: '',
      change: '',
    })

    const handleMines = async (e) => {
      console.log(e, 'data mines')
      changeData.id = e
      changeData.change = '-'
      console.log(changeData, 'data change')
      await store.dispatch('cart/minesCart', changeData)

    }
    const handlePlus = async (e) => {
      console.log(e, 'data mines')
      changeData.id = e
      changeData.change = '+'
      console.log(changeData, 'data change')
      await store.dispatch('cart/plusCart', changeData)
    }

    const handleOrder = (e) => {
      console.log('Order terpencet')
      e.value = false;
      router.push('/invoice')

      // await store.dispatch('cart/plusCart', changeData)
    }

    return {
      counter,
      handleMines,
      handlePlus,
      handleOrder
    }
  }
  // data() {

  //   return {
  //     counter: 1
  //     // counter:
  //   }
  // },

}
</script>
