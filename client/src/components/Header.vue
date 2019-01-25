<template>
  <v-toolbar fixed class="green" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        Shops
      </span>
    </v-toolbar-title>

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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}

</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: goldenrod;
}
</style>
