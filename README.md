# vue-hello
A small wrapper for integrating hellojs to Vuejs

## How to install:
### CommonJS:
```
npm install --save hellojs vue-hello
```

And in your entry file:
```
import Vue from 'vue'
import hellojs from 'hellojs'
import Vuehello from 'vue-hello'

Vue.use(Vuehello, hellojs)
```

### Script:
Just add 3 scripts in order: `vue`, `hellojs` and `vue-hello` to your `document`.

## Usage:
This wrapper bind `hellojs` to `Vue` or `this` if you're using single file component.

You can `hello` like this:
```
Vue.hello.get(api).then((response) => {
  console.log(response.data)
})

this.hello.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
```
