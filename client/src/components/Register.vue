<template>
  <div>
    <h1>Register</h1>

    <input v-model="email" type="email" name="email" placeholder="email"/>
    <br>
    <input v-model="password" type="password" name="password" placeholder="password"/>
    <br>
    <div class="error" v-html="error"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({// call register in the AS component then wait for a response
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error // what is returned from axios
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
