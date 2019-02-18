/**
 * Created by Administrator on 2019/1/15 0015.
 */
/*
*
* 藏书模型
* */

const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const BookSchema=new Schema({
    title:{type:String,required:true},
    author:{type:Schema.Types.ObjectId,ref:'Author',required:true},
    summary:{type:String,required:true},
    isbn:{type:String,required:true},
    genre:[{type:Schema.Types.ObjectId,ref:'genre'}]
    //在 bookController 中使用到 genre时发现 如果ref=Genre 则 populate会报错
    //但是author的ref设置是没有错误的。
    //Schema hasn't been registered for model "Genre". Use mongoose.model(name, schema)
});

// 虚拟属性 ‘url' :藏书url

BookSchema.virtual("url").get(function(){
   return '/catalog/book/'+this._id;
});


module.exports=mongoose.model('Book',BookSchema)