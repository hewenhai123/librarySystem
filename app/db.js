/**
 * Created by Administrator on 2019/1/14 0014.
 */
var mongoose=require('mongoose');
var mongoDB='mongodb://127.0.0.1:27017/my_database';
var Schema=mongoose.Schema();
var SomeModelSchema=new Schema({
    a_string:String,
    a_date:Date
})
mongoose.connect(mongoDB);

mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('connected',function () {
    console.log('Mongose connection open to '+mongoDB +' success!')
});
db.on('error',console.error.bind(console,'MongoDB connection error:'));

