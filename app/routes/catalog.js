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

//POST 请求添加新的藏书

router.post('/book/create',book_controller.book_create_post);

//GET 请求删除藏书
router.get('/book/:id/delete',book_controller.book_delete_get);

// POST 请求删除藏书
router.post('/book/:id/delete',book_controller.book_delete_post);

// GET 请求更新藏书
router.get('/book/:id/update',book_controller.book_update_get);

//POST 请求更新藏书
router.post('/book/:id/update',book_controller.book_update_post);

//GET 请求藏书
router.get('/book/:id',book_controller.book_detail);

//POST 请求完整藏书列表
router.get('/books',book_controller.book_list);



//  AUTHOR ROUTERS

// GET 创建作者
router.get('/author/create',author_controller.author_create_get);

// POST 创建作者
router.post('/author/create',author_controller.author_create_post);

// GET 删除作者
router.get('/author/:id/delete',author_controller.author_delete_get);

// POST 删除作者
router.post('/author/:id/delete',author_controller.author_delete_post);

// GET 更新作者
router.get('/author/:id/update',author_controller.author_update_get);

//POST 更新作者
router.post('/author/:id/update',author_controller.author_uptate_post);

// GET 查看作者详情
router.get('/author/:id',author_controller.author_detail);

// GET 获取作者列表
router.get('/authors',author_controller.author_list);


// GENRE ROUTERS

//GET 创建类型
router.get('/genre/create',genre_controller.genre_create_get);

//POST 创建类型
router.post('/genre/create',genre_controller.genre_create_post);

//GET 删除类型
router.get('/genre/:id/delete',genre_controller.genre_delete_get);

//POST 删除类型
router.post('/genre/:id/delete',genre_controller.genre_delete_post);

//GET 更新类型
router.get('/genre/:id/update',genre_controller.genre_update_get);

//POST 更新类型
router.post('/genre/:id/update',genre_controller.genre_update_post);

//GET 获取类型详情
router.get('/genre/:id',genre_controller.genre_detail);

//GET 获取类型列表
router.get('/genres',genre_controller.genre_list);


/// BOOKINSTANCE ROUTES ///

//GET 创建藏书副本
router.get('/bookinstance/create',book_instance_controller.bookinstance_create_get);

//POST 创建藏书副本
router.post('/bookinstance/create',book_instance_controller.bookinstance_create_post);

// GET 删除藏书副本
router.get('/bookinstance/:id/delete',book_instance_controller.bookinstance_delete_get);

//POST 删除藏书本部
router.post('/bookinstance/:id/delete',book_instance_controller.bookinstance_delete_post);

//GET 更新藏书副本
router.get('/bookinstance/:id/update',book_instance_controller.bookinstance_update_get);

//POST 更新藏书副本
router.post('/bookinstance/:id/update',book_instance_controller.bookinstance_update_post);

//GET 查看单个参数副本
router.get('/bookinstance/:id',book_instance_controller.bookinstance_detail);

//GET 查看藏书列表
router.get('/bookinstances',book_instance_controller.bookinstance_list);

module.exports=router;







