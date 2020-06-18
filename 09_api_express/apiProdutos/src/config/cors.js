module.exports = function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-request-With, Content-Type, Accept");
    next();// É necessário para dar continuidade ao processo de requisição
}