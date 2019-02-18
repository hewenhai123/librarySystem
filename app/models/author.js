/**
 * Created by Administrator on 2019/1/15 0015.
 */

/*
* 作者模型构建
*
* */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment=require("moment");
/*
* 设置模型
* */
let AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date}, //出生
        date_of_death: {type: Date} //死亡
    }
);


/*
*
* 虚拟属性 作者全名
* */
AuthorSchema.virtual("name").get(function(){
    return this.family_name+','+this.first_name;
});

/*
*
* 虚拟属性 lifespan 作者寿命
* */

AuthorSchema.virtual("lifespan").get(function(){

   return (this.date_of_death.getYear()-this.date_of_birth.getYear()).toString();
});

/*
* 虚拟属性 url 作者url
* */

AuthorSchema.virtual("url").get(function () {
    return '/catalog/author/'+this._id;

})
/*
*  虚拟属性 格式花时间
* */
AuthorSchema.virtual("date_format")
    .get(function(){
    let date_list={
        "date_of_birth":this.date_of_birth,
        "date_of_death":this.date_of_death
    };
        for(let item in  date_list){
        let curVal=date_list[item];
        if(curVal){
            date_list[item]=moment(curVal).format("MMMM Do, YYYY");
        }else{
            date_list[item]=" ";
        }
    }
    return date_list
    });


/*
* 导出作者模型
* */

module.exports = mongoose.model('Author', AuthorSchema);