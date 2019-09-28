import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default {
  loadBrands ({ commit, state }) {
    // const brandsList = [ { 'user_id': '5d26bc028fc6c70caaa8fa7d', 'supplier_id': 'ad51d5ac-17bb-4240-8648-c483b224b2aa', 'name': 'Carlsberg', 'core_or_seasonal': 'core', 'is_active': true, 'has_logo': true, 'abv': 0.75, 'available_date': '2019-10-21', 'state_registrations': [ { 'state': 'AL', 'registrationNumber': '5934JF-6Y' }, { 'state': 'NJ', 'registrationNumber': 'HG89-MW-5QA' } ], 'entity_id': 'dbaf41b6-8a50-40d4-b443-14aeb0e6d049', 'version': '245f4a8c-a266-4b13-80d4-a5ae3293df5a', 'changed_on': '2019-07-19T21:47:40Z' } ]
    // commit('GET_BRANDS', brandsList)

    var header = { 'headers': { 'Authorization': 'Bearer ABCDEF', 'x-supplier-id': 'ad51d5ac-17bb-4240-8648-c483b224b2aa' } }
    var url = 'http://private-bc245d-brewoptixv2.apiary-mock.com/brands'
    axios
      .get(url, header)
      .then(r => r.data)
      .then(brands => {
        commit('GET_BRANDS', brands)
      })
  },

  getBrand ({ commit, state }, param) {
    commit('GET_BRAND', param.id)
  },
}
