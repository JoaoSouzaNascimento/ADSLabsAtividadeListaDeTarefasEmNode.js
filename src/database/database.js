const Sequelize = require("sequelize")
const { FORCE } = require("sequelize/lib/index-hints")

const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST
    }
)

module.exports = database

require("../models/responsaveis")
require("../models/tarefas")

database.sync()