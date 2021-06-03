/*
 * @Author: sheng.wang
 * @Date: 2021-02-09 16:48:14
 * @LastEditTime: 2021-06-03 20:15:59
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /x-engine/npm-modules/vue/vue-router/src/install.js
 */
import View from './components/view'
import Link from './components/link'
import { intercept } from './util/app-intercept'
export let _Vue

export function install (Vue, protocol) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = v => v !== undefined
  if (protocol) {
    intercept(protocol)
  } else {
    if (process.env.NODE_ENV === 'development') {
      intercept('omp')
    } else {
      intercept('microapp')
    }
  }
  
  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }
  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
