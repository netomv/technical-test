const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const num = require('./print_numbers/logic');

let data = '';

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

num.getInfo()
    .then(res => data = res)
    .catch(e => data = e);

app.get('/', (req, res) => {
    res.render('challenge1', {
        data: data,
        title: 'Challenge',
        numChallenge: 1,
        git: true
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});