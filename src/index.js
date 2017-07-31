(function () {

/**
 * Install plugin
 * @param Vue
 * @param hellojs
 */

function plugin(Vue, hello) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!hello) {
    console.error('You have to install hello')
    return
  }

  Vue.hello = hello

  Object.defineProperties(Vue.prototype, {

    hello: {
      get() {
        return hello
      }
    }

  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.hello) {
  Vue.use(plugin, window.hello)
}

})();
