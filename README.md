# vue-hellojs
A small wrapper for integrating [HelloJs](https://github.com/MrSwitch/hello.js) to Vuejs.

HelloJs is a simple and easy to use library for implementing Social Login in web app.

## How to install:
### CommonJS:
```
npm install --save hellojs vue-hellojs
or
yarn add hellojs vue-hellojs
```

And in your entry file:
```
import Vue from 'vue';
const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');

HelloJs.init({
  google: GOOGLE_APP_CLIENT_ID
}, {
  redirect_uri: 'google-oauth2callback/'
});
Vue.use(VueHello, HelloJs);
```

## Usage:
This wrapper bind `hello` to `Vue` or `this` if you're using single file component.

You can `hello` like this:
```
Vue.hello('google').login()

this.hello('google').login()
```

## Example Component
In a .vue component file
```
<template>
  <div>
    <button @click="auth('google')">Google</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, methods: {
    auth(network) {
      let hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        let profile = "";
        hello(network).api('me').then(function (json) {
          profile = json;
        });
      })
    }
  }
}
</script>

<style scoped></style>
```
