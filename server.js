const express = require('express');
const database = require ('./database');
const cors = require ('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/carros', async function(request, response) {
   const dados = await database.read();
   return response.json(dados);
})
server.post('/carros', async function(request, response) {

    const cor = request.body.cor;
    const modelo = request.body.modelo;
    const placa = request.body.placa;
    const result = await database.create(cor, modelo, placa);
   
    return response.status(204).send();
})

server.put('/carros/:id', async function(request, response) { 
    const id = request.params.id;
    const {cor, modelo, placa} = request.body;
    const result = await database.update(id, cor, modelo, placa);
    return response.status(204).send();
})

server.delete('/carros/:id', async function(request, response) { 
    const id = request.params.id;
    const result = await database.delete(id);
    return response.status(200).send();
})

server.listen(process.env.PORT || 3000);