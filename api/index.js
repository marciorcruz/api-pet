const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const fornecedores = require('./rotas/fornecedores')
const produtos = require('./rotas/produtos')
app.use('/api/fornecedores', fornecedores)
app.use('/api/produtos', produtos)

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))