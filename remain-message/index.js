/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-17 20:14:21
 */
var app = new Vue({
  el: '#app',
  data: {
    username: '',
    message: '',
    list: []
  },
  methods: {
    handleSend: function () {
      this.list.push({
        name: this.username,
        message: this.message
      })
      this.message = ''
    },
    handleReply: function (index) {
      var name = this.list[index].name
      this.message = '回复@' + name + ':'
    },
    delReply: function (index) {
      alert(index)
      // this.list.splice(index, 1)
    }
  }
})