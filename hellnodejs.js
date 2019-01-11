/**
 * Created by Administrator on 2019/1/11 0011.
 */

const http=require("http");
const hostname='127.0.0.1';
const port=3000;

const server =http.createServer((req,res)=>{
    res.statusCode=201;
    res.setHeader('Content-Type','html');
    res.end('Hello Word');
    })
server.listen(port,hostname,()=>{
    console.log("服务器已经启动 http://"+hostname+":"+port);
})
