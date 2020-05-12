const express = require('express');

const server = express();

server.use(express.json());

const carros = [
    {id: '1', modelo: 'Onix', placa:'ABC1234', ano:'2018'},
    {id: '2', modelo: 'Gol', placa:'BEC3412', ano:'2002'},
    {id: '3', modelo: 'Santana', placa:'DOC2349', ano:'2000'},
    {id: '4', modelo: 'Camaro', placa:'BAT7854', ano:'2010'},
]

server.get('/carro', function(request, response) {
    response.json(carros);
})

server.post('/carro', function(request, response){

 const id = request.body.id;
 const modelo = request.body.modelo;
 const placa = request.body.placa;
 const ano = request.body.ano;

 carros.push({id, modelo, placa, ano});
 response.status(204).send();
})

server.put('/carro/:id', function(request, response){
    const {id, modelo, placa, ano} = request.body;

for(let i = 0; i<carros.length; i++){
if(carros[i].id==id) {
    carros[i].id = id;
    carros[i].modelo = modelo;
    carros[i].placa = placa;
    carros[i].ano = ano;
    break;
 }
}

 return response.status(204).send();
})

server.delete('/carro/:id', function(request, response){

    const id = request.params.id;


    for(let i = 0; i<carros.length; i++){
    if(carros[i].id==id) {
    carros.splice(i, 1);
    break;
    }
}
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);