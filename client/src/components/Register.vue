<template>
  <v-layout class="register-container">
    <v-flex xs12 sm6 offset-sm3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="register-toolbar" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="shops-form"
            autocomplete="off">
            <v-text-field
              label="E-mail"
              v-model="email"
              ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              ></v-text-field>
            <br>
            <div class="error" v-html="error"/>
            <v-btn style="background-color: #6050dc;" @click="register" dark>Register</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
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
        const response = await AuthenticationService.register({// call register in the AS component then wait for a response
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'nearbyshops'
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
.register-container {
  margin-top: 20%;
  width: 100%;
}
.register-toolbar {
  background-color: #6050dc;
}
</style>
