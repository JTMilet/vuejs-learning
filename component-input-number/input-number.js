/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-12 23:04:27
 */
function isValueNumber (value) {
  return (/(^-?[0-9]+\.{1d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value) + ''
}
Vue.component('input-number', {
  template: '\
    <div class="input-number">\
      <input\
        id="input"\
        type="text"\
        :value="currentValue"\
        @change="handleChange"\
      />\
      <button \
        @click="handleDown"\
        :disabled="currentValue < min"\
      >-</button>\
      <button \
        @click="handleUp"\
        :disabled="currentValue > max"\
      >+</button>\
    </div>\
  ',
  props: {
    max: { type: Number, default: Infinity },
    min: { type: Number, default: Infinity },
    value: { type: Number, default: 0 },
    step: { type: Number, default: 0 }
  },
  data: function () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue: function (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value: function (val) {
      this.updateValue(val)
    }
  },
  methods: {
    updateValue: function (val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    handleDown: function () {
      if (this.currentValue <= this.min) return
      if (this.step) {
        this.currentValue -= this.step
      } else {
        this.currentValue -= 1
      }
    },
    handleUp: function () {
      if (this.currentValue >= this.max) return
      if (this.step) {
        this.currentValue += this.step
      } else {
        this.currentValue += 1
      }
    },
    handleChange: function (event) {
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        } else if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    }
  },
  mounted: function () {
    var _this = this
    this.updateValue(this.value)
    document.addEventListener('keyup', function (e) {
      if (document.activeElement.id === 'input') {
        if (e.code === 'ArrowUp') {
          _this.handleUp()
        }
        if (e.code === 'ArrowDown') {
          _this.handleDown()
        }
      }
    })
  }
})