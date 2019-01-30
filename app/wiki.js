/**
 * Created by Administrator on 2019/1/30 0030.
 */


const express=require('express');
const router=express.Router();

//home page route

router.get('/',function(req,res){
    res.send("Wiki home page");
});

//auto page rpute

router.get('/about',function(req,res){
   res.send('About this wiki');
});

//post请求

router.post('/aboutPost',function(req,res){
    res.json({"about":"ok"})
});


router.get('/user/:userId/books/:bookId',function(req,res){
    console.log(req.params.userId);
    console.log(req.params.bookId);
res.send(req.params)
});


module.exports=router;


