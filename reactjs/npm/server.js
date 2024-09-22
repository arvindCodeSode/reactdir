const http = require("http");

http.createServer((req,res)=>{
res.write('Hello There! Server is working');
res.end();   

}).listen(4500)