const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');

const tickets = [
    {country: 'Germany', time: 12},
    {country: 'USA', time: 9},
    {country: 'Russia', time: 13},
    {country: 'Canada', time: 17},
    {country: 'Japan', time: 24},
];
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialDir: `${__dirname}/views/partials`

}));
app.use(express.static(`${__dirname}/views/css`));


app.get('/', (req, res) => {
    res.render('main');

});
app.get('/info',(req,res) => {
    res.render('info',{data: tickets})
})


app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.where)
    console.log(req.body.time)
    if (!req.body) return res.sendStatus(400);
    const adults = tickets.filter((item) =>{
        if( req.body.where == item.country && req.body.time <= item.time){
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