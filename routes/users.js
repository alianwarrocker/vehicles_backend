var express = require('express');
var router = express.Router();
//working on backend





/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource'+req.params.id);
});


router.get('/wel', function(req, res) {
    res.send('Ali Anwar');
});
module.exports = router;
