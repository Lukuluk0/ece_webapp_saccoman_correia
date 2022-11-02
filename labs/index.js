//Import a module
const http = require('http')

const {serverHandle} = require('./handles')

const port = "8080"
const callback = () =>
{
    console.log("Server ir running at http::/localhost :" + port)
}

http.createServer(serverHandle).listen(port, callback)

/*const port = 3000
const express = require('express')
const app = express()
const appli = require('./articles')

app.use('/articles', appli)

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/