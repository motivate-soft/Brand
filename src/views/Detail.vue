<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <v-col cols="6">
        <material-card
          color="green"
          :title="brands[id].name"
          text=""
        >
          <v-data-table
            :headers="headers"
            :items="brands[id].state_registrations"
            hide-default-footer
          />
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'State',
          value: 'state',
        },
        {
          sortable: false,
          text: 'RegistrationNumber',
          value: 'registrationNumber',
        },
      ],
      items: [],
    }),
    computed: {
      ...mapState([
        'brands',
        'id',
      ]),
    },
    created () {
      let id = this.$route.query.id
      this.$store.dispatch('getBrand', { id: id })
    },
  }
</script>
