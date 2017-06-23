var express = require('express');
var router = express.Router();

var URL="mongodb://newone:newone@ds131742.mlab.com:31742/newdatabase";

const db=require('monk')(URL);

//const docs=db.get('mongocollect');
const  docs=db.get('secondcollection')
/* GET home page. */
//router.get('/welcome', function(req, res, next) {
    // res.render('index', { title: 'Express' });

  /* docs.find({},function(err,docs){
        if(err) console.log(err)
        else res.json(docs[0]);
    })*/

  //docs.insert({"name":"Sweta", "age":"21","year":"2017"}, function(err,docs){
    //    if(err) console.log(err)
      //  else res.send("Finally I am done");
    //})



//});


//router.get('/wel', function(req, res, next) {
 //   res.send('Firdaus');
//});

/*pushing data to node*/
router.get('/push',function(req,res,next)
{
    docs.update(
        {
            "emailid": "alianwar@gmail.com",
            "id": "53g3",
            "name": "ali"},
        {$push: {"group":{"name": "user3"}}
    },
        function(err,docs) {
            if (err) console.log(err)
            else  res.send("successful");
        }
        )
});
module.exports = router;