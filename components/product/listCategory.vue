<template>

  <div>
    <v-row>
      <v-col v-for="categories in category" :key="categories.id" cols="6" sm="2">
        <v-card class="mx-auto" max-width="200">
          <v-img :src="categories.image" alt="lorem" :class="`image` + categories.id" max-height="120" width="100%"
            @click="handleClickImg(categories.id)">
            <v-overlay v-if="selected === categories.id" :absolute="absolute">

            </v-overlay>

          </v-img>


          <v-card-title>
            <h3 class="text" v-if="categories.name.length < 11">
              {{ categories.name }}
            </h3>
            <h3 v-else>
              {{ categories.name.substring(0, 11) + ".." }}
            </h3>
          </v-card-title>

        </v-card>
      </v-col>
    </v-row>
    <br>
    <br>


  </div>

</template>

<script>

import {
  ref,
  useStore,
  // useRoute
  // reactive
} from '@nuxtjs/composition-api'

// import {EditUser} from "../../pages/auth/admin/user/edit.vue"
export default {
  props: {

    category: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const store = useStore()

    // const route = useRoute()


    const overlay = ref(false)
    const absolute = ref(true)
    const selected = ref(null)

    // const roleOptions = ref([])


    console.log(props)
    const search = ref('')


    const handleClickImg = async (e) => {
      console.log(e, 'name img')
      console.log(selected, 'selected img')

      if (e === selected.value) {
        selected.value = null
        await store.dispatch("fetch/getSelected", selected);

      } else {
        selected.value = e
        await store.dispatch("fetch/getSelected", selected);

      }

    }




    console.log(search, 'search')
    return {
      search,
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
