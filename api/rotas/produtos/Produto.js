const TabelaProduto = require('./TabelaProduto')

class Produto {

    constructor({ id, descricao, valor, categoria, idFornecedor, dataCriacao, dataAtualizacao, versao }) {
        this.id = id
        this.descricao = descricao
        this.valor = valor
        this.categoria = categoria
        this.idFornecedor = idFornecedor
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    

}

module.exports = Produto