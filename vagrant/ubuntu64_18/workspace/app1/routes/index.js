var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', (req, res) => {
  res.render('helloworld', {title: 'Hello, Worlds!'});
});

/* user list htmlページを作成 */
router.get('/userlist', (req,res) => {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
    res.render('userlist', {
      "userlist": docs
    });
  });
});

module.exports = router;
