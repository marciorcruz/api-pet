const { ne } = require('sequelize/dist/lib/operators')
const Produto = require('./ModeloTabelaProduto')


module.exports = {
    listar() {
        return Produto.findAll()
    }
}