const database = require("../database/database")
const Sequelize = require("sequelize")
const Tarefas = require ("./tarefas")
/*  
    Id (int),
    Nome (minimo 3 caracteres), 
    Data de nascimento (minimo 2014 - máximo 100 anos atrás) 
*/
const Responsaveis = database.define("responsaveis", {
    id: {
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

Responsaveis.hasMany(Tarefas)

module.exports = Responsaveis