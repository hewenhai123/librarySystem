const Author =require('../models/author');
const Book=require('../models/book');
const async=require('async');
const mongoose=require('mongoose');
//显示作者列表
exports.author_list = (req, res, next) => {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec((err, list_authors) => {
            if (err) {
                return next(err)
            }
            // res.send({title:'Author List',author_list:list_authors});
            res.render('author_list', {title: 'Author List', author_list: list_authors});
        });
};

//为每位作者显示详细信息页面
exports.author_detail=(req,res,next)=>{
    let id=mongoose.Types.ObjectId(req.params.id);
       async.parallel({
           author:(callback)=>{
               Author.findById(req.params.id)
                   .exec(callback)
           },
           author_books:(callbacck)=>{
                  Book.find({"author":req.params.id})
                      .exec(callbacck)
           }
       },(err,results)=>{
           if(err){
               return next(err);
           }
   // res.send({"author":results.author,"author_books":results.author_books})
         res.render("author_detail",{"title":"author","author":results.author,"author_books":results.author_books});


       });


    // res.send(
    //
    // "为实现：作者详细信息"+req.params.id)

};

// 由GET 显示创建作者的表单
exports.author_create_get=(req,res)=>{res.send("未实现：作者创建表单的GET")};

// 由 POST 处理作者创建操作
exports.author_create_post=(req,res)=>{res.send("未实现：创操作者POST")};

// 由GET 显示删除作者的表单
exports.author_delete_get=(req,res)=>{ers.send("未实现 ：删除作者表单GET")};

// 由 POST 处理作者删除操作
exports.author_delete_post=(req,res)=>{res.send("未实现 ：删除作者操作POST")};

// 由GET 显示更新作者的表单
exports.author_update_get=(req,res)=>{res.send("未实现： 更表单页面GET")};

// 由 POST 处理作者更新操作
exports.author_uptate_post=(req,res)=>{res.send("未实现： 处理作者更新操作POST")};






