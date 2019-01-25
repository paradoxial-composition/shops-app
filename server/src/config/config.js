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
  }
}
