<template>
  <div id="app">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="password">
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button v-on:click="register()">Register</button>
    <hr>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // name: 'HelloWorld',
  data () {
    return {
      email: 'abc@gmail.com',
      password: '123',
      error: null
    }
  },
  methods: {
    async register () {
      var body = {
        email: this.email,
        password: this.password
      }
      try {
        await AuthenticationService.register(body)
      } catch (err) {
        console.log(err.message)
      }
    }
  },
  watch: {
    // email (value) {
    //   console.log('email has changed ', value)
    // }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = '2 change'
    // }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
