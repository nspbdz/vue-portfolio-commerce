<template>
  <BaseCard>
    <h3>Referral saya</h3>
    <v-divider class="mt-1"></v-divider>
    <div v-if="getList.referral_code" class="mt-2 d-flex justify-space-between">
      <!-- <p class="my-auto">https://agreesip.com/{{ getList.referral_code }}</p> -->
      <p class="my-auto">http://localhost:3000/referral/register?referral_code={{ getList.referral_code }}</p>
      <v-icon class="cursor-pointer"
        @click="handleCopyToClipboard(`http://localhost:3000/referral/register?referral_code=${getList.referral_code}`)">
        mdi-content-copy</v-icon>
    </div>
    <v-skeleton-loader v-else class="mx-auto" type="list-item"></v-skeleton-loader>
  </BaseCard>
</template>
<script>
import { useStore, computed } from '@nuxtjs/composition-api'
import { copyToClipboard } from '@/helpers/Utils'
export default {
  layout: 'blank',
  middleware: 'auth',
  setup() {
    const store = useStore()

    const getList = computed(() => {
      return store.getters['referral/getList']
    })

    const handleCopyToClipboard = (text) => {
      copyToClipboard(text)
    }

    return {
      getList,
      handleCopyToClipboard

    }
  }
}
</script>
