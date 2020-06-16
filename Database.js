const Pool = require('pg').Pool; 

const pool = new Pool({
    user: 'lvzswkpjwiupvz',
    password: 'c2d1a41f5cf9f1898c35f36c267be16fb0d59becc7d60a28eb3f9509d70250ce',
    host: 'ec2-52-200-48-116.compute-1.amazonaws.com',
    database: 'd9fngc9o5shpp9',
    port: '5432',
    ssl: {rejectUnauthorized: false}
});

/*const sql = `
    CREATE TABLE IF NOT EXISTS carros
    (
        id serial primary key,
        modelo varchar(50) not null,
        placa varchar(50) not null,
        ano int not null
     )
 `;
 pool.query(sql, (error, result) => {
   if(error)
        throw error
     console.log('Tabela adicionada com sucesso!');
});*/

/*const sql_insert = `
         INSERT INTO carros (modelo, placa, ano) VALUES ('Camaro','ABC1245', 2012)
`;
 pool.query(sql_insert, function(error, result) {
     if(error)
         throw error;
    console.log(result.rowCount);
 })*/

 const sql_select = 
 `
 SELECT * FROM  carros
 
 `;
 pool.query(sql_select, function(error, result) {
     if(error)
         throw error;
    console.log(result.rows);
    })