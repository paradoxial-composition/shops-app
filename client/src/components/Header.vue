<template>
  <v-toolbar fixed class="nav-header" dark>
    <v-toolbar-title class="mr-4">
      <v-btn
        icon
        @click="allShops">
        <v-icon>home</v-icon>
      </v-btn>
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
       @click="dialog = true"
        flat
        dark
      >
        Login
      </v-btn>
      <v-dialog
      width="50%"
      v-model="dialog"
    >
      <v-card>
        <Login @close="dialog = false"/>
      </v-card>
    </v-dialog>

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
import Login from '@/components/Login.vue'
export default {
  name: 'Header',
  components: {
    Login
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    },
    allShops () {
      this.$router.push({
        name: 'shops'
      })
    }
  }
}

</script>

<style scoped>

.nav-header {
  background-color: #6050dc;
}
</style>
