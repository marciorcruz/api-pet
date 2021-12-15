const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    },
    idFornecedor:{
        type: DataTypes.INTEGER,
        references: 'fornecedores',
        referencesKey: 'id',
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}
module.exports = instancia.define('produto', colunas, opcoes)