/**
 * Created by Administrator on 2019/1/14 0014.
 */
var mongoose=require('mongoose');
var mongoDB='mongodb://127.0.0.1:27017/chuzu';
var Schema=mongoose.Schema;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('connected',function () {
    console.log('Mongose connection open to '+mongoDB +' success!')
});
db.on('error',console.error.bind(console,'MongoDB connection error:'));

const fanwuleixing=new Schema({
    typename:String

})
const tScchema = new Schema({
    ctname: {type: String},

});
const hsScchema = new Schema({
    stname: {type: String},

});

const fan=mongoose.model("preordains",fanwuleixing);
const tsname=mongoose.model("hcountys",tScchema);
const hs=mongoose.model("hstructures",hsScchema);

hs.find({},function(er,doc){
    console.log(doc)
})



let iint=new fan({
    tyname: "公寓234"

})




// let iint3=new tsname({
//     ctname: "上海"
//
// })
// let iint4=new hs({
//     stname: "三居室"
//
// })
// iint4.save((er)=>{
//     console.log(er)
// })

// iint.save((er)=>{
//     console.log(er)
// })
//
// const KittySchema=new Schema({
//    name:String,
//     age:String,
//     qq:String,
//     tel:String
// });
// const userModel=mongoose.model('user',KittySchema);
//
//
// var doucmentLength=0;
// userModel.count({},function(er,len){
//     doucmentLength=len;
// });
// console.log(doucmentLength);
// userModel.find({age:"88",qq:"18214874"},{name:1},function(er,doc){
//     console.log(doc)
// });


// var nameary= ["vtkogn", "tcunkwvu", "uwsbrbl", "suhcafln", "puwpcgt", "xfnvock", "trgtllqk", "cfnocsy", "ucuroh", "giltwzxfo", "epoqueqg", "rkxesku", "qebbemwnc", "ykpgzmq", "lbivvgb", "foihmqmh", "lgtvxtqgi", "aolzgwgfr", "mmmnfgqls", "bciikfml", "vxzxcbhit", "giluwg", "wdeemhng", "wvihmyz", "opybkshpg", "xtgonctr", "nmbseoho", "amqrtlw", "oitkizyhs", "ewqbugo", "fuqskgbr", "gkozfyf", "gqihcubf", "bqefvzig", "muykfscf", "wffaisx", "ntpgsrg", "bcqlmxpmh", "mcouoyk", "xopwlmnnk", "pvuxoctn", "bbyuhco", "ksilgy", "yqhmigg", "pvcufy", "ryabmy", "xsfgolsbs", "qfbwvka", "ryigsmq", "rxqtbs", "gzentn", "qimsgiv", "hcwtani", "grikqsu", "yqxfdymlk", "tckswnrh", "yuuqoeem", "xrbsywg", "btnglr", "vpeyrkbqbe", "sqebxbav", "ygntysz", "fziegzpe", "utsqxxxy", "ehqgxynwo", "opbyfl", "ygzzytmby", "fhqshbiz", "bierpvn", "qohbvw", "gtlgaqqps", "usloxkoo", "ykhmmfgye", "gvgxkqrn", "ggconunoa", "braiug", "gfebidev", "bqcghq", "tiuuslocr", "sxogswpa", "qyozypk", "gocdmqif", "kvaognivy", "mybgatcx", "xdyefagf", "kvkwpg", "gwocukgni", "ccdyifiy", "hbfumgto", "lpgilg", "zvsbbapbe", "akgibkpkd", "trgdbudib", "mmspvxr", "vysuybs", "fvqevutwe", "sryyfynmu", "kushqyavk", "nxzsdyske", "gnnhpg"];

// for(let i=0;i<nameary.length;i++){
//     userModel.remove({name:nameary[i]},function(){
//     })
// }
// return


// for(let i=0;i<nameary.length;i++){
//     let kittEntity=new userModel({
//         name:nameary[i],
//         age:Math.round(Math.random()*99),
//         qq:Math.round(Math.random()*100000000),
//         tel:Math.round(Math.random()*99999999999)
//     });
//     kittEntity.save(function (err) {
//         if(err){
//             console.log("写入失败")
//         }else{
//             console.log("写入成功")
//         }
//     })
// }







