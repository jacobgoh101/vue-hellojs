"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

  /**
   * Install plugin
   * @param Vue
   * @param hellojs
   */

  function plugin(Vue, hello) {

    if (plugin.installed) {
      return;
    }
    plugin.installed = true;

    if (!hello) {
      console.error('You have to install hello');
      return;
    }

    Vue.hello = hello;

    Object.defineProperties(Vue.prototype, {

      hello: {
        get: function get() {
          return hello;
        }
      }

    });
  }

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
    module.exports = plugin;
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return plugin;
    });
  } else if (window.Vue && window.hello) {
    Vue.use(plugin, window.hello);
  }
})();