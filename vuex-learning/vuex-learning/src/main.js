/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-21 16:18:14
 */
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    filteredList: state => {

    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    },
    decrease (state) {
      state.count--
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
