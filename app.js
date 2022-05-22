const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');

const tickets = [
    {country: 'Germany', time: '2022-04-04'},
    {country: 'USA', time: '2022-04-20'},
    {country: 'Russia', time: '2022-05-12'},
    {country: 'Japan', time: '2022-03-19'},
    {country: 'Canada', time: '2022-04-22'},
    
];

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialDir: `${__dirname}/views/partials`

}));

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('main');

});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tur',
  password: '1337228662vvv',
  port: 5432,
})







const getUsers = (request, response) => {
  pool.query('SELECT * FROM turs ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(results.rows[4].country)
    console.log(results.rows[4].time)
    response.render('turs',{tur: results.rows});
    console.log(results.rows)
    })
}


const createUser = (request, response) => {
  console.log(request.body)
  const name = request.body.where
  const time = request.body.time

  pool.query('INSERT INTO turs (country, time) VALUES ($1, $2)', [name, time], (error, results) => {
    if (error) {
      console.log(error)
    }
    response.render('createTurs');
    console.log(results)
  })
}




module.exports = {
  getUsers,
  createUser,
}   



app.get('/turs',getUsers);

app.get('/createTurs',createUser)


app.get('/info',(req,res) => {
    res.render('info',{data: tickets})
})

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const adults = tickets.filter((item) =>{
        if( req.body.where == item.country && req.body.time == item.time){
            return true
        }
        return false
        
    });
    if (adults.length === 1) {
        console.log(adults)
        res.render('planB', { country: adults[0].country , time: adults[0].time,});
    }else{
        console.log('Ошибка');
        error = 'В такое время или в такой город тура нету.'
        res.render('error',{error:error})
    }
});

app.listen(port, () => console.log(`App listening to port ${port}`));