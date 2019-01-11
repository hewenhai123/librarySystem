/**
 * Created by Administrator on 2019/1/11 0011.
 * dfgsjdf;gsdf
 */



var express=require("express");
var app=express();
 app.get('/',(req,res)=>{
      res.send('Hello world');
 });


 app.listen(8800,()=>{
     console.log('服务器express启动 http://127.0.0.1:8800')
 })
