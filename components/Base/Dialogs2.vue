
<template>

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog max-width="600" :data="data" :color="color" v-bind="$attrs" v-on="$listeners">

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="mb-5" color="primary" dark>Opening from the bottom</v-toolbar>
            <v-card-text >
             <p> Name:   {{data.name? data.name: ''}} </p>
             <p> Email:   {{data.email? data.email: ''}} </p>
             <p> No Hp:   {{data.phone_number? data.phone_number: ''}} </p>
             <p> Role:   {{data.selectedRole? data.selectedRole: ''}} </p>

            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>




</template>

<script>
export default {
  name: 'BaseDialogs',
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
