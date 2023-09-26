const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_qk5q', // Database name
  'clouduser', // User
  '5iDk6dlAFy1x8yvw6oosjzQ6QIVb4p4T', // Password
  {
    host: 'dpg-ck9d0fmgtj9c73c4g9e0-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
