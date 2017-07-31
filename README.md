# vue-hellojs
A small wrapper for integrating hellojs to Vuejs

## How to install:
### CommonJS:
```
npm install --save hellojs vue-hellojs
```

And in your entry file:
```
import Vue from 'vue'
import hellojs from 'hellojs'
import Vuehellojs from 'vue-hellojs'

Vue.use(Vuehellojs, hellojs)
```

### Script:
Just add 3 scripts in order: `vue`, `hellojs` and `vue-hellojs` to your `document`.

## Usage:
This wrapper bind `hellojs` to `Vue` or `this` if you're using single file component.

You can `hellojs` like this:
```
Vue.hellojs.get(api).then((response) => {
  console.log(response.data)
})

this.hellojs.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
```
