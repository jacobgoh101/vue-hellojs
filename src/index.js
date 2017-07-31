(function () {

/**
 * Install plugin
 * @param Vue
 * @param hellojs
 */

function plugin(Vue, hellojs) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!hellojs) {
    console.error('You have to install hellojs')
    return
  }

  Vue.hellojs = hellojs

  Object.defineProperties(Vue.prototype, {

    hellojs: {
      get() {
        return hellojs
      }
    },

    $http: {
      get() {
        return hellojs
      }
    }

  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.hellojs) {
  Vue.use(plugin, window.hellojs)
}

})();
