/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-13 13:16:43
 */
Vue.component('pane', {
  name: 'pane',
  template: '\
  <div class="pane" v-show="show">\
    <slot></slot>\
  </div>',
  props: {
    name: { type: String, default: '' },
    label: { type: String, default: '' }
  },
  data: function () {
    return {
      show: true
    }
  }
})