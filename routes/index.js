var express = require('express');
var router = express.Router();

var URL="mongodb://newone:newone@ds131742.mlab.com:31742/newdatabase";

const db=require('monk')(URL);

const docs=db.get('mongocollect');
/* GET home page. */
router.get('/welcome', function(req, res, next) {
    // res.render('index', { title: 'Express' });

  /* docs.find({},function(err,docs){
        if(err) console.log(err)
        else res.json(docs[0]);
    })*/

  docs.insert({"name":"Sweta", "age":"21","year":"2017"}, function(err,docs){
        if(err) console.log(err)
        else res.send("Success");
    })



});


router.get('/wel', function(req, res, next) {
    res.send('Firdaus');
});

module.exports = router;