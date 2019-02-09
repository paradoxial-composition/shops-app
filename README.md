# Nearby shops App 🗺
version1.0.0

Passion and determination (undertale) were key, using [Vue js](https://github.com/vuejs/vue) and [Express.js](https://github.com/expressjs/express).

The WebApp shows shops that are nearby your location, after logging in or registering if you are new, you can create and manage a list of your most liked shops and also disliked ones that are to be avoided.
## 📑The Functional specification covered
```
As a User, I can sign up using my email & password. ✔️
As a User, I can sign in using my email & password. ✔️
As a User, I can display the list of shops sorted by distance. ✔️
As a User, I can like a shop, so it can be added to my preferred shops. ✔️
    Acceptance criteria: liked shops shouldn’t be displayed on the main page. ✔️

[BONUS] As a User, I can dislike a shop, so it won’t be displayed within “Nearby Shops” list page. ✔️
[BONUS] As a User, I can display the list of preferred shops. ✔️
[BONUS] As a User, I can manage both my pereferred shops list as my disliked ones. ✔️
```
To test the diffrent parts of the project you can use the following account :

> Email : testing@gmail.com
> Password : 12345678

or you can sign up.

## 🃏Requirements
* [Node js](https://nodejs.org/en/)
* [MongoDB](https://github.com/mongodb/mongo)
* [Vue CLI](https://github.com/vuejs/vue-cli)
## 🌓Repository
[Link to the repository](https://github.com/paradoxial-composition/shops-app)
## 🌓FrontEnd part
#### Built with
* [Vue](https://github.com/vuejs/vue)
* [Vue CLI](https://github.com/vuejs/vue-cli)
* [Vuex](https://github.com/vuejs/vuex)
* [Vue router](https://github.com/vuejs/vue-router)
* [axios](https://github.com/axios/axios)
## 🌗BackEnd part (API)
#### Built with
* [Nodejs](https://nodejs.org/en/)
* [Express.js](https://github.com/expressjs/express)
* [mongoose](https://github.com/Automattic/mongoose)
* [body-parser](https://github.com/expressjs/body-parser)
* [cors](https://github.com/expressjs/cors)
* [morgan](https://github.com/expressjs/morgan)
* [sequelize](https://github.com/sequelize/sequelize)
* [joi](https://github.com/hapijs/joi)
* [jwt](https://github.com/auth0/node-jsonwebtoken)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js/) (bluebird as Promise lib)
## ⚡Deploy
#### First part
Open the terminal
Run: 
```
$ git clone https://github.com/paradoxial-composition/shops-app.git
```
* Navigate to `./server`
* Run: 
``` 
$ npm install
$ ya rn install # if you use [Yarn]
$ npm start
```
📣 After running the commands the server will be live on http://localhost:8081.
#### Second part
* Now navigate to `../client`
* Run: 
``` 
$ npm install
$ ya rn install # if you use [Yarn]
$ npm start
```
📣 The app is now live on http://localhost:8080.
#### The Database (mongodb)
To install mongoldb on OS X, you can follow this link [Installing MongoDB on a Mac](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
Being at the root folder of the project `../client` 
run: the command: 
```
$ mongorestore -d MyShops -c Shops shops.bson
```
## 📐Template
Hand crafted template from scratch Using Vuetify(https://github.com/vuetifyjs/vuetify).
## 📜Licensing
* Copyright MIT.