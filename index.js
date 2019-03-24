const express = require ("express");
const app = express();
const estrellas = require('./estrellas.js');
const request = require('request');
const user = require('./models/muser')
const mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
const userRoutes = require('./routes/ruser')
const bookRoutes = require('./routes/rbook')




mongoose.connect('mongodb://localhost/resthub', { 
  useCreateIndex: true,
  useNewUrlParser: true });

var db = mongoose.connection;

module.exports = mongoose;


//Fecha
app.get('/fecha', function (req, res) {

	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var reloj = hour + " : " +  minute + " : " + second;

	res.send(reloj);

});

//Estrellas
app.get('/estrellas', (req,res) => {
    request({
        headers : {
            'User-Agent' : 'mrmkrtm'
        },
        uri: 'https://api.github.com/repos/mrmkrtm/mrmkrtm.github.io'
    }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.send(info.stargazers_count.toString());
      }
      else res.send(404,"error");
    })
});

//User
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', userRoutes)
app.use('/api', bookRoutes)





app.listen(3000, () => {
  console.log("Try");
});