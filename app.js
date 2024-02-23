const http=require('http')

http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/register'){

        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>register<h2>')
        res.end()
    }
    else if(req.url=='/login'){
        res.write('login')
        res.end()
    }

}).listen(4000)