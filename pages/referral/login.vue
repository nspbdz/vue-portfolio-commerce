<template>
  <section class="register h-100 d-flex justify-center">
    <div class="my-auto">
      <v-container fluid>
        <BaseCard :width="width" class="text-center">
          <validation-observer v-slot="{ invalid }">
            <form ref="form" @submit.prevent="handleOtp">
              <div class="register-head">
                <h1 class="display-1 font-weight-bold">Login Agreesip</h1>
                <p class="text-gray font-weight-light mt-2">
                  Silahkan login referral
                </p>
              </div>

              <div class="register-content mt-10 mb-3">
                <div class="email">
                  <BaseInput ref="email" v-model="register.nama" outlined label="Nama" placeholder="Masukkan email anda"
                    prepend-inner-icon="mdi-account" rules="required" @keyup.enter.native="submitLogin"></BaseInput>
                </div>
                <div class="password">
                  <BaseInput ref="handphone" v-model="register.nohp" label="No Handphone" outlined
                    prepend-inner-icon="mdi-phone" rules="required" @keyup.enter.native="submitLogin">
                  </BaseInput>
                </div>
              </div>

              <div class="register-button">
                <BaseButton dense :disabled="invalid" block @click="handleOtp">Send Otp</BaseButton>
              </div>
            </form>
          </validation-observer>
        </BaseCard>
      </v-container>
    </div>
  </section>
</template>
<script>
import { reactive, useRouter, defineComponent, useStore } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'auth',
  // middleware: 'guest',
  setup() {
    const router = useRouter()
    const store = useStore()

    const register = reactive({
      nama: 'Testing',
      nohp: '085155070899'
    })


    const handleOtp = () => {
      store.dispatch('referral/login', register).then(() => {
        router.push('/referral/otp')
        localStorage.setItem('indentifier', register.nohp)
      })
    }

    return {
      register,
      handleOtp,

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
})
</script>
