/**
 * Created by Administrator on 2019/1/11 0011.
 */



var express=require("express");
var app=express();
 app.get('/',(req,res)=>{
      res.send('Hello world');
 });
