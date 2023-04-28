

const sequelize = require('../db/db')
const users = require('../model/User')

sequelize.sync();


module.exports = sequelize;