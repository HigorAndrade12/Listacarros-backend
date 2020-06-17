const Pool = require('pg').Pool; 

const pool = new Pool({
    user: 'lvzswkpjwiupvz',
    password: 'c2d1a41f5cf9f1898c35f36c267be16fb0d59becc7d60a28eb3f9509d70250ce',
    host: 'ec2-52-200-48-116.compute-1.amazonaws.com',
    database: 'd9fngc9o5shpp9',
    port: '5432',
    ssl: {rejectUnauthorized: false}
});

const sqlCreate = `
   CREATE TABLE IF NOT EXISTS itensparavenda 
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
    const sql = 'INSERT INTO itensparavenda (cor, modelo, placa) VALUES ($1, $2, $3)';
    const result = await pool.query(sql, [placa, modelo, placa]);
    return result.rowCount;
},

async read() {
    const sql = `SELECT * FROM carros`;
    const result = await pool.query(sql);
    return result.rows;
},
async update(id, item, valor, tamanho) {
    const sql = `UPDATE carros
    SET carros = $1, valor= $2 , tamanho= $3
    WHERE  id = $4`
    const result = await pool.query(sql,[cor, modelo, placa, id]);
    return result.rowCount;
},
async delete(id){
    const sql = `DELETE FROM carros WHERE id= $1`; 
    const result = await pool.query(sql, [id]);
    return result.rowCount;
},   
    
 }