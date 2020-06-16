const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const server = express();
server.use(cors());

const pool = new Pool({
    user: 'lvzswkpjwiupvz',
    password: 'c2d1a41f5cf9f1898c35f36c267be16fb0d59becc7d60a28eb3f9509d70250ce',
    host: 'ec2-52-200-48-116.compute-1.amazonaws.com',
    database: 'd9fngc9o5shpp9',
    port: '5432',
    ssl: {rejectUnauthorized: false}
});

server.use(express.json());
server.get('/carros', async function(request, response) {
    const result = await pool.query('SELECT * FROM carros');
    return response.json(result.rows);
})
server.listen(process.env.PORT || 3000);

server.post('/carros', async function(request, response){
    const modelo = request.body.modelo;
    const placa = request.body.placa;
    const ano = request.body.ano;

    const sql = `
    INSERT INTO carros (modelo, placa, ano) VALUES ($1, $2, $3)
    `;

    await pool.query(sql, [modelo, placa, ano]);
    return response.status(201).send();
});

server.delete('/carros/:id', async function(req, res){
    const id = req.params.id;

    sql = 'DELETE FROM carros WHERE id = $1';

    await pool.query(sql, [id]);

    res.send();
})

server.put('/carros/:id', async (request, response) => {
    const {id} = request.params;
    const {modelo,placa,ano} = request.body;
    const sql = `UPDATE equipes SET id = $1, modelo = $2, placa = $3 WHERE ano = $4`;
    await pool.query(sql, [id,modelo,placa,ano]);
    return response.status(204).send();
})