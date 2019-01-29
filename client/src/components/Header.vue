<template>
  <v-toolbar fixed class="nav-header" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        router to="root">
        Shops
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
      flat dark
        router to="nearbyshops"
        >
        Nearby Shops
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn
      v-if="$store.state.isUserLoggedIn"
      flat dark
        router to="prefferedshops"
        >
        Preffered Shops
      </v-btn>
    </v-toolbar-items>

   <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      flat dark
        router to="login"
        >
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat dark
        router to="register"
        >
        Sign Up
      </v-btn>

      <v-btn
      v-if="$store.state.isUserLoggedIn"
      flat dark
        @click="logout"
        >
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}

</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: goldenrod;
}
.nav-header {
  background-color: #6050dc;
}
</style>
