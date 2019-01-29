/**
 * Created by Administrator on 2019/1/15 0015.
 */

/*
* 作者模型构建
*
* */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
* 导出作者模型
* */

module.exports = mongoose.model('Author', AuthorSchema);