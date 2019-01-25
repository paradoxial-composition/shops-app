module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'shopsapp',
    user: process.env.DB_USER || 'shopsapp',
    password: process.env.DB_PASS || 'shopsapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './shopsapp.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret' // secret only known by the server used to determine if the jwt toekn is valid or not
    // if any tries to send a bad token the server will know something is fishy cuz them niggas dont have the secret
  }
}
