
var http=require('http');
function myfun(req,resp)
{
resp.write("Hello world");
resp.end();
}
var server=http.createServer(myfun);
server.listen(2000);
console.log("server listeing on 2000");