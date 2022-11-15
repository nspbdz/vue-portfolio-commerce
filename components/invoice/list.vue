<template>

  <div>

    <br>
    <v-btn @click="handleBack" class="mx-" fab dark color="primary">
      <v-icon dark>
        mdi-arrow-left-circle
      </v-icon>
    </v-btn>
    <br>
    <v-container fluid>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Product
              </th>
              <th class="text-left">
                Address
              </th>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Qty
              </th>
              <th class="text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>
                <div class="justify-center ma-5 pa-5">
                  <v-img :src="item.images" alt="lorem" class="image" max-height="150" width="200"></v-img>
                </div>

              </td>
              <td>Example Street</td>
              <td>{{ item.title }}</td>
              <td>{{ item.qty }}</td>
              <td class="price">
                $ {{ item.price * item.qty }}.00
              </td>
            </tr>
            <tr class="total">
              <td colspan="3"></td>
              <td>Total: ${{ total }}</td>
            </tr>
          </tbody>


        </template>
      </v-simple-table>


    </v-container>
    <v-container fluid class="fill-height">
      <v-row align="justfy-center">
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-file-input accept="image/*" label="Input Your Proof Of Payment"></v-file-input>
        </v-col>
        <v-col>
          <v-btn block class="primary" @click="handleConfirm">Pay</v-btn>
        </v-col>
      </v-row>
    </v-container>


  </div>

</template>

<script>

import {
  ref,
  useRouter,
  onMounted,
  useStore,
  // useRoute
  // reactive
} from '@nuxtjs/composition-api'
import { showSuccessPopup } from '@/helpers/Utils'

// import {EditUser} from "../../pages/auth/admin/user/edit.vue"
export default {
  props: {
    data: {
      required: true,
      type: [Object, Array]
    },

  },
  setup(props) {
    const store = useStore()

    const router = useRouter()


    const dataPrice = ref([])
    const data = ref([])

    // const cartsData = ref([{ id: 3, qty: 10, title: "500", colors: "white" }, { id: 12, qty: 5, title: "500", colors: "white" }, { id: 5, qty: 10, title: "500", colors: "white" }])

    const total = ref(null)



    console.log(props)


    const onShow = (e) => {
      // console.log(e)

      router.push("/product/" + e)
    }
    const handleClickImg = async (e) => {
    }

    const handleBack = () => {
      history.back()
    }

    const handleConfirm = () => {
      showSuccessPopup({ msg: 'Success' })
      // history.back()
    }

    const getFetch = () => {
      data.value = store.getters["cart/cart"];

    }


    onMounted(() => {
      getFetch()
      // console.log(data, 'dataaa')
      if (data.value.length >= 2) {
        data.value.forEach(element => {
          dataPrice.value.push(element.qty * element.price)

        });
        total.value = dataPrice.value.reduce((a, b) => a + b, 0)

      } else if (data.value.length === 1) {
        total.value = data.value[0].qty * data.value[0].price

      }

    });



    return {
      onShow,
      handleConfirm,
      handleClickImg,
      total,
      handleBack,
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
