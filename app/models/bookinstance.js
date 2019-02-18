/**
 * Created by Administrator on 2019/1/15 0015.
 */





/*
*
* 藏书副本
*
* */

const  mongoose=require("mongoose");
const  Schema=mongoose.Schema;
const moment=require("moment");


/*
*
* 定义模型
* */
const BookInstanceSchema=new Schema({
    // 指向相关藏书的引用
    book:{type:Schema.Types.ObjectId,ref:'Book',required:true},
   // 出版项
    imprint:{type:String,required:true},
    status:{
        type:String,
        required:true,
        // enum:['可供借阅','馆藏维护','已借出','保留'],
        enum:['Available','Maintenance','lent','Reserved'],
        default:'Maintenance'
    },
    due_back:{type:Date,default:Date.now}
});


/*
*
* 虚拟属性‘url’ 藏书副本 url
* */
BookInstanceSchema.virtual("url").get(function(){
    return '/catalog/bookinstance/'+this._id;
});

/*
*  格式化时间属性
* */
BookInstanceSchema.virtual('due_back_formartted')
    .get(()=>{
      return moment(this.due_back).format('MMMM Do, YYYY');
    });

//导出
module.exports=mongoose.model("BookInstance",BookInstanceSchema);







