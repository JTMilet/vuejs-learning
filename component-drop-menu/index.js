/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-13 23:13:06
 */
var app = new Vue({
  el: '#app',
  data: {
    show: false
  },
  methods: {
    handleClose: function () {
      this.show = false
    },
    updateExpression: function () {
      alert('v-directives expression has been changed!')
    }
  }
})