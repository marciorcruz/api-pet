const roteador = require('express').Router()
const TabelaProduto = require('./TabelaProduto')
const Produto = require('./Produto')

roteador.get('/', async (req, res) => {
    const resultados = await TabelaProduto.listar()
    res.status(200)
    res.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador