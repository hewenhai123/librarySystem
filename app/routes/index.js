var express = require('express');
var router = express.Router();
const user_controller=require('../controllers/userController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',(req,res)=>{
  res.redirect('/catalog');

});
router.get('/login',user_controller.index);
router.post('/login',user_controller.login_post);
router.get('/register',user_controller.get_register);
router.post('/register',user_controller.post_register);
module.exports = router;
