/**
 * Created by Administrator on 2019/3/1 0001.
 */


var fs=require('fs');
var mapDta=[];
const writFileFn=(index,data)=>{
    fs.writeFile("./RussiaMap"+index+".js",JSON.stringify(data),{flag:"w",encoding:"utf-8"},function(err,){
        if(err){
            console.log("写入失败")
        }else{
            console.log("写入成功");
        }
    })
}
const writeMapD=(data)=>{
    fs.writeFile("./mapData.json",JSON.stringify(data),{flag:"a",encoding:"utf-8"},(err)=>{
        if(err){
            console.log("mapD写入失败")
                    }
                    else{
            console.log("mapD写入成功")
        }
    })
}

fs.readFile('./Russia.json',"utf-8",function(err,data){

    if(err){
        console.log(err)

    }else{
        data= JSON.parse(data);
        var result='';
        var  features=data["features"];
        var propertiesList=[];
        var tempObj=[];
        var temp1=0;
        var fileLen=0;
     for(let i=0,len=features.length;i<len;i++){
         var itemName=features[i]["properties"];
         var newObj={};
         newObj["name"]=itemName["name"];
         newObj["name_local"]=itemName["name_local"];
         features[i]["properties"]=newObj;
         tempObj.push( features[i]);
         temp1++;
         mapDta.push({"name":newObj["name"],"value":Math.random()*Math.round(Math.random()*1000)})

        if(temp1>8){
            writFileFn(fileLen,tempObj);
            fileLen++;
            temp1=0;
            tempObj=[];
       }


     }
        writeMapD(mapDta);

        console.log(typeof data)
    }



});
