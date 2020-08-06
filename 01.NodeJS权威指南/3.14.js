var http = require('http');
var server = http.createServer();

server.setMaxListeners(10);
//server.once 执行一次立即返回
server.on('request',function(req,res){
    if(req.url !== "/favicon.ico") {
        console.log(req.url); 
     }
    res.end();
});

console.log(server.listeners('request'));
server.listen(1337,'127.0.0.1');
