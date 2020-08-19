var express = require('express');
var router = express.Router();


const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '123',
  port: 5432,
})



/* GET home page. */


router.get('/', function(req, res, next) {
  // console.log('lay du lieu thanh cong');
  pool.query('SELECT * FROM product_info', (error,response)=>{
    if(error){
      console.log(error);
    } else {
      res.send(response.rows);
    }
    pool.end();
  })
});

module.exports = router;
