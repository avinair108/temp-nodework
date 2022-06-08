const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end('Welcome broski, to my homepage')
    }
    if(req.url === '/about'){
        res.end('dis the about page yo')
    }
    res.end(`
    <h1>OOPS! this page dont exist yo<h1>
    <p> your page is not available <p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)