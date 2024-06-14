const database = require("../database/database")
const Sequelize = require("sequelize")
const Responsaveis = require("../models/responsaveis")
/*  
    Id (int),
    Título,
    Descrição (pode ser nulo),
    Data limite de conclusão,
    Data data de conclusao
*/
const Tarefas = database.define("tarefas", {
    id_tarefa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    responsavelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'responsaveis',
          key: 'id_responsavel'
        },
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_limite: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    data_conclusao: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM,
        values: ['pendente', 'entregue', 'expirado'],
        allowNull: false
    }
}, {
    timestamp: true
})

Responsaveis.hasMany(Tarefas, { foreignKey: "responsavelId", onDelete: 'CASCADE' });
Tarefas.belongsTo(Responsaveis, { foreignKey: "responsavelId" });

module.exports = Tarefas