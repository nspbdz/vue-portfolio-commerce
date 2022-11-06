<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-center">❤️ Welcome to Anime watch ❤️</h1>
        <form @submit.prevent="getFetch">

          <BaseInput v-model="formValues.search" outlined prepend-inner-icon="mdi-search" label="Search"
            placeholder="Search Type like 'Naruto , etc' "></BaseInput>


          <v-btn class="mr-4" type="submit">
            submit
          </v-btn>

        </form>
        <h1 class="text-center">❤️ Top Anime watch List ❤️</h1>
<br>
        <v-card elevation="24" max-width="800" class="mx-auto">
          <v-carousel height="400">
            <v-carousel-item v-for="(item, i) in carouselData" :key="i" :src="item.images.jpg.image_url"
              reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
          </v-carousel>
        </v-card>

        <!-- <BaseButton :loading="loading" @click="getFetch">Fetch</BaseButton> -->
      </v-col>
    </v-row>
<br>






    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in items" :key="card.title" :cols="card.flex">
          <!-- {{card.episodes}} -->
          <a :href="card.url">
            <v-card>
              <v-img :src="card.images.jpg.image_url" class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="300px">
              </v-img>
              <!-- <v-card-title height="100px" v-text="card.title"></v-card-title> -->


              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="card.score / 2" color="amber" dense half-increments readonly size="14"></v-rating>

                  <div class="grey--text ms-4">
                    {{ card.score }} ({{ card.scored_by }})
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  • Episode, {{ card.episodes }}
                </div>
                <v-card-text style="overflow-y: auto; height:100px">
                  <div class="body-1">{{ card.title }}</div>
                  <v-divider light style="margin-top:15px;" />
                  <v-divider light />
                </v-card-text>


              </v-card-text>

            </v-card>
          </a>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import { reactive, computed, ref, useStore } from '@nuxtjs/composition-api'

export default {
  setup() {
    const store = useStore()

    const formValues = reactive({
      search: '',
    })
    store.commit('SET_PAGE_TITLE', 'Home')

    const loading = ref(false)

    const getFetch = () => {
      console.log(formValues)
      loading.value = true
      store.commit('SET_LOADING', true)
      store.dispatch('fetch/getFetch', formValues).finally(() => {
        // loading.value = false
        // store.commit('SET_LOADING', false)
      })

    }
    const carouselGet = computed(() =>

      store.dispatch('fetch/getCarousel', formValues).finally(() => {
        loading.value = false
        store.commit('SET_LOADING', false)
      }),

    )
    const carouselData = computed(() => store.state.fetch.carousel.data)


    console.log(carouselData)


    const items = computed(() => store.state.fetch.items.data)

    return {
      carouselGet,
      formValues,
      getFetch,
      carouselData,
      items,
      loading,
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
  mounted() {
    this.$store.dispatch('fetch/getCarousel').finally(() => {
    })
    this.$store.commit('SET_PAGE_TITLE', ' Anime')
  },

}
</script>
