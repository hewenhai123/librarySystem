var express = require('express');
var router = express.Router();
const login_controller=require('../controllers/loginController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',(req,res)=>{
  res.redirect('/catalog');

});
router.get('/login',login_controller.index);
router.post('/login',login_controller.login_post);
module.exports = router;
