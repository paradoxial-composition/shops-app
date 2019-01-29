<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container>
          <v-flex >
           <router-view/>
          </v-flex>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://wscreenwallpapers.com/wp-content/uploads/2015/10/streets-new-york345.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 60px;
}

.component-container {

}
</style>
