/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-14 13:06:09
 */
Vue.directive('clickoutside', {
  bind: function (el, binding, vnode) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression === 'handleClose') {
        binding.value()
      }
    }
    function keydownHandler (e) {
      if (e.code === 'Escape') {
        binding.value()
      }
    }
    el.__vueClickOutSide__ = documentHandler
    document.addEventListener('click', documentHandler)
    if (binding.modifiers && Object.hasOwn(binding.modifiers, 'esc')) {
      document.addEventListener('keyup', keydownHandler)
    }
  },
  update: function (el, binding, vnode) {
    // alert(1)
    // binding.expression = 'updateExpression'
    // binding.value()
    // console.log(binding)
    // binding.value() = function () {
    //   alert('v-directives expression has been changed!')
    // }
  },
  unbind: function (el, binding) {
    document.removeEventListener('click', el.__vueClickOutSide__)
    delete el.__vueClickOutSide__
  }
})