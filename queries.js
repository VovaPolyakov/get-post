








// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'tur',
//   password: '1337228662vvv',
//   port: 5432,
// })


// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM turs ORDER BY id ASC', (error, results) => {
//     if (error) {
//       console.log(error)
//     }
//     response.status(200).json(results.rows)
//     console.log(results.rows)
//   })
// }


// module.exports = {
//   getUsers,
// }