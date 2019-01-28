<template>
  <v-layout class="login-container">
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="login-toolbar" dark>
          <v-toolbar-title>[PH] Shops that near your location</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <div class="card-container">
            <v-layout class="card-inner-container"
                v-for="shop in shops"
                :key="shop._id"
                >
                <v-flex xs14>
                <v-card height="200px"
                    width="250px">
                    <v-img
                    :src="shop.picture"
                    height="200px"
                    width="250px"
                    >
                    <v-container
                        fill-height
                        fluid
                        pa-2
                    >
                        <v-layout fill-height>
                        <v-flex>
                            <span class="headline white--text" v-text="shop.name"></span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>share</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-flex>
                </v-layout>
            </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      shops: []
    }
  },
  created () {
    axios.get('http://localhost:8081/nearby')
      .then((response) => {
        this.shops = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.login-container {
  margin-top: 20%;
  width: 100%;
}
.login-toolbar {
  background-color: #6050dc;
}
.card-container {
  margin-top: 2.5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.card-inner-container {
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
}
</style>
