<template>
  <BaseCard>
    <h3>Pendapatan saya</h3>
    <v-divider class="mt-1"></v-divider>
    <div class="list-pendapatan pa-3 mt-3">
      <div v-if="getList.referral?.length > 0">

        <BaseCard v-for="referral in getList.referral" :key="referral" class="list-pendapatan-item mt-3">
          <div class="d-flex justify-space-between">
            <div>{{ referral.name }}</div>
            <div>{{ referral.phone }}</div>
          </div>
        </BaseCard>
      </div>
      <p v-else>Referral belum tersedia</p>
    </div>
  </BaseCard>
</template>
<script>
import { useStore, computed } from '@nuxtjs/composition-api'
export default {
  layout: 'blank',
  middleware: 'auth',
  setup() {
    const store = useStore()

    const getList = computed(() => {
      return store.getters['referral/getList']
    })

    return {
      getList,

    }
  }
}
</script>
