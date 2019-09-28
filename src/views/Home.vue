<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="3"
      >
        <material-card
          v-for="(brand, index) in brands"
          :key="brand.id"
          class="v-card-profile"
        >
          <v-card-text class="text-center">
            <h2 class="title mb-3">
              {{ brand.name }}
            </h2>

            <p class="font-weight-light">
              {{ brand.state_registrations.length }} State Registrations
            </p>
            <v-btn
              color="success"
              @click="goToDetail(index)"
            >
              View Detail
            </v-btn>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      brands: state => state.brands,
    },
    ),
    created () {
      this.$store.dispatch('loadBrands')
    },
    methods: {
      goToDetail (index) {
        this.$router.push({ name: 'detail', query: { id: index } })
      },
    },

  }
</script>
