<template>
  <BaseCard>
    <h3>Withdraw</h3>
    <v-divider class="mt-1"></v-divider>
    <BaseCard class="d-flex justify-space-between">
      <div>
        <div class="font-weight-bold">{{ getSaldo }}
        </div>
        <div class="text-gray">Saldo yang tersedia</div>
      </div>
      <v-icon @click="handleWithdraw" class="cursor-pointer">mdi-download-multiple</v-icon>
    </BaseCard>
  </BaseCard>
</template>
<script>
import { useStore, computed, useRouter } from '@nuxtjs/composition-api'
import { formatCurrency } from '@/helpers/Utils'
export default {
  layout: 'blank',
  middleware: 'auth',
  setup() {
    const store = useStore()
    const route = useRouter()

    const getSaldo = computed(() => {
      return formatCurrency(store.getters['referral/getSaldo'])
    })

    const handleWithdraw = () => {
      route.push('/referral/otp')
    }

    return {

      getSaldo,
      handleWithdraw
    }
  }
}
</script>
