var express = require('express');
var app = express();

var medidaRouter = require('./routes/medidaRoutes');

app.use('/medidas', medidaRouter);


app.listen(3300, function () {
    console.log('Servidor rodando na porta 3300');
});
