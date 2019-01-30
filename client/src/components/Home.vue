<template>
  <v-layout class="shop-container">
   <v-flex>
     <div>
       <v-toolbar inverted-scroll flat dense class="shop-toolbar" dark>
       <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-text-field
            label="Search"
            single-line
            height="1.5rem"
            v-model="search"
          ></v-text-field>
            <v-icon>search</v-icon>
          </v-toolbar-items>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <div class="card-container">
            <v-layout class="card-inner-container"
                v-for="shop in filteredShops"
                :key="shop._id"
                >
                <v-flex xs14>
                <v-card
                    height="200px"
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

                    <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="$store.state.isUserLoggedIn"
                      icon
                      @click="addPrefferedShop($store.state.user.id, shop._id)">
                        <v-icon>thumb_up</v-icon>
                    </v-btn>
                    <v-btn
                      v-if="$store.state.isUserLoggedIn"
                      icon>
                        <v-icon>thumb_down</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-flex>
                </v-layout>
            </div>
        </div>
     </div>
    <div class="host elevation-2">
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      shops: []
    }
  },
  created () {
    axios.get('http://localhost:8081/shops')
      .then((response) => {
        this.shops = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    addPrefferedShop (userID, id) {
      var newPerefferedShop = {
        userId: userID,
        shopId: id
      }

      axios.post('http://localhost:8081/prefferedshops', newPerefferedShop)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    filteredShops () {
      return this.shops.filter((shop) => {
        return shop.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.shop-container {
  margin-top: 20%;
  width: 100%;
}
.shop-toolbar {
  background-color: #6050dc;
  border-radius:50px;
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
  margin-bottom: 6%;
}

.host {
  background-color: white!important;
  opacity: 0.5;
  border-color: transparent!important;
}
</style>
