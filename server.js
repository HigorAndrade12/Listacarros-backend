
const express = require('express');
<<<<<<< HEAD
const database = require ('./Database');
const cors = require ('cors');
=======
const database = require('./database');
const cors = require('cors');
>>>>>>> d8c4ab609e06ac8f12344fb46c1eb405590ef3e9

const server = express();
// o cors permite que o servidor aceite requisições de qualquer lugar
server.use(cors());
server.use(express.json());

server.get('/', async function(request, response) {
   const dados = await database.read();
   return response.json(dados);
})
server.post('/', async function(request, response) {

    const cor = request.body.cor;
    const modelo = request.body.modelo;
    const placa = request.body.placa;
    const result = await database.create(cor, modelo, placa);
   
    return response.status(204).send();
})

server.put('/:id', async function(request, response) { 
    const id = request.params.id;
    const {cor, modelo, placa} = request.body;
    const result = await database.update(id, cor, modelo, placa);
    return response.status(204).send();
})

server.delete('/:id', async function(request, response) { 
    const id = request.params.id;
    const result = await database.delete(id);
    return response.status(200).send();
})

server.listen(process.env.PORT || 3000);
