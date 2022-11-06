<template>
  <section class="list-referral pa-3">
    <div class="logout">
      <BaseButton @click="handleLogout" dense color="error" fab>
        <v-icon dark>
          mdi-exit-to-app
        </v-icon>
      </BaseButton>
    </div>
    <v-container>
      <div class="pa-5 text-center white--text">
        <h1>Referral Agreesip</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <ReferralMyReferral></ReferralMyReferral>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <ReferralMyIncome></ReferralMyIncome>
        </v-col>
        <v-col cols="12">
          <ReferralWithdraw></ReferralWithdraw>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { onMounted, useStore, computed } from '@nuxtjs/composition-api'
export default {
  layout: 'blank',
  middleware: 'auth',
  setup() {
    const store = useStore()

    const getList = computed(() => {
      return store.getters['referral/getList']
    })

    const getSaldo = computed(() => {
      return store.getters['referral/getSaldo']
    })


    onMounted(() => {
      store.dispatch('referral/list')

      // setInterval(() => {

      store.dispatch('referral/saldo')
      // }, 1000);
    })

    const handleLogout = () => {
      store.dispatch('referral/logout')
    }

    return {
      getList,
      getSaldo,
      handleLogout
    }
  }
}
</script>
<style>
.logout {
  position: absolute;
  top: 10px;
  right: 10px;

}

.list-referral {
  background-color: #1869AC;
  min-height: 100vh;
}

.list-pendapatan {
  max-height: 50vh;
  overflow-y: auto;
}

.cursor-pointer {
  cursor: pointer;
}

h3 {
  text-align: center;
}
</style>
