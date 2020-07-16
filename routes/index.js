var express = require('express');
var router = express.Router();
var request = require('sync-request');
var requeteApiMyMoviz = request ("GET", "https://api.themoviedb.org/3/discover/movie?api_key=feecd6f76e3cf0ee017208a763ef2a51&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
var film = JSON.parse(requeteApiMyMoviz.getBody());
var apimyownStrapi = request('GET', 'https://myownstrapi.herokuapp.com/films');
var objetApiStrapi= JSON.parse(apimyownStrapi.getBody());
/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', {film });
 
});
/*router.get('/like', function(req, res, next) {
 var type= req.query.type;
 var couleur= req.query.couleur;
 console.log(couleur)
//  if (couleur == "rouge"){
   
//  }
  res.render('index', {film, type : req.query.type, couleur: req.query.couleur});
 
});*/

router.get('/blog', function(req, res, next) {


  res.render('blog', {objetApiStrapi});
 
});

module.exports = router;
