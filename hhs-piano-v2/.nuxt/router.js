import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ea28f04 = () => interopDefault(import('..\\pages\\Discover.vue' /* webpackChunkName: "pages/Discover" */))
const _be732f9a = () => interopDefault(import('..\\pages\\Glossary.vue' /* webpackChunkName: "pages/Glossary" */))
const _4a6fe039 = () => interopDefault(import('..\\pages\\Songs.vue' /* webpackChunkName: "pages/Songs" */))
const _e7629da6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Discover",
    component: _0ea28f04,
    name: "Discover"
  }, {
    path: "/Glossary",
    component: _be732f9a,
    name: "Glossary"
  }, {
    path: "/Songs",
    component: _4a6fe039,
    name: "Songs"
  }, {
    path: "/",
    component: _e7629da6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
