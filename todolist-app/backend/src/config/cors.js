// Middle com parametros de requisição, resposta
module.exports = function(req, res, next) {
    res.header('Acess-Control-Allow-Origin','*') //Api aberta pra qualquer origem
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}