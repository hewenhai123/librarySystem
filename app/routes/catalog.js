/**
 * Created by Administrator on 2019/2/4 0004.
 */

const express =require("express");
const router =express.Router();

//引入控制器模块
const book_controller =require('../controllers/bookController');
const author_controller=require('../controllers/authorController');
const genre_controller=require('../controllers/genreController');
const book_instance_controller=require('../controllers/bookinstanceController');


// book routers
// 藏书主页
router.get('/',book_controller.index);

// get请求添加新的藏书。注意此项必须位于显示藏书的路由之前

router.get('/book/create',book_controller.book_create_get);








