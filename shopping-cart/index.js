/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-05 17:18:52
 */
var app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        check: false,
        id: 1,
        name: 'iPhone7',
        price: 6188,
        count: 1
      },
      {
        check: false,
        id: 2,
        name: 'iPad Pro',
        price: 5888,
        count: 1
      },
      {
        check: false,
        id: 3,
        name: 'MacBook Pro',
        price: 21488,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice () {
      var total = 0
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i]
        total += item.check ? item.price * item.count : 0
      }
      return total.toString().replace(/B(?=(d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce (index) {
      if (this.list[index].count === 1) return
      this.list[index].count -= 1
    },
    handleAdd (index) {
      this.list[index].count += 1
    },
    handleRemove (index) {
      this.list.splice(index, 1)
    },
    selectAll () {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].check = true
      }
    }
  }
})