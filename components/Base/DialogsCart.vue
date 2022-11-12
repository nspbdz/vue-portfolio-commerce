
<template>

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog max-width="600" :data="data"  v-bind="$attrs" v-on="$listeners">

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar class="mb-5" color="primary" dark>Order</v-toolbar>
            <v-card-text>
              <!-- {{ data?.images[0] }} -->
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="name*" required></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Address" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-img :src="data?.images[0]" alt="lorem" class="image" max-height="150" width="200"></v-img>

                  </v-col>
                  <v-col cols="12" sm="8" md="8">
                    <div>

                      <h1>
                        {{ data.title }}
                      </h1>

                      <h4>
                        {{ data.description }}
                      </h4>
                    </div>

                    <v-btn class="btn btn--minus" @click="counter = counter - 1">
                      -
                    </v-btn>
                    <v-chip>
                      {{ counter }}
                    </v-chip>
                    <v-btn class="btn btn--plus" @click="counter = counter + 1">
                      +
                    </v-btn>
                    <br>
                    <br>
                    <h2>
                     $ {{ data.price * counter }}.00
                    </h2>

                  </v-col>

                </v-row>
              </v-container>


            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn block class="primary" @click="dialog.value = false">Order</v-btn>
            </v-card-actions>

          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>




</template>

<script>
export default {
  name: 'BaseDialogsCart',
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {

    return {
      counter: 1
    }
  },

}
</script>
