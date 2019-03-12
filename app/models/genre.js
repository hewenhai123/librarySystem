
/**
 * Created by Administrator on 2019/1/15 0015.
 * asda
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GenreSchema = new Schema({
    // book: {type: Schema.Types.ObjectId, ref: 'Book', required: true, min: 3, max: 100},
    name: {
        type: String,
        required: true,
        enum: ['小说', '纪事', '军事', '爱情','奇幻','科幻','诗歌','历史','伦理'],
        default: '小说'
    }
});

GenreSchema.virtual("url").get(function(){
    return '/catalog/genre/'+this._id
});

module.exports=mongoose.model('genre',GenreSchema);























