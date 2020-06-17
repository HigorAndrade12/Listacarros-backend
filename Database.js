const Pool = require('pg').Pool; 

const pool = new Pool({
    user: 'dllbkimyebfgby',
    password: 'c5abe23a0dd89526ced04eae47c80b210828f0b905e267c77fa662d4e91c503f',
    host: 'ec2-52-0-155-79.compute-1.amazonaws.com',
    database: 'd8jritpi8qe8k0',
    port: '5432',
    ssl: {rejectUnauthorized: false}
});

const sqlCreate = `
   CREATE TABLE IF NOT EXISTS carros
   (
      ID serial primary key,
      cor varchar(50) not null,
      modelo varchar(50) not null,
      placa varchar (50) 
   )
`;
pool.query(sqlCreate, function(error, result) {
    if(error)
     throw error
    console.log('Tabela criada com sucesso!');
});

module.exports = {

async create(cor, modelo, placa) {
    console;log(cor, modelo, placa)
    const sql = 'INSERT INTO carros (cor, modelo, placa) VALUES ($1, $2, $3)';
    const result = await pool.query(sql, [cor, modelo, placa]);
    return result.rowCount;
},

async read() {
    const sql = `SELECT * FROM carros`;
    const result = await pool.query(sql);
    return result.rows;
},
async update(id, cor, modelo, placa) {
    const sql = `UPDATE carros
    SET cor = $1, modelo= $2, placa= $3
    WHERE  id = $4`
    const result = await pool.query(sql,[id, cor, modelo, placa,]);
    return result.rowCount;
},
async delete(id){
    const sql = `DELETE FROM carros WHERE id= $1`; 
    const result = await pool.query(sql, [id]);
    return result.rowCount;
},   
    
 }