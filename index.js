// Import a module
const http = require('http')

const {serverHandle} = require('./handles')

const port = "8080"

const callback = () =>
{
    console.log("Server ir running at http::/localhost :" + port)
}

http.createServer(serverHandle).listen(port, callback)
