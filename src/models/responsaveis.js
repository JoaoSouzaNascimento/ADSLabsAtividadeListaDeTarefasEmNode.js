const database = require("../database/database")
const Sequelize = require("sequelize")

/*  
    Id (int),
    Nome (minimo 3 caracteres), 
    Data de nascimento (minimo 2014 - máximo 100 anos atrás) 
*/
const Responsaveis = database.define("responsaveis", {
    id_responsavel: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    timestamp: true
})

module.exports = Responsaveis